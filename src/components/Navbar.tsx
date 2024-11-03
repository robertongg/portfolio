import { Box, Flex, Text } from "@chakra-ui/react";
import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

const navItems = [
    {
        title: "Home",
        href: "/portfolio"
    }, {
        title: "Projects",
        href: "/portfolio/projects"
    }, {
        title: "About Me",
        href: "/portfolio/about"
    }
]

const Navbar = () => {
    // const currentPath = window.location.pathname;
    const backgroundImage = CustomImage("background");

    return (
        <>
            <Box position="fixed" w="full" bgImage={backgroundImage} bgPosition="center" bgSize="cover" zIndex={99}>
                <Flex bg="rgba(0, 0, 0, 0.4)" gap={{base:10, sm:20}} pt={4} pb={4} justifyContent={"center"}>
                    {navItems.map((navItem) => {
                        // if (navItem.href === currentPath) {
                        //     return (
                        //         <Text color="whiteAlpha.900" fontWeight="bold">
                        //             {navItem.title}
                        //         </Text>
                        //     );
                        // } else {
                            return (
                                <Link to={navItem.href}>
                                    <Text color="whiteAlpha.900" _hover={{textDecoration: "underline"}}>
                                        {navItem.title}
                                    </Text>
                                </Link>
                            );
                        // }
                    })}
                </Flex>
            </Box>
            <Box h={14}></Box>
        </>
    );
}

export default Navbar;