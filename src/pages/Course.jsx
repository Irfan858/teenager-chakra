import React from 'react'
import { Box, Flex, Stack, HStack, Text, Spacer, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';

export default function Course() {
  let moduleList = [
    {
      id: 1,
      name: 'Pemrograman Web',
      class: 'XI RPL',
      description: 'tentang Web Programming',
      percent: 70,
    },
    {
      id: 2,
      name: 'Bahasa Indonesia',
      class: 'X TKJ',
      description: 'Bahasa Indonesia Pelajaran Mengenai Bahasa Indonesia',
      percent: 85,
    },
    {
      id: 3,
      name: 'Matematika',
      class: 'XII TKJ',
      description: 'Mata Pelajaran yang akan membahas Konversi Biner, Aljabar ',
      percent: 60,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Flex direction="row" justifyContent="flex-start" alignItems="flex-start" top="30">
        {/* Sidebar */}
        <Flex width="20%" minHeight="100vh" bgColor="grey.100" boxShadow="md" position="fixed" left="0" top="20" overflowY="auto">
          <Sidebar />
        </Flex>
        {/* End Sidebar */}
        {/* Main */}
        <Flex width="80%" minHeight="90vh" bg="white" position="sticky" left="80" marginTop={20}>
          <Box m={5}>
            <Stack spacing={6}>
              {/* Header */}
              <Box>
                <Box as="h1" fontSize="2xl" fontWeight="semibold">
                  Selamat Datang Kembali
                </Box>
                <Box as="span" fontSize="l" fontWeight="semibold" color="grey">
                  Lanjutkan Pembelajaran Anda
                </Box>
              </Box>
              {/* End Header */}
              {/* Content */}
              <Flex justifyContent="baseline">
                <Box as="h1" fontSize="2xl" fontWeight="semibold">
                  Pelajaran Anda
                </Box>
                <Spacer />
                <Button colorScheme="blue" size="md" variant="ghost">
                  Lihat Semua
                </Button>
              </Flex>
              <Box alignContent="flex-start">
                <HStack spacing={8}>
                  {moduleList.map((module, index) => {
                    return <CourseCard key={index} name={module.name} className={module.class} description={module.description} percent={module.percent} />;
                  })}
                </HStack>
              </Box>
              {/* End Content */}
            </Stack>
          </Box>
        </Flex>
        {/* End main */}
      </Flex>
    </>
  );
}
