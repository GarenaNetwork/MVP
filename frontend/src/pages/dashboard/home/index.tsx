import React, { useState } from "react";
import { DashboardLayout } from "../../../layout";
import {
  ConnectWalletButton,
  GridGroupWraper,
  WelcomeContainer,
  WelcomeImageWrapper,
  WelcomeRecentAddedWrapper,
} from "./styles";
import GameListGrid from "../../../components/GameListGrid";
import { gameList } from "../data";
import { ConnectButton } from "@particle-network/connect-react-ui";
import AuthModals from "../../../components/AuthModals";
import useAuthState from "../../../hooks/useAuthState";

import { StatsCard } from "../../../components/StatsCard";
import styled from "styled-components";

const StatsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const DashboardHomePage: React.FC = () => {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const { userData } = useAuthState()

  // Simulate initial loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
            <DashboardLayout>
              <WelcomeContainer>
                <WelcomeImageWrapper>
                  <div>
                    <h1>Welcome to GamerHub</h1>
                    <p>
                      Experience the future of gaming across multiple chains, all
                      in one place.
                    </p>
                    {!userData && (
                      <ConnectWalletButton onClick={() => setOpen(true)}>Sign In</ConnectWalletButton>
                    )}
                    
                  </div>
                </WelcomeImageWrapper>
                <WelcomeRecentAddedWrapper>
                  <h1>Recently added</h1>
                </WelcomeRecentAddedWrapper>
              </WelcomeContainer>

              <StatsGrid>
                <StatsCard label="GHT Balance" value="1,240.50" change="+12%" />
                <StatsCard label="Total Earnings" value="$450.20" change="+5.4%" />
                <StatsCard label="Games Played" value="24" change="+2" />
                <StatsCard label="Achievements" value="8" change="+1" />
              </StatsGrid>

              <GridGroupWraper>
                <GameListGrid title="All games" list={gameList} loading={loading} />
              </GridGroupWraper>
            </DashboardLayout>
          );
        }}
      </ConnectButton.Custom>
      <AuthModals link={null} open={open} setOpen={setOpen} />
    </>
  );
};


export default DashboardHomePage