import { Box, Icon, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowBack, MdArrowForward, MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function CardSeries() {
  const [tvSeries, setSeries] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/d7e4a37b3471d3f38adc")
      .then((response) => response.json())
      .then((data) => setSeries(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Box p={6}>
      <Text fontSize="24px" fontWeight="semibold">
        TV Series
      </Text>

      <Box position="relative">
        {/* Custom Next Button */}
        <Box
          className="swiper-button-next-series"
          position="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          p={3}
          borderRadius="full"
          cursor="pointer"
          zIndex="10"
          display="block"
        >
          <Icon as={MdArrowForward} color="white" boxSize={10} />
        </Box>

        {/* Custom Prev Button */}
        <Box
          className="swiper-button-prev-series"
          position="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          p={3}
          borderRadius="full"
          cursor="pointer"
          zIndex="10"
          display="block"
        >
          <Icon as={MdArrowBack} color="white" boxSize={10} />
        </Box>

        <Swiper
          slidesPerView={7}
          navigation={{
            nextEl: ".swiper-button-next-series",
            prevEl: ".swiper-button-prev-series",
          }}
          modules={[Navigation]}
          style={{ padding: "10px" }}
        >
          {tvSeries.map((series, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={4}
                as={Link}
                to={"/tvseries"}
                bgColor="black"
                borderRadius="md"
                w="160px"
                display="block"
                transition="transform 0.5s ease, box-shadow 0.2s ease"
                cursor="pointer"
              >
                <Box
                  position="relative"
                  w="100%"
                  h="200px"
                  overflow="hidden"
                  _hover={{
                    ".image": {
                      transform: "scale(1.1)",
                      filter: "brightness(0.3)", 
                    },
                    ".play-icon": { opacity: 1 }, 
                  }}
                >
                  <Img
                    src={series.image}
                    w="100%"
                    h="200px"
                    objectFit="cover"
                    transition="transform 0.3s ease, filter 0.3s ease"
                    borderTopRadius="md"
                    className="image"
                  />

                  {/* Play Button */}
                  <Box
                    className="play-icon"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    opacity={0}
                    cursor="pointer"
                    border={"5px solid white"}
                    borderRadius="full"
                    w="50px"
                    h="50px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={MdPlayArrow} color="white" boxSize={8} />
                  </Box>
                </Box>
                <Text fontSize="15px" mt={2} fontWeight="semibold">
                  {series.title}
                </Text>
                <Text
                  fontSize="12px"
                  mt={1}
                  fontWeight="medium"
                  color="#929292"
                >
                  {series.year}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
