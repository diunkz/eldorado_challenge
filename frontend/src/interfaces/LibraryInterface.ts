export interface LibraryInterface {
    isbn?: number;
    book_name: string;
    author_name: string;
    number_pages: number;
    copies_available: number;
}

export interface LibraryFilterInterface {
    isbn?: number;
}