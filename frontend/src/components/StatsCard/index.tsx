import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-5px);
    border-color: rgba(206, 0, 118, 0.3);
  }
`;

const Label = styled.span`
  color: #bec9da;
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.h2`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  font-family: "Space Grotesk", sans-serif;
`;

const Change = styled.span<{ positive: boolean }>`
  font-size: 12px;
  color: ${props => (props.positive ? "#00ff88" : "#ff4d4d")};
  font-weight: 600;
`;

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  positive?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, change, positive = true }) => {
  return (
    <CardWrapper>
      <Label>{label}</Label>
      <Value>{value}</Value>
      <Change positive={positive}>{change} from last month</Change>
    </CardWrapper>
  );
};
