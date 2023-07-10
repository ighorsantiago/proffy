import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
      border-width: 1px;
      border-color: #E6E6F0;
      border-radius: 8px;
      margin-bottom: 16px;
      overflow: hidden;
      background-color: #FFF;
`

export const Profile = styled.View`
      flex-direction: row;
      align-items: center;
      padding: 24px;
`

export const Avatar = styled.Image`
      width: 64px;
      height: 64px;
      border-radius: 32px;
      background-color: #E6E6F0;
`

export const ProfileInfo = styled.View`
      margin-left: 16px;
`

export const Name = styled.Text`
      /* font-family: 'Archivo_700Bold'; */
      font-size: 12px;
      margin-top: 4px;
      color: #32264D;
`

export const Subject = styled.Text`
      /* font-family: 'Poppins_400Regular'; */
      font-size: 12px;
      margin-top: 4px;
      color: #6A6180;
`

export const Bio = styled.Text`
      margin: 0 24px 0 24px;
      /* font-family: 'Poppins_400Regular'; */
      font-size: 14px;
      line-height: 24px;
      color: #6A6180;
`
export const Footer = styled.View`
      align-items: center;
      padding: 24px;
      margin-top: 24px;
      background-color: #FAFAFC;
`

export const Price = styled.Text`
      font-size: 16px;
      /* font-family: 'Poppins_400Regular'; */
      color: #6A6180;
`

export const PriceValue = styled.Text`
      font-size: 16px;
      /* font-family: 'Archivo_700Bold'; */
      color: #8257E5;
`

export const ButtonsContainer = styled.View`
      flex-direction: row;
      margin-top: 16px;
`

export const FavoriteButton = styled(RectButton)`
      width: 56px;
      height: 56px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-right: 8px;
      background-color: #8257E5;
`

export const ContactButton = styled(RectButton)`
      flex: 1;
      height: 56px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-right: 8px;
      background-color: #04D361;
`

export const ContactButtonText = styled.Text`
      font-size: 16px;
      /* font-family: 'Archivo_700Bold'; */
      margin-left: 16px;
      color: #fff;
`