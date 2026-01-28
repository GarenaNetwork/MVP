import React from "react";
import styled from "styled-components";
import { FaCheckCircle, FaSpinner, FaCircle } from "react-icons/fa";

const StepperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
`;

const StepItem = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => (props.active || props.completed ? "#ffffff" : "rgba(255, 255, 255, 0.4)")};
  transition: all 0.3s ease;

  svg {
    font-size: 20px;
    color: ${props => (props.completed ? "#00ff88" : props.active ? "#CE0076" : "inherit")};
  }
`;

interface Step {
  label: string;
  status: "pending" | "active" | "completed";
}

interface TransactionStepperProps {
  steps: Step[];
}

export const TransactionStepper: React.FC<TransactionStepperProps> = ({ steps }) => {
  return (
    <StepperWrapper>
      {steps.map((step, index) => (
        <StepItem 
          key={index} 
          active={step.status === "active"} 
          completed={step.status === "completed"}
        >
          {step.status === "completed" ? (
            <FaCheckCircle />
          ) : step.status === "active" ? (
            <FaSpinner className="fa-spin" />
          ) : (
            <FaCircle />
          )}
          <span>{step.label}</span>
        </StepItem>
      ))}
    </StepperWrapper>
  );
};
