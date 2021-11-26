import { ActionBox, ActionBtn, Table, Td, Th, Tr } from "./styles";
import { LibraryInterface } from '../../interfaces/LibraryInterface';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

interface TableInterface {
    data?: Array<LibraryInterface>;
    handleOpenModal: any;
    handleDelete: any;
}

export default function TableComponent({ data, handleOpenModal, handleDelete }: TableInterface) {
    return(
        <Table>
            <thead>
                <Th>ISBN</Th>
                <Th>Book</Th>
                <Th>Author</Th>
                <Th>N pages</Th>
                <Th>Available</Th>
                <Th style={{ textAlign: 'center'}}>Actions</Th>
            </thead>
            <tbody>
                {data && (
                    data.map((data: LibraryInterface, index: number) => (
                        <Tr key={index}>
                            <Td>{data.isbn}</Td>
                            <Td>{data.book_name}</Td>
                            <Td>{data.author_name}</Td>
                            <Td>{data.number_pages}</Td>
                            <Td>{data.copies_available}</Td>
                            <ActionBox>
                                <ActionBtn onClick={handleOpenModal} data-isbn={data.isbn} data-type="edit">
                                    Edit
                                </ActionBtn>
                                <ActionBtn onClick={handleDelete} data-isbn={data.isbn}>
                                    Del
                                </ActionBtn>
                            </ActionBox>
                        </Tr>
                    ))
                )}
            </tbody>
        </Table>
    )
}