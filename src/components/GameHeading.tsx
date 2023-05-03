import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genreName = genres?.results.find(
    (genre) => genre.id == gameQuery.genreId
  )?.name;

  const platformName = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  )?.name;

  return (
    <Heading paddingY={5} as="h1" fontSize="5xl">
      {platformName} {genreName} Games
    </Heading>
  );
};

export default GameHeading;
