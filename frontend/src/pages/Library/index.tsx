import React, { ReactEventHandler, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import TableComponent from '../../components/TableComponent';
import ModalForm from '../../components/ModalForm';
import { LibraryFilterInterface, LibraryInterface } from '../../interfaces/LibraryInterface';
import { Container, ContainerHeader, ContainerTable, NewBtn, SearchField } from './styles';
import { create, update, getAll, remove } from '../../services/LibraryService';

export default function Library() {

    const [libraryData, setlibraryData] = useState<Array<LibraryInterface>>([]);
    const [openModal, setopenModal] = useState(false);
    const [updateList, setupdateList] = useState(false);
    const [currentIsbn, setcurrentIsbn] = useState<number>(0);
    const isEdit = useRef<any>(false);
    const [searchIsbn, setsearchIsbn] = useState<number>(0);

    useEffect(() => {
        listAll();
        if(updateList) {
            listAll();
            setupdateList(false);
        }
    }, [updateList, searchIsbn]);

    async function listAll() {
        const filter: LibraryFilterInterface = {};

        if(searchIsbn) {
            filter.isbn = searchIsbn
        }

        await getAll(filter).then(({ data }) => {
            setlibraryData(data);
        });
    }

    function handleOpenModal(e: any) {
        if(e.target.getAttribute('data-type') === 'edit') {
            setcurrentIsbn(Number(e.target.getAttribute('data-isbn')));
            isEdit.current = true;
        }
        setopenModal(true);
    }

    function handleCloseModal() {
        isEdit.current = false;
        setopenModal(false);
    }

    async function handleCreate(e: any) {
        e.preventDefault();

        const book_name = e.target.book_name.value;
        const author_name = e.target.author_name.value;
        const number_pages = e.target.number_pages.value;
        const copies_available = e.target.copies_available.value;

        await create({
            book_name: book_name,
            author_name: author_name,
            number_pages: number_pages,
            copies_available: copies_available
        }).then(() => {
            isEdit.current = false;
            setopenModal(false);
            setupdateList(true);
        });
    }

    async function handleEdit(e: any) {
        e.preventDefault();

        const book_name = e.target.book_name.value;
        const author_name = e.target.author_name.value;
        const number_pages = e.target.number_pages.value;
        const copies_available = e.target.copies_available.value;

        await update(currentIsbn, {
            book_name: book_name,
            author_name: author_name,
            number_pages: number_pages,
            copies_available: copies_available
        }).then(() => {
            isEdit.current = false;
            setopenModal(false);
            setupdateList(true);
        });
    }

    async function handleDelete(e: any) {
        const isbn = e.target.getAttribute('data-isbn');
        await remove(Number(isbn)).then(() => {
            setupdateList(true);
        });
    }

    return(
        <>
        <Header />
        <Container>
            <ContainerHeader>
                <SearchField type="number" placeholder="Search isbn number here" onChange={(e: any) => setsearchIsbn(e.target.value)} />
                <NewBtn onClick={handleOpenModal}>New Book</NewBtn>
            </ContainerHeader>
            <ContainerTable>
                <TableComponent data={libraryData} handleOpenModal={handleOpenModal} handleDelete={handleDelete} />
            </ContainerTable>
        </Container>
        <ModalForm open={openModal} onClose={handleCloseModal} isEdit={isEdit.current} onSubmit={isEdit.current ? handleEdit : handleCreate} />
        </>
    )
}