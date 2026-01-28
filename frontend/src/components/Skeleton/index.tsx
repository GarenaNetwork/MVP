import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const SkeletonBase = styled.div<{ width?: string; height?: string; borderRadius?: string }>`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "20px"};
  border-radius: ${props => props.borderRadius || "4px"};
  background: #1a1a1a;
  background-image: linear-gradient(
    to right,
    #1a1a1a 0%,
    #2a2a2a 20%,
    #1a1a1a 40%,
    #1a1a1a 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation: ${shimmer} 1.5s linear infinite forwards;
`;

export const GameCardSkeleton = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Skeleton = {
  Base: SkeletonBase,
  GameCard: () => (
    <GameCardSkeleton>
      <SkeletonBase height="150px" borderRadius="12px" />
      <SkeletonBase width="80%" height="24px" />
    </GameCardSkeleton>
  ),
};
