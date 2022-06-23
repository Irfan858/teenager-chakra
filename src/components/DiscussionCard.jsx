import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  Spacer,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
} from '@chakra-ui/react';

export default function DiscussionCard({ question, module, moduleClass, answerNum, answer }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  return (
    <Box width="full">
      <Flex bgColor="blue.300" p={4} width="full" height={24} borderRadius="10">
        <Flex direction="column" alignContent="center">
          <Text as="h1" fontsize="4xl" fontWeight="semibold" color="white">
            {question}
          </Text>
          <Stack direction="row">
            <Text as="span" fontsize="md" fontWeight="semibold" color="black">
              {module}
            </Text>
            <Text as="span" fontsize="md" fontWeight="semibold" color="black">
              {moduleClass}
            </Text>
          </Stack>
        </Flex>
        <Spacer />
        <Button onClick={onOpen} mt={3} colorScheme="gray" size="sm" variant="solid">
          Answer
        </Button>
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Answer</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Answer Number</FormLabel>
                <Input placeholder="" />
              </FormControl>

              <FormControl>
                <FormLabel>Answer</FormLabel>
                <Textarea ref={initialRef} placeholder="Jawaban" />
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
      </Flex>
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {answerNum}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{answer}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
