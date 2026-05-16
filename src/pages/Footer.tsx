import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box bgColor={"#111"} px={8} pt={{base: 4, md: 6}} pb={8} mt={16} fontSize={{base: "xs", md: "smaller"}}>
            <Box m={"auto"} w={"full"} maxW={"8xl"}>
                <Text>Build with HTML, CSS, and React TypeScript</Text>
                <Text>Last Update: 16 May 2026</Text>
            </Box>
        </Box>
    );
}

export default Footer;