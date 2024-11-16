import CustomSpacer from "../components/CustomSpacer";
import CustomAnchor from "../components/CustomAnchor";

import AboutMe from "../sections/AboutMe";
import StudyAndCareer from "../sections/StudyAndCareer";
import Achievements from "../sections/Achievements";
import Skills from "../sections/Skills";

const Home = () => {
    return (
        <>
            <AboutMe/>

            <CustomAnchor id="studyAndCareer" />
            <StudyAndCareer/>

            <CustomAnchor id="achievements" />
            <Achievements/>

            <CustomAnchor id="skills" />
            <Skills/>

            <CustomSpacer size={20} />
        </>
    );
}

export default Home;