import React, { useState } from 'react';

interface NotesFormProps {
  onAdd: (content: string) => void;
}

export const NotesForm: React.FC<NotesFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Текст заметки не может быть пустым');
      return;
    }
    onAdd(content);
    setContent('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Введите текст заметки..."
        rows={3}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      {error && <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>}
      <button type="submit" style={{ marginTop: '8px' }}>Добавить</button>
    </form>
  );
};
