import { Box, Button, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";
import { IContact } from "../../objects/ObjectsInterface";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactMe = () => {
    const contact : IContact = require("../../objects/contact.json").$schema;

    return (
        <CustomSection sectionID="contactMe" sectionHeader="Contact Me" content={
            <Box
                w={"full"}
                maxW={"700px"}
                m={"auto"}
            >
                <Heading textAlign={"center"} fontSize={{base: "medium", md: "large"}} mb={4}>I am open to opportunities</Heading>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    columnGap={8}
                    rowGap={4}
                    flexWrap={"wrap"}
                >
                    <Link href={contact.linkedin} target="_blank" _hover={{textDecor: "none"}}>
                        <Button
                            variant={"unstyled"}
                            display={"flex"}
                            gap={1}
                            w={"fit-content"}
                            px={6}
                            border={"none"}
                            borderRadius={20}
                            bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                            color={"black"}
                            fontSize={{base: "xs", md: "smaller"}}
                            transition={"0.3s ease"}
                            _hover={{
                                transform: "translateY(-3px) scale(1.05)",
                                boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                            }}
                        >
                            <Text>LinkedIn</Text>
                            <Icon as={FaLinkedinIn} />
                        </Button>
                    </Link>
                    <Link href={"mailto:" + contact.email} target="_blank" _hover={{textDecor: "none"}}>
                        <Button
                            variant={"unstyled"}
                            display={"flex"}
                            gap={1}
                            w={"fit-content"}
                            px={6}
                            border={"none"}
                            borderRadius={20}
                            bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                            color={"black"}
                            fontSize={{base: "xs", md: "smaller"}}
                            transition={"0.3s ease"}
                            _hover={{
                                transform: "translateY(-3px) scale(1.05)",
                                boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                            }}
                        >
                            <Text>Email</Text>
                            <Icon as={MdEmail} />
                        </Button>
                    </Link>
                </Flex>
            </Box>
        } />
    );
}

export default ContactMe;