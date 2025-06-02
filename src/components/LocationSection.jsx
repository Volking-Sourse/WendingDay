import {
  Box,
  Heading,
  Text,
  Button,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const LocationSection = () => {
  return (
    <Container maxW="4xl" my={16}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h2" size="lg" color="pink.600">
          Место регистрации
        </Heading>
        <Text fontSize="xl" fontWeight="medium">
          Дворец бракосочетания «Заречный»
        </Text>
        <Text>г. Нижний Новгород, ул. Щербакова, д. 10</Text>
        <Text>Сбор гостей: 09:50</Text>
        <Button
          as="a"
          href="https://yandex.ru/maps/?text=ул.+Щербакова,+д.+10,+Нижний+Новгород"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="pink"
          size="lg"
          borderRadius="full"
          px={8}
          shadow="md"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.2s"
        >
          Открыть карту
        </Button>

        <Divider my={6} />

        <Heading as="h2" size="lg" color="pink.600">
          Место проведения
        </Heading>
        <Text>г.о.г. Нижний Новгород, д. Новопокровское, ул. Вечерняя, д. 62Б</Text>
        <Button
          as="a"
          href="https://yandex.ru/maps/?text=д.+Новопокровское,+ул.+Вечерняя,+д.+62Б,+Нижний+Новгород"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="pink"
          size="lg"
          borderRadius="full"
          px={8}
          shadow="md"
          _hover={{ transform: "scale(1.05)" }}
          transition="transform 0.2s"
        >
          Открыть карту
        </Button>
      </VStack>
    </Container>
  );
};

export default LocationSection;