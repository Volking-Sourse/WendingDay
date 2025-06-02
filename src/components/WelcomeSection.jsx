import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const WelcomeSection = () => {
  return (
    <Container maxW="4xl" my={16}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h2" size="lg" color="pink.600">
          Узнаете этих непосед?
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Да-да, это мы! Как быстро летит время, не правда ли?
          Теперь, когда мы уже взрослые, мы решили, что пора создавать свою семью!
        </Text>
        <Text fontSize="lg" color="gray.700">
          Приглашаем вас разделить с нами радость первого семейного праздника — нашей свадьбы!
          Мы будем счастливы, если вы разделите этот день с нами.
        </Text>
        <Image
          src="https://placehold.co/800x400/fcd3d6/3b82f6?text=Совместное+фото"
          alt="Совместное фото"
          rounded="xl"
          shadow="2xl"
          w="full"
          h="auto"
          _hover={{ transform: "scale(1.02)" }}
          transition="transform 0.3s ease"
        />
      </VStack>
    </Container>
  );
};

export default WelcomeSection;