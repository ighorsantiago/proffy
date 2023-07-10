import {
      Container,
      Content,
      Title,
      Description,
      OkButton,
      OkButtonText,
} from './styles';

export function GiveClasses({ navigation }) {

      const giveClassesBgImage = require('../../assets/images/give-classes-background.png');

      function handleNavigateBack() {
            navigation.goBack();
      }

      return (
            <Container>
                  <Content
                        resizeMode="contain"
                        source={giveClassesBgImage}
                  />
                  <Title>Quer ser um Proffy?</Title>
                  <Description>
                        Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                  </Description>
                  <OkButton onPress={handleNavigateBack}>
                        <OkButtonText>Tudo bem</OkButtonText>
                  </OkButton>
            </Container>
      );
}
