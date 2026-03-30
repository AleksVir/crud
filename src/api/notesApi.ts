import { Note } from '../types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7070/notes',
});

export const notesApi = {
  getNotes: (): Promise<Note[]> => api.get('').then(res => res.data),
  addNote: (content: string): Promise<Note> =>
    api.post('', { id: 0, content }).then(res => res.data),
  deleteNote: (id: number): Promise<void> => api.delete(`/${id}`),
};
