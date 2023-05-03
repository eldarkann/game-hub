import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenre(gameQuery.genreId)?.name;
  const platformName = usePlatform(gameQuery.platformId)?.name;

  return (
    <Heading paddingY={5} as="h1" fontSize="5xl">
      {platformName} {genreName} Games
    </Heading>
  );
};

export default GameHeading;
