import React from 'react'
import { Box, Flex, Stack, HStack, Text, Spacer, Button } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import CourseCard from '../components/CourseCard'
// import SubmissionCard from '../components/SubmissionCard'
// import DiscussionCard from '../components/DiscussionCard'

export default function Discussion() {
    return (
        <>
            <Navbar />
            <Flex direction="row" justifyContent="flex-start" alignItems="flex-start" top="30">
                {/* Sidebar */}
                <Flex width="20%" minHeight="100vh" bgColor="grey.100" boxShadow='md' position="fixed" left="0" top="20" overflowY="auto">
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
                            {/* End Content */}
                        </Stack>
                    </Box>
                </Flex>
                {/* End main */}
            </Flex>
        </>
    )
}
