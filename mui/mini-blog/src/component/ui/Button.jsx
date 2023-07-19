import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding : 8px 16px;
    font-size : 16 px
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function Button(props){
    const {title,onClik} = props;
    return <StyledButton onClick={onClik}>{title || "button"}</StyledButton>
}
export default Button;