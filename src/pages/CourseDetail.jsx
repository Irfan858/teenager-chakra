import React from 'react';
import { Box, Flex, Stack, HStack, Text, Spacer, Button, Grid, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react';
import { ChevronDownIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DetailCard from '../components/DetailCard';
import CourseCard from '../components/CourseCard';

export default function CourseDetail() {
  let moduleDetail = [
    {
      id: 1,
      name: 'Pemrograman Web',
      class: 'XI RPL',
      description:
        'Pemrograman web terbentuk atas 2 kata yaitu pemrograman dan web dimana pemrograman sendiri adalah Proses atau Cara dalam menjalankan sebuah urutan intruksi atau perintah yang diberikan kepada komputer untuk membuat fungsi atau tugas tertentu. dan Web adalah Sistem untuk mengakses, memanipulasi, dan mengunduh dokumen yang terdapat pada komputer yang di hubungkan melalui internet atau jaringan.Jadi Pemrograman Web adalah Proses atau Cara untuk menjalankan intruksi pada sebuah komputer yang terhubung ke internet untuk membuat fungsi atau tugas tertentu.',
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
        <Flex width="80%" minHeight="90vh" bg="white" position="sticky" left="80" marginTop={20}>
          <Box m={5}>
            <Stack spacing={6}>
              <Box alignContent="flex-start">
                <HStack spacing={8}>
                  {moduleDetail.map((module, index) => {
                    return <DetailCard key={index} name={module.name} className={module.class} description={module.description} />;
                  })}
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
