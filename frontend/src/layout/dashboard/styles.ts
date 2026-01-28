import styled from "styled-components";

export const DashboardLayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(circle at top right, #260033, #00113c);
  display: flex;
  flex-direction: column;
  position: relative;
  
  > .main-wrapper {
    display: flex;
    flex: 1;
    padding-left: 264px;
    transition: padding-left 0.3s ease;
  }

  @media screen and (max-width: 1024px) {
    > .main-wrapper {
      padding-left: 0;
    }
  }
`;

export const MainContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  padding: 40px 24px;
  flex: 1;
`;
