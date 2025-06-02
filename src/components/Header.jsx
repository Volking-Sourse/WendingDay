import { Box, Heading, Image, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box textAlign="center" py={12} bg="whiteAlpha.800" boxShadow="md">
      <Heading
        fontSize={{ base: "3xl", md: "6xl" }}
        fontWeight="extrabold"
        bgGradient="linear(to-r, pink.400, purple.500)"
        bgClip="text"
        mb={6}
      >
        Свадьба Игоря и Виктории
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={6}
        mt={6}
      >
        <Image
          src="https://placehold.co/300x400/e25c94/FFFFFF?text=Невеста"
          alt="Невеста"
          w="64"
          h="80"
          rounded="xl"
          shadow="lg"
          transform="translateX(-1rem)"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        />
        <Image
          src="https://placehold.co/300x400/4f46e5/FFFFFF?text=Жених"
          alt="Жених"
          w="64"
          h="80"
          rounded="xl"
          shadow="lg"
          transform="translateX(1rem)"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.3s ease"
        />
      </Flex>
    </Box>
  );
};

export default Header;