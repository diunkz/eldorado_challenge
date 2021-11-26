import api from './api';
import { LibraryFilterInterface, LibraryInterface } from '../interfaces/LibraryInterface';

export async function getAll(filter: LibraryFilterInterface) {
    return await api.get('/library', {
        params: filter
    });
}

export async function create(library: LibraryInterface) {
    return await api.post('/library', library);
}

export async function update(isbn: number, library: LibraryInterface) {
    return await api.put(`/library/${isbn}`, library);
}

export async function remove(isbn: number) {
    return await api.delete(`/library/${isbn}`);
}