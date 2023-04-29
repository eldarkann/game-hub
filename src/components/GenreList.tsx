import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List paddingY="5px">
        {data.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                padding={1}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                key={genre.id}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
