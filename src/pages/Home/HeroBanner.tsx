import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const HeroBanner = () => {
    const [displayedRoles, setDisplayedRoles] = useState("");

    useEffect(() => {
        const roles = "Software Engineer";
        let index = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const typingRoles = () => {
            setDisplayedRoles(roles.substring(0, index));
            index++;

            if (index > roles.length) {
                index = 0;
                timeout = setTimeout(typingRoles, 1000);
            } else {
                timeout = setTimeout(typingRoles, 100);
            }
        }

        typingRoles();

        return () => clearInterval(timeout);

    }, []);

    return (
        <Box
            h={{base: "calc(100vh - 56px)", md: "calc(100vh - 84px)"}}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Heading fontSize={{base: "2xl", md: "3xl"}}>
                Hi, I am <Text color={"#00f2fe"} display={"inline"}>Robert Ong</Text>
            </Heading>
            <Text
                mt={{base: 0, md: 2}}
                color={"#00f2fe"}
                fontSize={{base: "medium", md: "large"}}
                h={"6"}
            >
                {displayedRoles}
            </Text>
            <Link to={"projects"} smooth={true} spy={true} duration={750}>
                <Button
                    id="hero-banner-roles"
                    variant={"unstyled"}
                    w={"fit-content"}
                    px={6}
                    mt={{base: 6, md: 8}}
                    border={"none"}
                    borderRadius={20}
                    bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                    color={"black"}
                    fontSize={{base: "xs", md: "smaller"}}
                    transition={"0.3s ease"}
                    _hover={{
                        transform: "translateY(-3px) scale(1.05)",
                        boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                    }}>
                    View Featured Projects
                </Button>
            </Link>
        </Box>
    );
}

export default HeroBanner;