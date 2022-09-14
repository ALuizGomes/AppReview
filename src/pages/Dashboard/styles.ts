import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background}
`

export const Avaliacao = styled.View`
  margin: 4%;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const User = styled.View`
  flex-direction: row;
`

export const Photo = styled.Image`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  /* margin-right: 100px; */
`

export const TextAvaliativo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.header};
  text-align: center;
  margin: 4%;
`

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.name};
  
`

export const Icon = styled(Feather)`
  color: '#0000';
  font-size: ${RFValue(24)}px; 
`
