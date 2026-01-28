import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: url("/images/landing/home-bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  strong {
    color: #CE0076;
  }
`;

export const HomeSectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 100px;
  min-height: 840px;
  display: flex;
  > div {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
  }
  h1 {
    max-width: 704px;
    width: 100%;
    color: linear-gradient(92.04deg, #ffffff 0%, #d1adff 105.11%);
    background-clip: text;
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    font-family: "Space Grotesk";
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 100px;
  }
  strong {
    color: #CE0076;
  }
  @media screen and (max-width: 1300px) {
    padding: 30px;
    padding-top: 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 8px;
    padding-top: 40px;
    flex-wrap: wrap;
    h1 {
      font-size: 32px;
      text-align: center;
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;



export const HomeBtn = styled.div`
  position: relative;
  cursor: pointer;
  width: 240px;
  height: 64px;
  background: linear-gradient(90deg, #CE0076 0%, #7600CE 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(206, 0, 118, 0.3);
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const HomeSocialLinks = styled.div`
  margin-top: 10px;
  padding: 24px 34px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  display: flex;
  width: 240px;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
  & > :not(:first-child) {
    margin-left: 42px;
  }
  @media screen and (max-width: 768px) {
    transform: translate(50%, 0);
    right: 50%;
    width: 180px;
    padding: 20px 30px;
  }
  @media screen and (max-width: 560px) {
    position: static;
    transform: translate(0, 0);
    margin-top: 40px;
    & > :not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export const SocialItem = styled.a`
  display: inline-flex;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
    color: #CE0076;
  }
`;

export const HeroLeftSection = styled.div`
  margin-top: 10px;
  padding-top: 220px;
  background: url("/images/landing/home-character.png") no-repeat;
  background-size: 480px 600px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const HeroCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  height: 110px;
  width: 300px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 24px;
  font-size: 14px;
  justify-self: start;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  p {
    max-width: 180px;
    line-height: 1.4;
    strong {
      color: #CE0076;
    }
  }
`;
