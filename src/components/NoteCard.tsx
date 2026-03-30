import React from 'react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete: (id: number) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '8px 0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      position: 'relative'
    }}>
      <button
        onClick={() => onDelete(note.id)}
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '18px'
        }}
      >
        ×
      </button>
      <p>{note.content}</p>
    </div>
  );
};
