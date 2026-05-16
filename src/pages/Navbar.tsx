import { Text, Box, Heading, List, ListItem, Button, Icon, Drawer, DrawerContent, useDisclosure, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, Flex } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";

interface NavbarItemProp {
    title: string,
    href: string,
    subItems?: NavbarItemProp[]
}

interface NavbarProp {
    navbarItems: NavbarItemProp[],
    isSideNavigation?: boolean
}

const Navbar = (property: NavbarProp) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                position={"fixed"}
                top={0}
                w={"full"}
                px={"8"}
                py={{base: "4", md: "6"}}
                bgColor={"rgba(0,0,0,0.85)"}
                zIndex={"1000"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    w={"full"}
                    maxW={"8xl"}
                    m={"auto"}
                >
                    <Link to={"top"} smooth={true} spy={true} duration={750}>
                        <Heading fontSize={{base: "xl", md: "3xl"}} cursor={"pointer"}>
                            Portfolio
                        </Heading>
                    </Link>

                    {/* DESKTOP VIEW - TOP NAVIGATION */}
                    {property.isSideNavigation ? null :
                        <List display={{base: "none", md: "flex"}} listStyleType={"none"} gap={"6"}>
                            {property.navbarItems.map((navbarItem) => {
                                return (
                                    <ListItem display={"flex"} alignItems={"center"}>
                                        {navbarItem.href.includes("./") ?
                                            <PageLink to={navbarItem.href}>
                                                <Text
                                                    color={"#aaa"}
                                                    transition={"0.3s"}
                                                    cursor={"pointer"}
                                                    _hover={{color: "#00f2fe"}}
                                                >
                                                    {navbarItem.title}
                                                </Text>
                                            </PageLink>
                                            :
                                            <Link to={navbarItem.href} smooth={true} spy={true} duration={750}>
                                                <Text
                                                    color={"#aaa"}
                                                    transition={"0.3s"}
                                                    cursor={"pointer"}
                                                    _hover={{color: "#00f2fe"}}
                                                >
                                                    {navbarItem.title}
                                                </Text>
                                            </Link>
                                        }
                                    </ListItem>
                                );
                            })}
                        </List>
                    }

                    {/* MOBILE VIEW - navigation button */}
                    <Button
                        display={{base: "block", md: "none"}}
                        variant="unstyled"
                        color={"#aaa"}
                        transition={"0.3s"}
                        h={6}
                        _hover={{color: "#00f2fe"}}
                        onClick={onOpen}
                    >
                        <Icon as={IoMenu}></Icon>
                    </Button>
                </Box>
            </Box>

            {/* DESKTOP VIEW - SIDE NAVIGATION */}
            {!property.isSideNavigation ? null :
                <Box
                    display={{base: "none", md: "block"}}
                    pos={"fixed"}
                    top={"100px"}
                    left={"calc(((100% - min(100%, 1500px)) / 2) + 20px)"}
                    w={{base: "300px", lg: "325px"}}
                    p={4}
                    bgColor={"rgba(255,255,255,0.05)"}
                    borderRadius={4}
                >
                    <Heading fontSize={{base: "medium", lg: "large"}} color={"#00f2fe"} mb={4}>Navigation</Heading>
                    <Flex flexDir={"column"} gap={4}>
                        {property.navbarItems.map((navbarItem) => {
                            return (
                                <Flex flexDir={"column"} gap={1}>
                                    <Text
                                        w={"fit-content"}
                                        fontSize={{base: "xs", lg: "smaller"}}
                                        color={"#ccc"}
                                        transition={"0.3s"}
                                        cursor={"pointer"}
                                        _hover={{color: "#00f2fe"}}
                                    >
                                        {navbarItem.href.includes("./") ?
                                            <PageLink to={navbarItem.href}>
                                                {navbarItem.title}
                                            </PageLink>
                                            :
                                            <Link to={navbarItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                                {navbarItem.title}
                                            </Link>
                                        }
                                    </Text>
                                    {!navbarItem.subItems || navbarItem.subItems.length <= 0 ? null :
                                        <List display={"flex"} flexDir={"column"} pl={4} gap={1}>
                                            {navbarItem.subItems.map((subNavbarItem) => {
                                                return (
                                                    <ListItem>
                                                        <Text
                                                            w={"fit-content"}
                                                            fontSize={{base: "xs", lg: "smaller"}}
                                                            transition={"0.3s"}
                                                            cursor={"pointer"}
                                                            _hover={{color: "#00f2fe"}}
                                                        >
                                                            <Link to={subNavbarItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                                                {subNavbarItem.title}
                                                            </Link>
                                                        </Text>
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    }
                                </Flex>
                            );
                        })}
                    </Flex>
                </Box>
            }

            {/* MOBILE VIEW - drawer */}
            <Drawer isOpen={isOpen} onClose={onClose} placement="right">
                <DrawerOverlay/>
                <DrawerContent color={"#aaa"} bgColor={"rgb(25, 25, 25)"}>
                    <DrawerCloseButton/>
                    <DrawerHeader color={"#00f2fe"}>Navigation</DrawerHeader>
                    <DrawerBody>
                        <List display={"Flex"} listStyleType={"none"} flexDir={"column"} gap={4}>
                            {property.navbarItems.map((navbarItem) => {
                                return (
                                    <ListItem>
                                        <Text
                                            w={"fit-content"}
                                            color={"#aaa"}
                                            transition={"0.3s"}
                                            cursor={"pointer"}
                                            _hover={{color: "#00f2fe"}}
                                        >
                                            {navbarItem.href.includes("./") ?
                                                <PageLink to={navbarItem.href}>
                                                    {navbarItem.title}
                                                </PageLink>
                                                :
                                                <Link to={navbarItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                                    {navbarItem.title}
                                                </Link>
                                            }
                                        </Text>
                                        {!navbarItem.subItems || navbarItem.subItems.length <= 0 ? null :
                                            <List display={"flex"} flexDir={"column"} mt={2} pl={8} gap={2}>
                                                {navbarItem.subItems.map((subNavbarItem) => {
                                                    return (
                                                        <ListItem w={"fit-content"}>
                                                            <Link to={subNavbarItem.href} smooth={true} spy={true} duration={750} onClick={onClose}>
                                                                <Text
                                                                    color={"#aaa"}
                                                                    transition={"0.3s"}
                                                                    cursor={"pointer"}
                                                                    _hover={{color: "#00f2fe"}}
                                                                >
                                                                    {subNavbarItem.title}
                                                                </Text>
                                                            </Link>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        }
                                    </ListItem>
                                );
                            })}
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Navbar;