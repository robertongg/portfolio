import { useDisclosure, Box, Button, Card, CardHeader, CardFooter, Flex, Heading, Icon, Image, ListItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, UnorderedList } from "@chakra-ui/react";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import CustomHeading from "../../components/CustomHeading";
import { IExperience } from "../../objects/ObjectsInterface";
import { Link } from "react-router-dom";

const StudyAndCareerCard = (property: IExperience, isRight: boolean, topPosition: number, stickyHeight: number, fullWidth: boolean) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    const logoImage = property.logoSrc;
    const noCardContent = property.description.length < 1 && property.projects.length < 1;
    const cardTitle = property.title;
    const cardSubtitle = property.institution;
    const cardLogo = property.type.toUpperCase() === "WORK" ? BsBriefcaseFill : FaGraduationCap;

    return (
        <Box
            minH={stickyHeight}
            w={fullWidth ? "calc(100% - 36px)" : "50%"}
            maxW={fullWidth ? "calc(100% - 36px)" : "50%"}
            ml={fullWidth ? "40px" : (isRight ? "50%" : 0)}
            position="absolute"
            top={topPosition}
        >
            <Box position="sticky" top={200} py={2}>
                <Box
                    bgColor="#438ea6"
                    position="absolute"
                    zIndex={-1}
                    width={4}
                    height={4}
                    borderRadius={8}
                    top={75}
                    left={isRight ? 0 : "unset"}
                    right={isRight ? "unset" : 0}
                    transform={isRight ? "translate(-50%, -50%)" : "translate(50%, -50%)"}
                    _after={{
                        content:'" "',
                        display: "block",
                        backgroundColor: "#438ea6",
                        width: "150px",
                        height: "2px",
                        position: "absolute",
                        top: "calc(50% - 1px)",
                        left: isRight ? "75%" : "unset",
                        right: isRight ? "unset" : "75%"
                    }}
                ></Box>
                <Card
                    py={0} pr={6}
                    w="-webkit-fit-content"
                    position="absolute"
                    left={isRight ? {base: 65, sm: 150} : "unset"}
                    right={isRight ? "unset" : 150}
                    onClick={noCardContent ? () => {} : onToggle}
                    cursor={noCardContent ? "default" : "pointer"}
                >
                    <CardHeader
                        display="flex"
                        flexDirection={{base: "column", md: "row"}}
                        gap={2}
                        alignItems="center"
                        w="-webkit-fit-content"
                        maxW={550}
                    >
                        {logoImage ? <Image objectFit="contain" w={200} h={20} src={logoImage} alt={property.logo} /> : null}
                        <Flex flexDirection="column" justifyContent="center">
                            <Heading fontSize="lg" color="#22495e">
                                {cardTitle}
                                <Icon as={cardLogo} ml={2} h={4} />
                            </Heading>
                            <Text fontSize="sm">{cardSubtitle}, {property.location}</Text>
                            <Text fontSize="xs" color="gray">{property.from} - {property.to ? property.to : "Present"}</Text>
                        </Flex>
                    </CardHeader>
                    {noCardContent ? null :
                        <CardFooter pt={0}>
                            <Button
                                color="teal.500"
                                variant="link"
                                size="sm"
                            >
                                See more details
                            </Button>
                        </CardFooter>
                    }
                </Card>
            </Box>
            <Modal size="2xl" onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{cardTitle}</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Flex
                            flexDirection={{base: "column", sm: "row"}}
                            gap={4}
                            alignItems={{base: "flex-start", sm: "center"}}
                            w={{base: "full", sm: "-webkit-fit-content"}}
                        >
                            {logoImage ? <Image objectFit="contain" w={200} h={20} src={logoImage} alt={property.logo} /> : null}
                            <Flex flexDirection="column" justifyContent="center">
                                <Heading fontSize="lg" color="#22495e">
                                    {cardSubtitle}
                                    <Icon as={cardLogo} ml={2} h={4} />
                                </Heading>
                                <Text fontSize="sm">{property.location}</Text>
                                <Text fontSize="xs" color="gray">{property.from} - {property.to ? property.to : "Present"}</Text>
                            </Flex>
                        </Flex>
                        <Flex fontSize="sm" pt={4} flexDirection="column" gap={4}>
                            {property.description.length < 1 ? null :
                                <Box>
                                    <Heading fontSize="sm" color="#22495e">Description</Heading>
                                    {property.description.length < 2 ?
                                        <Text>{property.description[0]}</Text>
                                        : <UnorderedList pl={1}>
                                            {property.description.map(item => (
                                                <ListItem>{item}</ListItem>
                                            ))}
                                        </UnorderedList>
                                    }
                                </Box>
                            }
                            {property.projects.length < 1 ? null :
                                <Box>
                                    <Heading fontSize="sm" color="#22495e">Projects</Heading>
                                    <UnorderedList pl={1}>
                                        {property.projects.map(item => (
                                            <ListItem>{item.name}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Box>
                            }
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        {property.projects.length < 1 ? null :
                            <Link to={"projects#" + property.logo}>
                                <Button colorScheme="teal">
                                    See projects
                                </Button>
                            </Link>
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

const StudyAndCareer = () => {
    const expData: IExperience[] = require("../../objects/experience.json").$schema;
    const timeline: string[] = ["Present", "Nov 2023", "Apr 2023", "Mar 2023", "June 2022", "Jan 2020", "Oct 2018", "Aug 2018", "May 2018"]

    return (
        <>
            <CustomHeading text="My Study and Career" isCenter></CustomHeading>

            {/* Desktop View */}
            <Box display={{base: "none", xl: "block"}} position="relative">
                <Box position="relative" h={2750}>
                    {expData.map((data, index) => StudyAndCareerCard(data, index % 2 === 0, data.topPosition, data.stickyHeight, false))}
                </Box>
                <Box position="absolute" top={75} left="50%" transform="translate(-50%, -40px)">
                    {timeline.map((text, index) => (
                        <Box
                            w={20} h={20} p={2} mt={index > 0 ? 60 : 0}
                            bgColor="white"
                            border="4px solid #438ea6"
                            borderRadius={40}
                            display="flex"
                            position="relative"
                            alignItems="center"
                            justifyContent="center"
                            _after={index < 1 ? {} : {
                                content: '""',
                                backgroundColor: "#438ea6",
                                display: "block",
                                position: "absolute",
                                zIndex: -1,
                                top: "25px",
                                left: "50%",
                                width: "2px",
                                height: "300px",
                                transform: "translate(-50%, -100%)"
                            }}
                        >
                            <Heading size="sm" textAlign="center" color="#438ea6">{text}</Heading>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Tablet and Mobile View */}
            <Box display={{base: "block", xl: "none"}} position="relative">
                <Box position="relative" h={2750}>
                    {expData.map((data) => StudyAndCareerCard(data, true, data.topPosition, data.stickyHeight, true))}
                </Box>
                <Box position="absolute" top={75} transform="translate(0, -40px)">
                    {timeline.map((text, index) => (
                        <Box
                            w={20} h={20} p={2} mt={index > 0 ? 60 : 0}
                            bgColor="white"
                            border="4px solid #438ea6"
                            borderRadius={40}
                            display="flex"
                            position="relative"
                            alignItems="center"
                            justifyContent="center"
                            _after={index < 1 ? {} : {
                                content: '""',
                                backgroundColor: "#438ea6",
                                display: "block",
                                position: "absolute",
                                zIndex: -1,
                                top: "25px",
                                left: "50%",
                                width: "2px",
                                height: "300px",
                                transform: "translate(-50%, -100%)"
                            }}
                        >
                            <Heading size="sm" textAlign="center" color="#438ea6">{text}</Heading>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default StudyAndCareer;