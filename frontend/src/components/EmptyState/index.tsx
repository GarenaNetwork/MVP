import React from "react";
import styled from "styled-components";
import { FaGamepad } from "react-icons/fa";

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  text-align: center;
  gap: 16px;
  width: 100%;
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: rgba(206, 0, 118, 0.5);
  margin-bottom: 8px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #bec9da;
  max-width: 300px;
  margin: 0;
`;

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title = "No games found", 
  description = "Check back later for new and exciting AI-powered games." 
}) => {
  return (
    <EmptyWrapper>
      <IconWrapper>
        <FaGamepad />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </EmptyWrapper>
  );
};
