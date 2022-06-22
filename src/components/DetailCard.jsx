import { Heading, HStack, Stack, Text, Box, Button } from '@chakra-ui/react';
import React from 'react';

export default function DetailCard({ name, className, description }) {
  return (
    <Box p={6} shadow="md" borderWidth="1px" w={900} h={450} borderRadius={10}>
      <Stack spacing={3} height={36}>
        <Heading fontSize="4xl">{name}</Heading>
        <HStack spacing={3} mt={4}>
          {/* <Text fontWeight="semibold" color="grey">{courseTeacher}</Text> */}
          <Text fontWeight="semibold" color="blue.200">
            {className}
          </Text>
        </HStack>
        <Text mt={4} align="justify">
          {description}
        </Text>
      </Stack>
      <Button mt="200px" colorScheme="blue" width="full" bottom={2}>
        Lanjutkan
      </Button>
    </Box>
  );
}
