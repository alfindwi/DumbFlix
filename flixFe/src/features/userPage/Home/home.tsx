import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { Navbar } from "../../navbar/navbar";
import { CardMovie } from "../cardHome/cardMovie";
import { CardSeries } from "../cardHome/cardSeries";
import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";

export function Home() {
  return (
    <Box>
      <Navbar />
      <HomeContent />
      <Footer/>
    </Box>
  );
}

export function HomeContent() {
  return (
    <Box position={"relative"}>
      <Img src="/src/assets/bgHome.png" w={"100%"} objectFit={"cover"} />

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
          src="/src/assets/fontHome.png"
          position={"absolute"}
          w={"550px"}
          top={"200px"}
          left={"400px"}
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
            Geralt of Rivia, a solitary monster hunter, struggles to find his
            place in a world where people often prove more wicked than beast
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
            as={Link}
            to="/tvseries"
          >
            Watch Now !
          </Button>
        </Box>
      </Box>

      <CardSeries />
      <CardMovie />
    </Box>
  );
}
