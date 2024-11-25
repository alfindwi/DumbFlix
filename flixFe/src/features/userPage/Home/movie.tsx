import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { Navbar } from "../../navbar/navbar";
import { CardMovies } from "../cardMovies/cardMovies";

export function Movies() {
  return (
    <Box>
      <Navbar />
      <MovieContent />
    </Box>
  );
}

export function MovieContent() {
  return (
    <Box position={"relative"}>
      <Img src="/src/assets/movies.png" w={"100%"} objectFit={"cover"} />

      <Box
        position="absolute"
        top="10"
        left="0"
        w="100%"
        h="600px"
        bgGradient="linear(to-t, black, transparent 30%)"
      />

      <Box>
        <Img
          src="/src/assets/moviesName.png"
          position={"absolute"}
          w={"400px"}
          h={"200px"}
          top={"150px"}
          left={"330px"}
          transform={"translate(-50%, -50%)"}
        />
        <Box
          position={"absolute"}
          top={"22%"}
          left={"30%"}
          transform={"translate(-50%, -50%)"}
          w={"510px"}
          mt={"55px"}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
        >
          <Text fontSize={"14px"}>
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a downward
            spiral of revolution and bloody crime. This path brings him
            face-to-face with his alter-ego: the Joker.
          </Text>
          <Flex mt={2} gap={4}>
            <Text>2019</Text>
            <Box
              bgColor={"transparent"}
              border={"1px solid white"}
              borderRadius={"3px"}
              fontSize={"14px"}
              p={1}
            >
              Movies
            </Box>
          </Flex>
          <Button
            w={"250px"}
            bgColor={"#E50914"}
            _hover={{ bgColor: "#E50914" }}
            fontWeight={"bold"}
            p={4}
            h={"55px"}
            mt={"30px"}
            fontSize={"18px"}
          >
            Watch Now !
          </Button>
        </Box>
      </Box>

      <CardMovies />
    </Box>
  );
}
