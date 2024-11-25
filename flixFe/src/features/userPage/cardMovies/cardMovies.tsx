import { Box, Icon, Img, Text } from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward, MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function CardMovies() {
  return (
    <Box>
      <Box p={6}>
        <Text fontSize="24px" fontWeight="semibold">
          Movies
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
              nextEl: ".swiper-button-next-series", // Unique selector for Series
              prevEl: ".swiper-button-prev-series", // Unique selector for Series
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
                    transition="transform 0.5s ease, box-shadow 0.2s ease"
                    as={Link}
                    to={`/movie`}
                    display="block"
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
                        src="https://image.tmdb.org/t/p/w185/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg"
                        w="100%"
                        h="200px"
                        objectFit="cover"
                        transition="transform 0.3s ease, filter 0.3s ease"
                        borderTopRadius="md"
                        className="image"
                      />
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
                      500 Days of Summer
                    </Text>
                    <Text
                      fontSize="12px"
                      mt={1}
                      fontWeight="medium"
                      color="#929292"
                    >
                      2013
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
              nextEl: ".swiper-button-next-tvshow", 
              prevEl: ".swiper-button-prev-tvshow", 
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
                    to={`/movie`}
                    display={"block"}
                    transition="transform 0.5s ease, box-shadow 0.2s ease"
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
                        src="https://image.tmdb.org/t/p/w185/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
                        w="100%"
                        h="200px"
                        objectFit="cover"
                        transition="transform 0.3s ease, filter 0.3s ease"
                        borderTopRadius="md"
                        className="image"
                      />
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
                      Fight Club
                    </Text>
                    <Text
                      fontSize="12px"
                      mt={1}
                      fontWeight="medium"
                      color="#929292"
                    >
                      1999
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
