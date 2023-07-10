import { useState } from 'react';
import { Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import AsyncStorage from '@react-native-community/async-storage';

import {
      Container,
      Profile,
      Avatar,
      ProfileInfo,
      Name,
      Subject,
      Bio,
      Footer,
      Price,
      PriceValue,
      ButtonsContainer,
      FavoriteButton,
      ContactButton,
      ContactButtonText,
} from './styles';

// import api from '../../services/api';

export interface Teacher {
      id: string,
      name: string,
      avatar: string,
      whatsapp: string
      bio: string,
      subject: string,
      cost: number,
      favorite: boolean,
};

interface TeacherItemProps {
      teacher: Teacher,
      favorited: boolean
};

export function TeacherItem({ teacher, favorited }: TeacherItemProps) {

      const heartOutlineIcon = require('../../assets/images/icons/heart-outline.png');
      const unfavoriteIcon = require('../../assets/images/icons/unfavorite.png');
      const whatsappIcon = require('../../assets/images/icons/whatsapp.png');

      const [isFavorited, setIsFavorited] = useState(favorited);

      function handleLinkToWhatsApp() {
            // api.post('connections', {
            //       user_id: teacher.id,
            // });

            Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
      };

      async function handleToggleFavorite() {
            // const favorites = await AsyncStorage.getItem('favorites');

            let favoritesArray = [];

            // if (favorites) {
            //       favoritesArray = JSON.parse(favorites);
            // }


            if (isFavorited) {
                  const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                        return teacherItem.id === teacher.id
                  });

                  favoritesArray.splice(favoriteIndex, 1);
                  setIsFavorited(false);
            } else {

                  favoritesArray.push(teacher);

                  setIsFavorited(true);
            }
            
            // await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
      }

      return (
            <Container>
                  <Profile>
                        {/* <Avatar source={{ uri: teacher.avatar }} /> */}
                        <Ionicons name="person" size={25} color="black" />

                        <ProfileInfo>
                              <Name>{teacher.name}</Name>
                              <Subject>{teacher.subject}</Subject>
                        </ProfileInfo>
                  </Profile>

                  <Bio>
                        {teacher.bio}
                  </Bio>

                  <Footer>
                        <Price>
                              Preço/hora
                              {'   '}
                              <PriceValue>
                                    R$
                                    {' '}
                                    {teacher.cost}
                              </PriceValue>
                        </Price>

                        <ButtonsContainer>
                              <FavoriteButton onPress={handleToggleFavorite} style={isFavorited ? { backgroundColor: '#e33d3d' } : {}}>

                                    {isFavorited ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}


                              </FavoriteButton>

                              <ContactButton onPress={handleLinkToWhatsApp}>
                                    <Image source={whatsappIcon} />
                                    <ContactButtonText>Entrar em contato</ContactButtonText>
                              </ContactButton>

                        </ButtonsContainer>
                  </Footer>
            </Container>
      )
}
