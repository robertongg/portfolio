import { Box } from "@chakra-ui/react";
import { FaFileCode } from "react-icons/fa";

import CustomSpacer from "../../components/CustomSpacer";
import CustomAnchor from "../../components/CustomAnchor";

import Navbar from "../Navbar";
import AboutMe from "./AboutMe";
import StudyAndCareer from "./StudyAndCareer";
import Achievements from "./Achievements";
import Skills from "./Skills";
import HeroBanner from "./HeroBanner";

const navbarItems = [
    {
        title: "About Me",
        href: "aboutMe"
    }, {
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

const navbarButton = {
    label: "Projects",
    href: "projects",
    icon: FaFileCode
}

const Home = () => {
    const pageHeight = (window.innerHeight - 57);

    return (
        <>
            <HeroBanner/>
            <Navbar navbarItems={navbarItems} button={navbarButton}/>
            <Box px={{base: 6, sm: 10}} py={{base: 4, sm: 6}} minH={pageHeight}>
                <CustomAnchor id="aboutMe" />
                <AboutMe/>

                <CustomAnchor id="studyAndCareer" />
                <StudyAndCareer/>

                <CustomAnchor id="achievements" />
                <Achievements/>

                <CustomAnchor id="skills" />
                <Skills/>

                <CustomSpacer size={20} />
            </Box>
        </>
    );
}

export default Home;