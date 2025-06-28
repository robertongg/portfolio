import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Icon, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { IExperience, IProject, IProjectImage } from "../../objects/ObjectsInterface";

import Navbar from "../Navbar";
import CustomAnchor from "../../components/CustomAnchor";
import CustomSpacer from "../../components/CustomSpacer";
import CustomHeading from "../../components/CustomHeading";
import { useState } from "react";

const navbarButton = {
    label: "Home",
    icon: FaHome,
    href: "../"
}

const ImageCarousel = (projectImages: IProjectImage[] | undefined) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    if (projectImages == null || projectImages.length < 1) {
        return null;
    }

    const prevImageFunction = () => {
        var imageIndex = currentImageIndex - 1;
        if (imageIndex < 0) {
            imageIndex = projectImages.length - 1;
        }
        setCurrentImageIndex(imageIndex);
    }

    const nextImageFunction = () => {
        var imageIndex = currentImageIndex + 1;
        if (imageIndex >= projectImages.length) {
            imageIndex = 0;
        }
        setCurrentImageIndex(imageIndex);
    }

    return (
        <>
            <Heading mt={4} mb={2} size="sm" color="#438ea6">Images:</Heading>
            <Flex
                flexDirection="column"
                alignItems="center"
                position="relative"
                mb={4}
                border="1px solid #dddddd"
            >
                <Image
                    src={projectImages[currentImageIndex].imageSrc}
                    alt={projectImages[currentImageIndex].imageDesc}
                    mb={6}
                    w="full" aspectRatio="16 / 9"
                    objectFit="contain"
                />
                <Text size="sm" position="absolute" bottom={1}>
                    {projectImages[currentImageIndex].imageDesc}
                </Text>
                <Text position="absolute" bottom={-4} transform="translate(0, 50%)" color="gray.500">
                    {currentImageIndex + 1} / {projectImages.length}
                </Text>
                <Button
                    variant="link"
                    position="absolute"
                    left={0} bottom={-4}
                    transform="translate(0, 50%)"
                    fontSize="md"
                    p={0}
                    onClick={prevImageFunction}
                >
                    <Icon as={IoIosArrowBack} />
                    <Text>Prev</Text>
                </Button>
                <Button
                    variant="link"
                    position="absolute"
                    right={0} bottom={-4}
                    transform="translate(0, 50%)"
                    fontSize={"md"}
                    p={0}
                    onClick={nextImageFunction}
                >
                    <Text>Next</Text>
                    <Icon as={IoIosArrowForward} />
                </Button>
            </Flex>
        </>
    );
}

const ProjectCard = (project: IProject, institution: string) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    var imageSrc = project.thumbnail;
    var imageCover = true;

    if (!imageSrc) {
        imageSrc = "/portfolio/static/images/projects/default.png";
        imageCover = false;
    }

    return (
        <>
            <Card w="full" maxW={350} overflow="hidden" onClick={onToggle} cursor="pointer">
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
            <Modal size="3xl" onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        <Text fontSize="md">{institution}</Text>
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Heading size="lg" color="#22495e">{project.name}</Heading>
                        <Text>{project.from} - {project.to ? project.to : "Present"}</Text>

                        <Heading mt={4} size="sm" color="#438ea6">Description:</Heading>
                        <Text>{project.description}</Text>

                        {!project.role || project.role.length < 1 ? null :
                            <>
                                <Heading mt={4} size="sm" color="#438ea6">Role:</Heading>
                                <UnorderedList pl={1}>
                                    {project.role.map(item => (
                                        <ListItem>{item}</ListItem>
                                    ))}
                                </UnorderedList>
                            </>
                        }

                        {!project.tools || project.tools.length < 1 ? null :
                            <>
                                <Heading mt={4} mb={1} size="sm" color="#438ea6">Tools:</Heading>
                                <Stack direction="row" flexWrap="wrap">
                                    {project.tools.map(item => (
                                        <Badge variant="solid" colorScheme="teal">{item}</Badge>
                                    ))}
                                </Stack>
                            </>
                        }
                        
                        {ImageCarousel(project.images)}
                    </ModalBody>
                    <ModalFooter/>
                </ModalContent>
            </Modal>
        </>
    );
}

const ProjectsSection = (exp: IExperience) => {
    return (
        <>
            <CustomAnchor id={exp.logo} />
            <CustomHeading text={exp.institution} isSubheading />
            <Flex pt={4} gap={4} flexWrap="wrap">
                {exp.projects.map((project) => ProjectCard(project, exp.institution))}
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