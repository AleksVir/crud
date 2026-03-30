import React from 'react';
import { Note } from '../types';
import { NoteCard } from './NoteCard';

interface NotesListProps {
  notes: Note[];
  onDelete: (id: number) => void;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

export const NotesList: React.FC<NotesListProps> = ({
  notes,
  onDelete,
  loading,
  error,
  onRefresh
}) => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <h2>Список заметок</h2>
        <button
          onClick={onRefresh}
          style={{
            marginLeft: '16px',
            background: 'none',
            border: '1px solid #007bff',
            color: '#007bff',
            cursor: 'pointer',
            padding: '4px 8px'
          }}
        >
          Обновить
        </button>
      </div>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}

      {!loading && !error && notes.length === 0 && <p>Заметок пока нет</p>}

      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};
