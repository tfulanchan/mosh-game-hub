import React from "react";
import useGenres from "../hooks/useGenres";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  // const { data } = useData<Genre>('/genres');
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          {/* getCroppedImageUrl 19- Displaying the Genres */}
          <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
          <Text fontSize='m' >{genre.name}</Text>
        </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
