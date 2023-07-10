import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    padding: 40px;
    background-color: #8257e5;
`;
  
export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(BorderlessButton)``;

export const Image = styled.Image``;

export const Title = styled.Text`
    max-width: 160px;
    color: #FFF;
    font-size: 24px;
    line-height: 32px;
    margin: 40px 0;
    /* fontFamily: Archivo_700Bold; */
`;
