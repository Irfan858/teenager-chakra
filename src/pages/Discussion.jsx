import React from 'react';
import { Box, Flex, Stack, VStack, Spacer, FormControl, FormLabel, Input, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Textarea } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import CourseCard from '../components/CourseCard'
// import SubmissionCard from '../components/SubmissionCard'
import DiscussionCard from '../components/DiscussionCard';

let discussionList = [
  {
    id: 1,
    question: 'Apa Saja Struktur Lapisan Bumi',
    module: 'Geografi',
    class: 'X IPS',
    num: 'Jawaban 1',
    answer: 'Crust (Kerak Bumi), Mantle (Mantel Bumi), Outer Core (Inti Luar), Inner Core / Inti Dalam',
  },
  {
    id: 2,
    question: 'Menentukan Asam Basa',
    module: 'Kimia',
    class: 'X IPA',
  },
  {
    id: 3,
    question: 'Menentukan Asam Basa',
    module: 'Kimia',
    class: 'X IPA',
  },
];

export default function Discussion() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  return (
    <>
      <Navbar />
      <Flex direction="row" justifyContent="flex-start" alignItems="flex-start" top="30">
        {/* Sidebar */}
        <Flex width="20%" minHeight="100vh" bgColor="grey.100" boxShadow="md" position="fixed" left="0" top="20" overflowY="auto">
          <Sidebar />
        </Flex>
        {/* End Sidebar */}
        {/* Main */}
        <Flex direction="column" width="80%" minHeight="90vh" bg="white" position="sticky" left="80" marginTop={20}>
          <Box m={5}>
            <Stack spacing={6}>
              {/* Header */}
              <Box>
                <Box as="h1" fontSize="2xl" fontWeight="semibold">
                  Diskusi
                </Box>
                <Box as="span" fontSize="l" fontWeight="semibold" color="grey">
                  Tanyakan Dan Temukan Jawaban pertanyaan Anda Bersama Teman yang Lain
                </Box>
              </Box>
              {/* End Header */}
              {/* Content */}
              <Button onClick={onOpen} colorScheme="blue" variant="solid" width="full">
                Tambah Diskusi
              </Button>
              <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Buat Pertanyaan</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Question</FormLabel>
                      <Textarea ref={initialRef} placeholder="Pertanyaan" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Module</FormLabel>
                      <Input placeholder="Module" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Kelas</FormLabel>
                      <Input placeholder="Kelas" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3}>
                      Tambah
                    </Button>
                    <Button onClick={onClose}>Batal</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Box alignContent="flex-start">
                <VStack spacing={8}>
                  {discussionList.map((discussion, index) => {
                    return <DiscussionCard key={index} question={discussion.question} module={discussion.module} moduleClass={discussion.class} answerNum={discussion.num} answer={discussion.answer} />;
                  })}
                </VStack>
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
