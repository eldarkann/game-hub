import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGamesQueryStore from "../hooks/useGamesStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "./image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const setGenre = useGamesQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGamesQueryStore((s) => s.gameQuery.genreId);
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List paddingY="5px">
        {data?.results.map((genre) => (
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
                onClick={() => setGenre(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
