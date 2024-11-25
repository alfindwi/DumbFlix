import { Box, Icon, Img, Text } from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward, MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function CardTvShow() {
  return (
    <Box>
      <Box p={6}>
        <Text fontSize="24px" fontWeight="semibold">
          TV Series
        </Text>

        <Box position="relative" cursor={"pointer"}>
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
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <Box
                    mt={4}
                    bgColor="black"
                    borderRadius="md"
                    w="160px"
                    as={Link}
                    to={`/tvseries`}
                    display={"block"}
                    transition="transform 0.5s ease, box-shadow 0.2s ease"
                    position="relative"
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
                      {/* Image */}
                      <Img
                        src="https://image.tmdb.org/t/p/w185/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg"
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
                        transition="opacity 0.3s ease"
                        cursor="pointer"
                        bgColor="rgba(0, 0, 0, 0.6)"
                        borderRadius="full"
                        w="50px"
                        h="50px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={MdPlayArrow} color="white" boxSize={6} />
                      </Box>
                    </Box>
                    <Text fontSize="15px" fontWeight="semibold" color="white">
                      Berlin
                    </Text>
                    <Text fontSize="12px" fontWeight="medium" color="white">
                      2023
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>

        <Box position="relative">
          {/* Custom Next Button */}
          <Box
            className="swiper-button-next-tvshow"
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
            className="swiper-button-prev-tvshow"
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
              nextEl: ".swiper-button-next-tvshow", // Unique selector for Series
              prevEl: ".swiper-button-prev-tvshow", // Unique selector for Series
            }}
            modules={[Navigation]}
            style={{ padding: "10px" }}
          >
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <Box
                    mt={4}
                    bgColor="black"
                    borderRadius="md"
                    w="160px"
                    _hover={{
                      ".image": {
                        transform: "scale(1.1)",
                        filter: "brightness(0.3)",
                      },
                      ".play-icon": { opacity: 1 },
                    }}
                    transition="transform 0.5s ease, box-shadow 0.2s ease"
                  >
                    <Box
                      position="relative"
                      w="100%"
                      h="200px"
                      overflow="hidden"
                      _hover={{
                        ".image": { filter: "blur(5px)" },
                        ".play-icon": { opacity: 1 },
                      }}
                    >
                      {/* Image */}
                      <Img
                        src="https://image.tmdb.org/t/p/w185/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg"
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
                        transition="opacity 0.3s ease"
                        cursor="pointer"
                        bgColor="rgba(0, 0, 0, 0.6)"
                        borderRadius="full"
                        w="50px"
                        h="50px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={MdPlayArrow} color="white" boxSize={6} />
                      </Box>
                    </Box>
                    <Text fontSize="15px" mt={2} fontWeight="semibold">
                      Lupin
                    </Text>
                    <Text
                      fontSize="12px"
                      mt={1}
                      fontWeight="medium"
                      color="#929292"
                    >
                      2021
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
