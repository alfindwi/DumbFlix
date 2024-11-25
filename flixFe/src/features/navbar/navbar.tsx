import {
  Button,
  Flex,
  Img,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./register";

export function Navbar() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();
  const {isOpen: isOpenRegister, onOpen: onOpenRegister, onClose: onCloseRegister} = useDisclosure()

  return (
    <Flex
      as="nav"
      bg="blackAlpha.700"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.6)"
      zIndex={10}
      backdropFilter="blur(10px)"
    >
      <Flex alignItems="center" fontWeight="bold" gap={7} ml={8}>
        <Text as={Link} to="/" cursor="pointer" color="white">
          Home
        </Text>
        <Text as={Link} to="/tvshow" cursor="pointer" color="white">
          Tv Shows
        </Text>
        <Text as={Link} to="/movies" cursor="pointer" color="white">
          Movies
        </Text>
      </Flex>

      {/* Logo */}
      <Flex alignItems="center" justifyContent="center">
        <Img src="/src/assets/logo.png" alt="Logo" />
      </Flex>

      {/* Tombol Aksi */}
      <Flex gap={2} mr={9} alignItems="center">
        <Button
          bgColor="white"
          _hover={{ bgColor: "#E50914", color: "white" }}
          color="#E50914"
          fontWeight="semibold"
          size="sm"
          p={4}
          w="90px"
          onClick={onOpenRegister}
        >
          Register
        </Button>
        <Modal isOpen={isOpenRegister} onClose={onCloseRegister}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader bgColor={"black"} fontWeight={"bold"} fontSize={"30px"}>Register</ModalHeader>
            <ModalCloseButton />
            <Register />
          </ModalContent>
        </Modal>
        <Button
          bgColor="#E50914"
          _hover={{ bgColor: "white", color: "#E50914" }}
          color="white"
          fontWeight="semibold"
          size="sm"
          p={4}
          w="90px"
          onClick={onOpenLogin}
        >
          Login
        </Button>
        <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader bgColor={"black"} fontWeight={"bold"} fontSize={"30px"}>Login</ModalHeader>
            <ModalCloseButton />
            <Login />
          </ModalContent>
        </Modal>
        {/* Menu profil (jika diperlukan di kemudian hari) */}
        {/* <Menu>
          <MenuButton as={Box} cursor="pointer">
            <Avatar src="" />
          </MenuButton>
          <MenuList bgColor="white">
            <MenuItem>
              <FaRegUser style={{ marginRight: "10px", color: "#613D2B" }} />
              Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <ImExit style={{ marginRight: "10px", color: "red" }} />
              Logout
            </MenuItem>
          </MenuList>
        </Menu> */}
      </Flex>
    </Flex>
  );
}
