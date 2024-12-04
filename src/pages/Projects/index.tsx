import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

import { IExperience, IProject } from "../../objects/ObjectsInterface";

import Navbar from "../Navbar";
import CustomAnchor from "../../components/CustomAnchor";
import CustomSpacer from "../../components/CustomSpacer";
import CustomHeading from "../../components/CustomHeading";

const navbarButton = {
    label: "Home",
    icon: FaHome,
    href: "../"
}

const ProjectCard = (project: IProject) => {
    var imageSrc = project.thumbnail;
    var imageCover = true;

    if (!imageSrc) {
        imageSrc = "/portfolio/static/images/projects/default.png";
        imageCover = false;
    }

    return (
        <Card w="full" maxW={350} overflow="hidden">
            <Image src={imageSrc} alt={project.thumbnail} h={48} objectFit={imageCover ? "cover" : "contain"} />
            <CardHeader>
                <Heading color="#22495e" size="md" mb={1}>{project.name}</Heading>
                <Text color="gray" fontSize="sm">{project.from} - {project.to ? project.to : "Present"}</Text>
            </CardHeader>
            <CardBody pt={0}>
                <Text fontSize="sm">{project.description}</Text>
            </CardBody>
            <CardFooter pt={0}>
                <Button colorScheme="teal" variant="link" size="sm">See details</Button>
            </CardFooter>
        </Card>
    );
}

const ProjectsSection = (exp: IExperience) => {
    return (
        <>
            <CustomAnchor id={exp.logo} />
            <CustomHeading text={exp.institution} isSubheading />
            <Flex pt={4} gap={4} flexWrap="wrap">
                {exp.projects.map((project) => ProjectCard(project))}
            </Flex>
        </>
    );
}

const Projects = () => {
    const expData: IExperience[] = require("../../objects/experience.json").$schema;
    const pageHeight = (window.innerHeight - 57);

    var navbarItems: any[] = [];
    var expProjects: IExperience[] = [];

    for (var i = 0; i < expData.length; i++) {
        const exp = expData[i];
        if (exp.projects.length > 0) {
            expProjects.push(exp);
            navbarItems.push({
                title: exp.logo,
                href: exp.logo
            });
        }
    }

    return (
        <>
            <Navbar navbarItems={navbarItems} button={navbarButton}/>
            <Box px={{base: 6, sm: 10}} py={{base: 4, sm: 6}} minH={pageHeight}>
                <CustomAnchor id="top" />
                <CustomHeading text="My Projects" isCenter noMargin />

                {expProjects.map((exp) => ProjectsSection(exp))}

                <CustomSpacer size={20} />
            </Box>
        </>
    );
}

export default Projects;