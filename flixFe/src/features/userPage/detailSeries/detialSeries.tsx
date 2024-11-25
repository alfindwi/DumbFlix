import { Box, Flex, Icon, Img, Text } from "@chakra-ui/react";
import { MdPlayArrow } from "react-icons/md";
import { Navbar } from "../../navbar/navbar";
import { Footer } from "../footer/footer";

export function DetailSeries() {
  return (
    <Box>
      <Navbar />
      <DetailSeriesContent />
      <Footer/>
    </Box>
  );
}

export function DetailSeriesContent() {
  return (
    <Box position="relative">
      <Flex justifyContent="center" mb={4}>
        <Box position="relative" w="1200px" h="600px">
          <Img
            src="https://image.tmdb.org/t/p/original/88Z0fMP8a88EpQWMCs1593G0ngu.jpg"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            transition="opacity 0.3s ease"
            cursor="pointer"
            bgColor="rgba(0, 0, 0, 0.6)"
            borderRadius="full"
            w="90px"
            h="90px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={MdPlayArrow} color="white" fontSize="6xl" />
          </Box>
        </Box>
      </Flex>
      <Box ml={"40px"} mt={"30px"} mb={"50px"}>
        <Flex align="flex-start">
          <Img
            src="https://image.tmdb.org/t/p/w185/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
            w="100px"
            h="150px"
            mr="20px"
          />
          <Box>
            {/* Judul */}
            <Text fontSize="lg" fontWeight="bold">
              Breaking Bad
            </Text>

            {/* Tahun dan Kategori */}
            <Flex align="center" mt={2}>
              <Text fontSize="sm" color="#929292" mr={4}>
                2013
              </Text>
              <Flex
                bgColor="transparent"
                border="1px solid #929292"
                borderRadius="3px"
                fontSize="14px"
                p={1}
                w={"70px"}
                h={"27px"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"#929292"}
              >
                Tv Series
              </Flex>
            </Flex>

            {/* Deskripsi */}
            <Text
              fontSize="sm"
              mt={3}
              w="450px"
              textAlign="justify"
              lineHeight="1.6"
            >
              Breaking Bad menceritakan kisah seorang guru kimia SMA bernama
              Walter White (Bryan Cranston) yang didiagnosa kanker paru-paru,
              bersama mantan muridnya Jesse Pinkman (Aaron Paul), terjun ke
              dunia kejahatan dengan memproduksi dan menjual kristal
              metamfetamin untuk menjamin masa depan keuangan keluarganya
              sebelum ia meninggal.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
