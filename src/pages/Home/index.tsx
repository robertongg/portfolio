import { Box } from "@chakra-ui/react";

import CustomSpacer from "../../components/CustomSpacer";
import CustomAnchor from "../../components/CustomAnchor";

import Navbar from "../Navbar";
import AboutMe from "./AboutMe";
import StudyAndCareer from "./StudyAndCareer";
import Achievements from "./Achievements";
import Skills from "./Skills";
import HeroBanner from "./HeroBanner";

const Home = () => {
    const pageHeight = (window.innerHeight - 57);

    return (
        <>
            <HeroBanner/>
            <Navbar/>
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