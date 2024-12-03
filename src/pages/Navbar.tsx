import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { Link as AnchorLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IconType } from "react-icons";

interface NavbarItemProp {
    title: string,
    href: string
}

interface ButtonProp {
    label: string,
    href: string,
    icon: IconType
}

interface NavbarProp {
    navbarItems: NavbarItemProp[],
    button: ButtonProp
}

const Navbar = (property: NavbarProp) => {
    const [toTopOpacity, setToTopOpacity] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            setToTopOpacity(1);
        } else {
            setToTopOpacity(0);
        }
    });

    return (
        <>
            <Box
                position="fixed"
                top="0"
                zIndex={99}
                w="full"
                bgPosition="center"
                bgSize="cover"
            >
                {/* Desktop view */}
                <Flex display={{base: "none", md: "flex"}} bg="rgba(0, 0, 0, 0.8)" gap={{base:10, sm:12, lg: 20}} pt={4} pb={4} justifyContent={"center"} alignItems="center">
                    {property.navbarItems.map((navItem) => {
                        return (
                            <AnchorLink to={navItem.href} smooth={true} spy={true} duration={750}>
                                <Text color="whiteAlpha.900" _hover={{textDecoration: "underline"}} cursor="pointer">
                                    {navItem.title}
                                </Text>
                            </AnchorLink>
                        );
                    })}
                    <Box position="absolute" right={6}>
                        <Link to={property.button.href}>
                            <Button colorScheme="teal">
                                {property.button.label}
                                <Icon ml={1} as={property.button.icon} />
                            </Button>
                        </Link>
                    </Box>
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
                        {property.navbarItems.map((navItem) => {
                            return (
                                <AnchorLink to={navItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                    <Text>
                                        {navItem.title}
                                    </Text>
                                </AnchorLink>
                            );
                        })}
                    </DrawerBody>
                    <DrawerFooter justifyContent="flex-start">
                        <Link to={property.button.href}>
                            <Button colorScheme="teal">
                                {property.button.label}
                                <Icon ml={1} as={property.button.icon} />
                            </Button>
                        </Link>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <AnchorLink to="top" smooth={true} duration={750}>
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
            </AnchorLink>
        </>
    );
}

export default Navbar;