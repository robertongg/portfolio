import { Box, Flex, Heading } from "@chakra-ui/react"

const HeroBanner = () => {
    const backgroundImage = "/portfolio/static/images/background.jpg";
    
    return (
        <Box id="top" h="100vh" bgImage={backgroundImage} bgSize="cover" position="relative">
            <Box position="absolute" top={0} left={0} h="100vh" w="full" bgColor="rgba(0, 0, 0, 0.4)" zIndex={1} />
            <Flex
                position="relative"
                zIndex={2}
                color="white"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={4}
                h="100vh"
            >
                <Heading size="4xl">
                    Robert Ong
                </Heading>
                <Heading size="lg">
                    Software Engineer
                </Heading>
            </Flex>
        </Box>
    );
}

export default HeroBanner;