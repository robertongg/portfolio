import Navbar from "../Navbar";
import AboutMe from "./AboutMe";
import Achievements from "./Achievements";
import ContactMe from "./ContactMe";
import FeaturedProjects from "./FeaturedProjects";
import HeroBanner from "./HeroBanner";
import Skills from "./Skills";
import StudyAndCareer from "./StudyAndCareer";

const navbarItems = [
    {
        title: "About Me",
        href: "aboutMe"
    }, {
        title: "Study and Career",
        href: "studyAndCareer"
    }, {
        title: "Skills",
        href: "skills"
    }, {
        title: "Projects",
        href: "projects"
    }, {
        title: "Achievements",
        href: "achievements"
    }, {
        title: "Contact Me",
        href: "contactMe"
    }
]

const Home = () => {
    return (
        <>
            <Navbar navbarItems={navbarItems} />
            <HeroBanner />
            <AboutMe />
            <StudyAndCareer />
            <Skills />
            <FeaturedProjects />
            <Achievements />
            <ContactMe />
        </>
    );
}

export default Home;