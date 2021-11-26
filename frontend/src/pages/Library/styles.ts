import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerTable = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ContainerHeader = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchField = styled.input`
    width: 200px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
`;

export const NewBtn = styled.button`
    width: 80px;
    height: 40px;
    border: none;
    background: green;
    color: white;
    border-radius: 5px;
`;