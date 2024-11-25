import { Box, Flex, Text, Link, HStack, Divider, Img, Button } from "@chakra-ui/react";
import { FaAnglesUp } from "react-icons/fa6";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box bg="black" color="white" py={6}>
      <Divider borderColor="gray.600" />

      <Box
        mt={4}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Img src="/src/assets/logo.png" w={"210px"} ml={"23px"} />
        <Text ml={"23px"} color={"#929292"} w={"550px"} textAlign={"justify"}>
          Menyediakan berbagai konten video berkualitas tinggi, mulai dari film hingga serial TV. Nikmati pengalaman menonton yang tak tertandingi kapan saja dan di mana saja.
        </Text>
      </Box>

      <Divider borderColor="gray.600" mt={4} />
      <Flex
        mt={4}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        px={6}
      >
        <Text fontSize="sm" mb={{ base: 4, md: 0 }} color={"#929292"}>
          Copyright © {new Date().getFullYear()} by Alfin Dwi. All rights
          reserved.
        </Text>

        <HStack spacing={4} align="center">
          <Link
            href="https://x.com/alvindvvi"
            target="_blank"
            aria-label="Twitter"
            _hover={{ color: "#E50914", textDecoration: "none" }}
          >
            <Text fontSize="15px" fontWeight="bold">
              Twitter
            </Text>
          </Link>

          <Divider orientation="vertical" borderColor="#363434" height="20px" />

          <Link
            href="https://www.instagram.com/alvindvvi/"
            target="_blank"
            aria-label="Instagram"
            _hover={{ color: "#E50914", textDecoration: "none" }}
          >
            <Text fontSize="15px" fontWeight="bold">
              Instagram
            </Text>
          </Link>

          <Divider orientation="vertical" borderColor="#363434" height="20px" />

          <Link
            href="https://github.com/alfindwi"
            target="_blank"
            aria-label="Github"
            _hover={{ color: "#E50914", textDecoration: "none" }}
          >
            <Text fontSize="15px" fontWeight="bold">
              Github
            </Text>
          </Link>

          <Button
            as={FaAnglesUp}
            onClick={scrollToTop}
            bg="transparent"
            _hover={{ bg: "transparent", transform: "scale(1.1)" }}
            _active={{ bg: "transparent" }}
            cursor="pointer"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
