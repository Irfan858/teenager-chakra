import React from 'react';
import { Box, Flex, Stack, HStack, Text, Spacer, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import SubmissionCard from '../components/SubmissionCard';
import DiscussionCard from '../components/DiscussionCard';
export default function Home() {
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

  let submissionList = [
    {
      id: 1,
      name: 'Matematika 1',
      status: true,
    },
    {
      id: 1,
      name: 'Matematika 2',
      status: false,
    },
  ];

  let discussionList = [
    {
      id: 1,
      title: 'Apa Saja Struktur Bumi',
      module: 'Geografi',
      class: 'X IPS',
    },
    {
      id: 2,
      title: 'Menentukan Asam Basa',
      module: 'Kimia',
      class: 'X IPA',
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
              <HStack spacing={3}>
                <Box p={5} width="50%" bgColor="white" height="60vh" boxShadow="lg" borderRadius="10">
                  <Flex>
                    <Text as="span" fontSize="xl" fontWeight="semibold">
                      Tugas
                    </Text>
                    <Spacer />
                    <Button colorScheme="blue" size="md" variant="ghost">
                      Lihat Semua
                    </Button>
                  </Flex>
                  <Stack mt="4" spacing={3}>
                    {submissionList.map((submission, index) => {
                      return <SubmissionCard key={index} name={submission.name} status={submission.status} />;
                    })}
                  </Stack>
                </Box>
                <Box p={5} width="50%" bgColor="gray.100" height="60vh" boxShadow="lg" borderRadius="10">
                  <Flex>
                    <Text as="span" fontSize="xl" fontWeight="semibold">
                      Diskusi
                    </Text>
                    <Spacer />
                    <Button colorScheme="blue" size="md" variant="ghost">
                      Lihat Semua
                    </Button>
                  </Flex>
                  <Stack mt={4} spacing={3}>
                    {discussionList.map((discussion, index) => {
                      return <DiscussionCard key={index} title={discussion.title} module={discussion.module} moduleClass={discussion.class} />;
                    })}
                  </Stack>
                </Box>
              </HStack>
              {/* End Content */}
            </Stack>
          </Box>
        </Flex>
        {/* End main */}
      </Flex>
    </>
  );
}
