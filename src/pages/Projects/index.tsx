import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import CustomAnchor from "../../components/CustomAnchor";
import CustomSpacer from "../../components/CustomSpacer";
import { FaHome } from "react-icons/fa";

const navbarItems = [
    {
        title: "Test",
        href: ""
    }
]

const navbarButton = {
    label: "Home",
    icon: FaHome,
    href: "../"
}

const Projects = () => {
    const pageHeight = (window.innerHeight - 57);

    return (
        <>
            <Navbar navbarItems={navbarItems} button={navbarButton}/>
            <Box px={{base: 6, sm: 10}} py={{base: 4, sm: 6}} minH={pageHeight}>
                <CustomAnchor id="top" />

                <CustomSpacer size={20} />
            </Box>
        </>
    );
}

export default Projects;