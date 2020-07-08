import styled, { css } from 'styled-components';

import { LocationOn, Ball, Verify, Link } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /** Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  background-size: cover;
  background-origin: content-box;
  position: relative;
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  background-origin: center;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--twitter);
  background: var(--twitter);
  background-clip: inherit;
  background-size: contain;
  border-radius: 50%;
  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 19px;
    align-items: center;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;
    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    > li {
      font-size: 15px;
      color: var(--gray);
      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }
  }
`;

export const NameUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const VerifyIcon = styled(Verify)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  > path {
    fill: var(--twitter);
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const LinkIcon = styled(Link)`
  margin-left: 8px;
  ${iconCSS}
`;

export const BallIcon = styled(Ball)`
  ${iconCSS}
  width: 16px;
  margin-left: 2px;
  color: red;
`;

export const Followage = styled.div`
  display: flex;
  > span {
    font-size: 15px;
    color: var(--gray);
    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;
  padding: 4px 16px;
  font-size: 13px;
  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
