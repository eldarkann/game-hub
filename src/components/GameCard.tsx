import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Game from "../entities/Game";
import MetaScore from "./MetaScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "./image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate("/game/" + game.slug)}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetaScore score={game.metacritic}></MetaScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
