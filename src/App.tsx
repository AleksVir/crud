import React, { useState, useEffect } from 'react';
import { NotesForm } from './components/NotesForm';
import { NotesList } from './components/NotesList';
import { notesApi } from './api/notesApi';
import { Note } from './types';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await notesApi.getNotes();
      setNotes(data);
    } catch (err) {
      setError('Не удалось загрузить заметки. Проверьте сервер.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (content: string) => {
    try {
      await notesApi.addNote(content);
      fetchNotes(); // Обновляем список после добавления
    } catch (err) {
      setError('Не удалось добавить заметку.');
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await notesApi.deleteNote(id);
      fetchNotes(); // Обновляем список после удаления
    } catch (err) {
      setError('Не удалось удалить заметку.');
    }
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Мои заметки</h1>
      <NotesForm onAdd={handleAddNote} />
      <NotesList
        notes={notes}
        onDelete={handleDeleteNote}
        loading={loading}
        error={error}
        onRefresh={fetchNotes}
      />
    </div>
  );
}

export default App;
