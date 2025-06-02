import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";

const Countdown = () => {
  const targetDate = new Date("July 25, 2025 12:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center" my={16}>
      <Heading as="h2" size="lg" color="pink.600" mb={6}>
        До нашей свадьбы осталось:
      </Heading>
      <Flex justify="center" gap={6} fontSize="2xl" fontWeight="bold">
        <Box>
          {timeLeft.days} <Text fontSize="sm">дней</Text>
        </Box>
        <Box>
          {timeLeft.hours} <Text fontSize="sm">часов</Text>
        </Box>
        <Box>
          {timeLeft.minutes} <Text fontSize="sm">минут</Text>
        </Box>
        <Box>
          {timeLeft.seconds} <Text fontSize="sm">секунд</Text>
        </Box>
      </Flex>
      <Divider mt={6} />
    </Box>
  );
};

export default Countdown;