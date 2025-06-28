import { Box, Button, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IContact } from "../objects/ObjectsInterface";

const Footer = () => {
    const contact : IContact = require("../objects/contact.json").$schema;

    return (
        <Box bgColor="teal.500" py={8} px={{base: 12, sm: 16}} position="relative">
            <Flex flexDirection={{base: "column", sm: "row"}} gap={{base: 2, sm: 8}} alignItems={{base: "flex-start", sm: "center"}} w={{base: "full", sm: "-webkit-fit-content"}}>
                <Heading size={{base: "lg", sm: "sm"}} color="white" m={0}>Contact Me</Heading>
                <Flex gap={{base: 8, sm: 0}}>
                    <Link href={contact.linkedin} target="_blank">
                        <Button color="white!" colorScheme="teal" variant={{base: "link", sm: "solid"}}>
                            Linkedin <Icon as={FaLinkedinIn} ml={1} />
                        </Button>
                    </Link>
                    <Link href={"mailto:" + contact.email} target="_blank">
                        <Button color="white!" colorScheme="teal" variant={{base: "link", sm: "solid"}}>
                            Email <Icon as={MdEmail} ml={1} />
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Text
                position={{base: "static", md: "absolute"}}
                top="50%"
                right={16}
                color="white"
                fontSize="sm"
                transform="translate(0, -50%)"
                mt={{base: 10, sm: 4, md: 0}}
            >
                Last Update: 28 June 2025
            </Text>
        </Box>
    );
}

export default Footer;