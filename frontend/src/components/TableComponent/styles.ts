import styled from 'styled-components';

export const Table = styled.table`
      border-collapse: collapse;
`;

export const Th = styled.th`
    width:150px;
    background: #ddd;
    color: black;
    text-align: start;
`;

export const Tr = styled.tr`
    background: transparent;
    margin-bottom: 10px;
`;
export const Td = styled.td`
    width: 150px;
    background: transparent;
    color: black;
    margin-left: 10px;
    text-align: start;
`;

export const ActionBox = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
`;

export const ActionBtn = styled.button`
    width: 40px;
    height: 30px;
    border: none;
    background: #ddd;
    box-shadow: 1px #888888;
    border-radius: 5px;
`;
