import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import Emoji from "./Emoji";
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
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaScore score={game.metacritic}></MetaScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/game/" + game.slug}>{game.name} </Link>
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
