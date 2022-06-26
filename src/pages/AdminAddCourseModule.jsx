import React from 'react'
import {
    Box,
    Flex,
    Stack,
    HStack,
    Text,
    Spacer,
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { MdStackedBarChart } from 'react-icons/md'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AdminAddCourseModule() {
    let num = 1
    let courseDetail = [
        {
            id: 1,
            name: "Bahasa Indonesia",
            class: "XI Bahasa",
            description: "Pada Kelas Ini akan Mempelajari tentang Menyusun Prosedur, Teks Eksplanasi, Mengelola Informasi dan lainnya",
        }
    ]

    let moduleList = [
        {
            id: 1,
            title: "Pengenalan Teks Prosedur",
            content: "A. Mengonstruksi Informasi dalam Teks Prosedur \n Menunjukkan Pernyataan Umum dalam Suatu Kegiatan \n  Seseorang melakukan suatu kegiatan tentu saja harus memperhatikan langkah-langkah mengerjakannya. Apabila kita akan melakukan pekerjaan, maka harus memahami langkah-langkahnya agar hasil kegiatan tersebut berhasil dengan baik. Ciri teks prosedur yaitu terdapat bagian pernyataan umum dan tahapan-tahapan melakukan kegiatan"
        },

    ]

    return (
        <>
            {/* Navbar */}
            <Navbar />
            <Flex direction="row" justifyContent="flex-start" alignItems="flex-start" top="30">
                {/* Sidebar */}
                <Flex width="20%" minHeight="100vh" bgColor="grey.100" boxShadow='md' position="fixed" left="0" top="20" overflowY="auto">
                    <Sidebar />
                </Flex>
                {/* End Sidebar */}
                {/* Main */}
                <Flex width="80%" minHeight="90vh" bg="white" position="sticky" left="80" marginTop={20}>
                    <Box m={5} width="full">
                        <Stack spacing={6}>
                            {/* Header */}
                            <Box as="h1" fontSize="3xl" fontWeight="semibold">
                                Tambah Materi
                            </Box>
                            {/* End Header */}
                            {/* Content */}
                            <Box>
                                <Stack direction="column">
                                    <Text as="h2" fontSize="xl" fontWeight='semibold'>Judul Materi</Text>
                                    <Text as="h2" fontSize="xl" fontWeight='semibold'>Isi Materi</Text>
                                    <Box p={4}>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                console.log({ event, editor, data });
                                            }}
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                            {/* End Content */}
                        </Stack>
                    </Box>
                </Flex>
                {/* End main */}
            </Flex>
        </ >
    )
}

