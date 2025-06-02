import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Container // ✅ Теперь импортируем правильно
} from "@chakra-ui/react";

const WeddingDateSection = () => {
  return (
    <Box bg="whiteAlpha.700" py={16}>
      <Container maxW="4xl">
        <VStack spacing={6} textAlign="center">
          <Heading as="h2" size="lg" color="pink.600">
            Дата свадьбы
          </Heading>
          <Box bg="white" p={6} rounded="xl" shadow="md" w="fit-content" mx="auto">
            <Text fontSize="lg" fontWeight="medium" mb={4}>
              июль 2025
            </Text>
            <SimpleGrid columns={7} spacing={2} mt={3}>
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, i) => (
                <Text key={i} fontWeight="medium" color="gray.600">
                  {day}
                </Text>
              ))}

              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isWeddingDay = day === 25;

                return (
                  <Box
                    key={i}
                    p={2}
                    rounded="md"
                    textAlign="center"
                    bg={isWeddingDay ? "pink.100" : "transparent"}
                    fontWeight={isWeddingDay ? "bold" : "normal"}
                    color={isWeddingDay ? "pink.700" : "inherit"}
                    _hover={!isWeddingDay ? { bg: "pink.50" } : {}}
                    transition="all 0.3s"
                  >
                    {isWeddingDay && "❤️"}
                    <br />
                    {day}
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default WeddingDateSection;