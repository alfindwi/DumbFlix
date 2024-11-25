import { Box, Icon, Img, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdArrowBack, MdArrowForward, MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function CardMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Ganti dengan URL endpoint npoint Anda
    fetch("https://api.npoint.io/4ddec7e4e17af366dcd6")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Box p={6}>
      <Text fontSize="24px" fontWeight="semibold">
        Movies
      </Text>

      <Box position="relative">
        {/* Custom Next Button */}
        <Box
          className="swiper-button-next-movie"
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
          className="swiper-button-prev-movie"
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
            nextEl: ".swiper-button-next-movie",
            prevEl: ".swiper-button-prev-movie",
          }}
          modules={[Navigation]}
          style={{ padding: "10px" }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Box
                mt={4}
                bgColor="black"
                borderRadius="md"
                w="160px"
                transition="transform 0.5s ease, box-shadow 0.2s ease"
                cursor={"pointer"}
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
                  {/* Image */}
                  <Img
                    src={movie.image}
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
                  {movie.title}
                </Text>
                <Text
                  fontSize="12px"
                  mt={1}
                  fontWeight="medium"
                  color="#929292"
                >
                  {movie.year}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
