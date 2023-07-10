import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
      flex: 1;
      justify-content: center;
      padding: 40px;
      background-color: #8257E5;
`;

export const Content = styled.ImageBackground`
      flex: 1;
      justify-content: center;
`;

export const Title = styled.Text`
      max-width: 180px;
      font-size: 32px;
      line-height: 37px;
      /* fontFamily: Archivo_700Bold; */
      color: #FFF;
`;

export const Description = styled.Text`
      max-width: 240px;
      margin-top: 24px;
      font-size: 16px;
      line-height: 26px;
      /* fontFamily: Poppins_400Regular; */
      color: #d4c2ff;
`;

export const OkButton = styled(RectButton)`
      height: 58px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin: 40px 0;
      background-color: #04d361;
`;

export const OkButtonText = styled.Text`
      color: #FFF;
      font-size: 16px;
      /* fontFamily: Archivo_700Bold; */
`;
