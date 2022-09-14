import styled from "styled-components/native";

export const Button = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 4%;
`
export const ButtonText = styled.Text`
    font-size: 18px;
    justify-content: space-around;
    border: 1px;
    padding: 1%;

    &:hover {
        color: black;
    }
`