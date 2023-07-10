import {
      Button,
      Container,
      Image,
      Title,
      TopBar,
} from './styles';

interface PageHeaderProps {
      title: string;
      onPress: () => void;
}

export function PageHeader({ title, onPress }: PageHeaderProps) {
      
      const backIcon = require('../../assets/images/icons/back.png');
      const logoImg = require('../../assets/images/logo.png');

      // function handleGoBack() {
      //       navigation.navigate("Landing");
      // }

      return (
            <Container>
                  <TopBar>
                        <Button onPress={onPress}>
                              <Image source={backIcon} resizeMode="contain" />
                        </Button>

                        <Image source={logoImg} resizeMode="contain" />
                  </TopBar>

                  <Title>{title}</Title>
            </Container>
      );
}
