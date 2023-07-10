import { PageHeader } from '../../components/PageHeader';

import { Container } from './styles';

function Favorites({ navigation }) {

      function handleGoBack() {
            navigation.navigate("Landing");
      }

      return (
            <Container>
                  <PageHeader title="Meus proffys favoritos" onPress={handleGoBack} />
            </Container>
      );
}

export default Favorites;