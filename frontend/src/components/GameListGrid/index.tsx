import React from "react";
import {
  AllViewButton,
  GameListGridWrapper,
  GridHeaderWraper,
  ImageGrid,
} from "./styles";
import { useNavigate } from "react-router-dom";
import OptimizedImage from "../../components/OptimizedImage"
import { trackWindowScroll  } from 'react-lazy-load-image-component';

import { Skeleton } from "../Skeleton";
import { EmptyState } from "../EmptyState";

export type GameListGridProps = {
  title?: string;
  list?: Array<GameListProps>;
  loading?: boolean;
};

export type GameListProps = {
  image: string;
  blurHash: string;
};

const GameListGrid: React.FC<GameListGridProps> = ({ title, list, loading }) => {
  const router = useNavigate();
  return (
    <GameListGridWrapper>
      <GridHeaderWraper>
        <h1>{title}</h1>
        <AllViewButton>
          View all <img src="/images/userdashboard/view-all.png" alt="" />
        </AllViewButton>
      </GridHeaderWraper>
      <ImageGrid>
        {loading ? (
          [1, 2, 3, 4, 5].map((i) => <Skeleton.GameCard key={i} />)
        ) : list && list.length > 0 ? (
          list.map((item, key) => (
            <div
              key={key}
              onClick={() => router("/dashboard/game/" + (Number(key) + 1))}
            >
              <OptimizedImage
                src={item?.image}
                width={"200px"}
                height={"auto"}
                alt={""}
                blurHash={""}
              />
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </ImageGrid>
    </GameListGridWrapper>
  );
};


export default trackWindowScroll(GameListGrid)