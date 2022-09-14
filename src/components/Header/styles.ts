import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: ${RFPercentage(12)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.header}
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 20px;
`