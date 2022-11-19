import React from 'react';
import {useSelector} from "react-redux";
import {AppState} from "../../store/store";
import styled from "styled-components";

const TextFieldStyled = styled.article`
  padding: 24px;
`

const TextField = () => {
    const { stripped } = useSelector(({data}: AppState) => data)

    return (
        <>
            <h3>Stripped text</h3>
            <TextFieldStyled>
                {stripped}
            </TextFieldStyled>
        </>
    )
}

export default TextField