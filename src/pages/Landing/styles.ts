import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
      flex: 1;
      background-color: #8257E5;
      justify-content: center;
      padding: 40px;
`;

export const Banner = styled.Image`
      width: 100%;
      /* resize: contain; */
`;

export const Title = styled.Text`
      /* fontFamily: Poppins_400Regular; */
      color: #FFF;
      font-size: 20px;
      line-height: 30px;
      margin-top: 80px;
`;

export const TitleBold = styled.Text`
      /* fontFamily: Poppins_600SemiBold; */
`;

export const ButtonsContainer = styled.View`
      flex-direction: row;
      margin-top: 40px;
      justify-content: space-between;
`;

export const ButtonPrimary = styled(RectButton)`
      height: 150px;
      width: 48%;
      background-color: #333;
      border-radius: 8px;
      padding: 24px;
      justify-content: space-between;
      background-color: #9871f5;
`;

export const ButtonSecondary = styled(RectButton)`
      height: 150px;
      width: 48%;
      background-color: #333;
      border-radius: 8px;
      padding: 24px;
      justify-content: space-between;
      background-color: #04d361;
`;

export const Image = styled.Image``;

export const ButtonText = styled.Text`
      /* fontFamily: Archivo_700Bold; */
      color: #FFF;
      font-size: 20px;
`;

export const TotalConnections = styled.Text`
      /* fontFamily: Poppins_400Regular; */
      max-width: 140px;
      font-size: 12px;
      line-height: 20px;
      margin-top: 40px;
      color: #d4c2ff;
`;
