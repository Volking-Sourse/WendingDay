import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg="whiteAlpha.800"
      py={6}
      textAlign="center"
      borderTop="1px"
      borderColor="gray.200"
      mt={12}
    >
      <Text fontSize="sm" color="gray.600">
        © 2025 • Свадьба Игоря и Виктории • Все права защищены
      </Text>
    </Box>
  );
};

export default Footer;