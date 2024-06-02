import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Tokenomic() {
  return (
    <Box
    width={"100%"}
    height={"706px"}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor={"black"}

>
    <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection={{ base: 'column', md: 'row' }}
        bg="rgba(0, 0, 0, 0.7)"
        p="2rem"
        borderRadius="md"
        boxShadow="lg"
        width={"90%"}
    >
        {/* Token Details Box */}
        <Box
            bg="rgba(255, 255, 255, 0.1)"
            p="2rem"
            borderRadius="md"
            border="1px solid"
            borderColor="red.500"
            m="1rem"

            width="412px"
            height={"306px"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-between"}
            textAlign={"center"}
        >
            <Heading as="h3" size="lg" color="white" mb="1rem" textAlign={"center"} backgroundColor={"red"} borderRadius={"15px"}>
                Token Details
            </Heading>
            <Text color="white">
                <strong>Name:</strong> Saviour
            </Text>
            <Text color="white">
                <strong>Symbol:</strong> SVR
            </Text>
            <Text color="white">
                <strong>Total Supply:</strong> 1000 Trillion
            </Text>
            <Text color="white">
                <strong>Decimals:</strong> 18
            </Text>
        </Box>

       
        <Box
            m="1rem"
            flex="2"

            position={"relative"}
        >
            <img
                src="https://s3-alpha-sig.figma.com/img/79e0/db14/6de61e6b7e512045a7cc5fab1681c6dc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myczd~GQsAb6milWNlczm~ovDCoFYtBtokVxcWQ2lMW1Q2wZ8OcFgeETzLYKzWzeCly5WR1E~fVyhUA8rDvf0n4zgLE7bGpxSohq1s1A4KJo6tYf0baF~wWNfCPXsI-rJBuI1CEVSuK9CPPPusZrsxZbjs8OqF32EIbD5fiWBewnSsihCpc6AK3rBbfgUTp6k~TdAyjM0icncVdwoQokJIMguM~~vE~PzzHMD2GaE116oqbko293C6i9boY-q5s6M8VhdJ8TLYDx-uZ4asIZsiIimOYN81MMzbAtGzlUq7abGwN80kQSBCo7lsCKP150lUiUigXSMrN85aanxdOlSQ__"
                alt="Token Distribution Chart"
                width={"278px"}
                height={"278px"}
                style={{ position: "absolute", top: "30px", left: "306px" }}
            />
            <Text
                position="absolute"
                top="-3px"
                left="583px"
                color="white"

            >
                IDO Round (20%)
            </Text>
            <Text
                position="absolute"
                top={"14px"}
                left={"100px"}
                color="white"

            >
                Community Airdrop (7.5%)
            </Text>
            <Text
                position="absolute"
                top="100px"
                left="600px"
                color="white"

            >
                Team Founders (2.5%)
            </Text>
            <Text
                position="absolute"
                top="297px"
                left="571px"
                color="white"

            >
                Black Hole Contract Address (50%)
            </Text>
            <Text
                position="absolute"
                top="284px"
                left="34px"
                color="white"
            >
                Initial Liquidity Provider (15%)
            </Text>
            <Text
                position="absolute"
                top="152px"
                left="100px"
                color="white"
            >
                Ecological Fund (5%)
            </Text>
        </Box>
    </Flex>
</Box>
  )
}

export default Tokenomic
