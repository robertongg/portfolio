import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import CustomImage from "../components/CustomImage";

const navItems = [
    {
        title: "Study and Career",
        href: "studyAndCareer"
    }, {
        title: "Achievements",
        href: "achievements"
    }, {
        title: "Skills",
        href: "skills"
    }
]

const Navbar = () => {
    const [navbarOpacity, setNavbarOpacity] = useState(0);
    const [toTopOpacity, setToTopOpacity] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            setNavbarOpacity(1);
        } else {
            setNavbarOpacity(0);
        }

        if (window.scrollY >= 100) {
            setToTopOpacity(1);
        } else {
            setToTopOpacity(0);
        }
    });

    return (
        <>
            <Box
                opacity={navbarOpacity}
                transition="opacity 0.3s ease-in-out"
                position="fixed"
                top="0"
                zIndex={99}
                w="full"
                bgPosition="center"
                bgSize="cover"
            >
                {/* Desktop view */}
                <Flex display={{base: "none", md: "flex"}} bg="rgba(0, 0, 0, 0.8)" gap={{base:10, sm:20}} pt={4} pb={4} justifyContent={"center"}>
                    {navItems.map((navItem) => {
                        return (
                            <Link to={navItem.href} smooth={true} spy={true} duration={750}>
                                <Text color="whiteAlpha.900" _hover={{textDecoration: "underline"}} cursor="pointer">
                                    {navItem.title}
                                </Text>
                            </Link>
                        );
                    })}
                </Flex>

                {/* Mobile view */}
                <Flex display={{base: "flex", md: "none"}} bg="rgba(0, 0, 0, 0.4)" pt={4} pb={4} alignItems="center" justifyContent={"center"} color="white" position="relative">
                    <Button variant="unstyled" position="absolute" left={0} w={12} h={12} onClick={onOpen}>
                        <Icon as={IoMenu} />
                    </Button>
                    <Heading fontSize="md" fontWeight="semibold">Robert's Portfolio</Heading>
                </Flex>
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody display="flex" gap={4} flexDirection="column">
                        {navItems.map((navItem) => {
                            return (
                                <Link to={navItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                    <Text>
                                        {navItem.title}
                                    </Text>
                                </Link>
                            );
                        })}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Link to="top" smooth={true} duration={750}>
                <Button
                    opacity={toTopOpacity}
                    transition="opacity 0.3s ease-in-out"
                    variant="outline"
                    bgColor="white"
                    boxSize={16}
                    borderRadius="full"
                    position="fixed"
                    zIndex={99}
                    bottom="8" right="8"
                    fontSize="4xl"
                >
                    <Icon as={MdOutlineKeyboardArrowUp} />
                </Button>
            </Link>
            <Box h={14}></Box>
        </>
    );
}

export default Navbar;