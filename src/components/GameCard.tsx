import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import MetaScore from "./MetaScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "./image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name} </Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaScore score={game.metacritic}></MetaScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
