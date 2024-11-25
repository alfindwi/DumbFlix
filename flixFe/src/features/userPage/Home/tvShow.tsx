import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { Navbar } from "../../navbar/navbar";
import { CardTvShow } from "../cardTvShow/cardTvShow";

export function TvShow() {
  return (
    <Box>
      <Navbar />
      <TvShowContent />
    </Box>
  );
}

export function TvShowContent() {
  return (
    <Box position={"relative"}>
      <Img src="/src/assets/tvShow.png" w={"100%"} objectFit={"cover"} />

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
          src="/src/assets/tvShowName.png"
          position={"absolute"}
          w={"550px"}
          h={"120px"}
          top={"210px"}
          left={"400px"}
          transform={"translate(-50%, -50%)"}
        />
        <Box
          position={"absolute"}
          top={"340px"}
          left={"30%"}
          transform={"translate(-50%, -50%)"}
          w={"510px"}
          mt={"55px"}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
        >
          <Text fontSize={"14px"}>
            Money Heist is a crime drama on Netflix - originally called La Casa
            de Papel. Money Heist season 3 has just been released by the
            streaming service. The plot reads: "Eight thieves take hostages and
            lock themselves in the Royal Mint of Spain as a criminal mastermind
            manipulates the police to carry out his plan."
          </Text>
          <Flex mt={2} gap={4}>
            <Text>2017</Text>
            <Box
              bgColor={"transparent"}
              border={"1px solid white"}
              borderRadius={"3px"}
              fontSize={"14px"}
              p={1}
            >
              TV Series
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

      <CardTvShow />
    </Box>
  );
}
