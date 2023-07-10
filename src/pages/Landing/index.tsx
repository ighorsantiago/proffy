import React from 'react';
// import { useNavigation } from '@react-navigation/native'

import {
      Container,
      Banner,
      Title,
      TitleBold,
      ButtonsContainer,
      ButtonPrimary,
      ButtonSecondary,
      Image,
      ButtonText,
      TotalConnections,
} from './styles';

export function Landing({ navigation }) {

      // const { navigate } = useNavigation();

      const landingImg = require('../../assets/images/landing.png');
      const studyIcon = require('../../assets/images/icons/study.png');
      const giveClassesIcon = require('../../assets/images/icons/give-classes.png');
      const heartIcon = require('../../assets/images/icons/heart.png');

      function handleNavigateToGiveClassesPage() {
            navigation.navigate('GiveClasses');
      }

      function handleNavigateToStudyPages() {
            navigation.navigate('Study');
      }

      return (
            <Container>
                  <Banner source={landingImg} />

                  <Title>
                        Seja bem-vindo, {'\n'}
                        <TitleBold>O que deseja fazer?</TitleBold>
                  </Title>

                  <ButtonsContainer>
                        <ButtonPrimary
                              onPress={handleNavigateToStudyPages}
                        >
                              <Image source={studyIcon} />

                              <ButtonText>Estudar</ButtonText>
                        </ButtonPrimary>

                        <ButtonSecondary
                              onPress={handleNavigateToGiveClassesPage}
                        >
                              <Image source={giveClassesIcon} />

                              <ButtonText>Dar aulas</ButtonText>
                        </ButtonSecondary>
                  </ButtonsContainer>

                  <TotalConnections>
                        Total de 285 conexões já realizadas {' '}
                        <Image source={heartIcon} />
                  </TotalConnections>
            </Container>
      );
}
