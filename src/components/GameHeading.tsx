import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../hooks/useGamesStore";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genreName = useGenre(selectedGenreId)?.name;

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformName = usePlatform(selectedPlatformId)?.name;

  return (
    <Heading paddingY={5} as="h1" fontSize="5xl">
      {platformName} {genreName} Games
    </Heading>
  );
};

export default GameHeading;
