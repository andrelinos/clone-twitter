import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  BallIcon,
  Followage,
  EditButton,
  NameUser,
  VerifyIcon,
  LinkIcon,
  BannerImage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <BannerImage>
          <img src="https://picsum.photos/600/200" alt="" />
        </BannerImage>
        <Avatar>
          <img
            src="https://pbs.twimg.com/profile_images/1186710586152968192/3WCC4d86_400x400.jpg"
            alt=""
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <NameUser>
          <h1>Andrelino Silva</h1>
          <VerifyIcon />
        </NameUser>

        <h2>@_andrelinosilva</h2>

        <p>
          Studying at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
            <LinkIcon />
            <a href="http://www.andrelinosilva.com.br">andrelinosilva.com.br</a>
          </li>
          <li>
            <BallIcon />
            Nascido(a) em 20 de Fevereiro de 1978
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>411</strong>
          </span>
          <span>
            <strong>84 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
