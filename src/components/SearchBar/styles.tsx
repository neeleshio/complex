import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    border: 1px solid #24232f;
    display: flex;
    border-radius: 4px;
    align-items: center;
    padding: 0.8rem 1.2rem;
    margin-left: 8rem;

    input {
        outline: none;
        border: 0;
        background-color: transparent;
        padding-right: 1rem;
        width: 30rem;
        font-size: 1.4rem;
        font-family: 'Tomorrow', sans-serif;
        color: ${(props) => props.theme.secondaryTextColor};
        font-weight: 600;
    }

    .key-shortcut {
        font-size: 1rem;
        color: ${(props) => props.theme.secondaryTextColor};
    }
`;