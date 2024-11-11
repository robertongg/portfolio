import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Icon, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Text, Tooltip, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { BsGlobeAsiaAustralia, BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLanguage } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { IconType } from "react-icons";
import { useState } from "react";

import { IAboutMe, IAchievements, IExperience, ISkillItems, ISkills } from "../objects/ObjectsInterface";
import CustomHeading from "../components/CustomHeading";
import CustomSpacer from "../components/CustomSpacer";
import CustomImage from "../components/CustomImage";
import CustomAnchor from "../components/CustomAnchor";

/* ====================================================================== */
/* ABOUT ME */
/* ====================================================================== */

interface AboutMeCardProp {
    icon: IconType | null,
    header: string,
    text: string
}

const AboutMeCard = (property: AboutMeCardProp) => {
    const [cardFlip, setCardFlip] = useState(false);
    const initialScaleAnimation = 0.7;

    return (
        <Card
            variant={cardFlip ? "filled": "elevated"}
            onClick={() => {setCardFlip(!cardFlip)}}
            h={{base: "125px", md: "200px"}}
            textAlign="center"
            w={{base: "full", md: "calc((100% - 1rem) / 2)", xl: "calc((100% - 3rem) / 4)"}}
            cursor="pointer"
        >
            <CardBody display="flex" alignItems="center" justifyContent="center">
                <ScaleFade
                    initialScale={initialScaleAnimation}
                    in={!cardFlip}
                    style={{display: !cardFlip ? "block" : "none"}}
                >
                    <Box>
                        {property.icon ?
                            <Heading color="#438ea6" size="lg">
                                <Icon as={property.icon}/>
                            </Heading>
                        : null}
                        <Heading color="#438ea6" size="md">
                            {property.header}
                        </Heading>
                    </Box>
                </ScaleFade>
                {property.icon ?
                    <ScaleFade
                        initialScale={initialScaleAnimation}
                        in={cardFlip}
                        style={{display: cardFlip ? "block" : "none", position: "absolute", zIndex: 1}}
                    >
                        <Heading color="blackAlpha.100" size="4xl">
                            <Icon as={property.icon}/>
                        </Heading>
                    </ScaleFade>
                : null}
                <ScaleFade
                    initialScale={initialScaleAnimation}
                    in={cardFlip}
                    style={{display: cardFlip ? "block" : "none", position: "relative", zIndex: 2}}
                >
                    <Text fontSize="md" whiteSpace="pre-wrap">{property.text}</Text>
                </ScaleFade>
            </CardBody>
        </Card>
    );
}

const AboutMe = () => {
    const aboutMeData: IAboutMe[] = require("../objects/aboutMe.json").$schema;

    return (
        <>
            <CustomHeading text="About Me" isCenter></CustomHeading>
            <Flex gap={{base: 2, sm: 4}} flexWrap="wrap" w="full">
                {aboutMeData.map((data) => {
                    var icon = null;
                    var text = data.text;

                    switch(data.header) {
                        case "AGE":
                            icon = LiaBirthdayCakeSolid;
                            text = text.replace("{0}", ((new Date()).getFullYear() - 2000).toString())
                            break;
                        case "NATIONALITY": icon = BsGlobeAsiaAustralia; break;
                        case "OCCUPATION": icon = BsBriefcase; break;
                        case "LANGUAGE": icon = IoLanguage; break;
                    }

                    return (
                        <AboutMeCard icon={icon} header={data.header} text={text}></AboutMeCard>
                    )
                })}
            </Flex>
        </>
    );
}

/* ====================================================================== */
/* MY STUDY AND CAREER */
/* ====================================================================== */

const StudyAndCareerCard = (property: IExperience, isRight: boolean, topPosition: number, stickyHeight: number, fullWidth: boolean) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    const logoImage = CustomImage(property.logo);
    const noCardContent = property.description.length < 1 && property.projects.length < 1;

    var cardTitle : string | null;
    var cardSubtitle : string | null;
    var cardLogo;
    if (property.type.toUpperCase() === "WORK") {
        cardTitle = property.position;
        cardSubtitle = property.company;
        cardLogo = BsBriefcaseFill;
    } else {
        cardTitle = property.title;
        cardSubtitle = property.school;
        cardLogo = FaGraduationCap;
    }

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
                                            <ListItem>{item}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </Box>
                            }
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        {property.projects.length < 1 ? null :
                            <Button colorScheme="teal">
                                See projects
                            </Button>
                        }
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

const StudyAndCareer = () => {
    const workData: IExperience[] = require("../objects/experience.json").$schema;
    const timeline: string[] = ["Present", "Nov 2023", "Apr 2023", "Mar 2023", "June 2022", "Jan 2020", "Oct 2018", "Aug 2018", "May 2018"]

    return (
        <>
            <CustomHeading text="My Study and Career" isCenter></CustomHeading>

            {/* Desktop View */}
            <Box display={{base: "none", xl: "block"}} position="relative">
                <Box position="relative" h={2750}>
                    {workData.map((data, index) => StudyAndCareerCard(data, index % 2 === 0, data.topPosition, data.stickyHeight, false))}
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
                    {workData.map((data) => StudyAndCareerCard(data, true, data.topPosition, data.stickyHeight, true))}
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

/* ====================================================================== */
/* MY ACHIEVEMENTS */
/* ====================================================================== */

const AchievementCards = (property: IAchievements) => {
    const logoImage = CustomImage(property.logo);

    const cardsWidth = {
        base: "full",
        sm: "calc((100% - 1rem) / 2)",
        md: "calc((100% - 2rem) / 3)",
        lg: "calc((100% - 3rem) / 4)",
        xl: "calc((100% - 4rem) / 5)"
    }

    return (
        <Flex w={cardsWidth} flexDirection="column" textAlign="center" gap={{base: 2, sm: 1}}>
            {logoImage ? <Image objectFit="contain" w="full" h={12} src={logoImage} alt={property.logo} my={4} /> : null}
            <Heading w="full" size={{base: "sm", sm: "xs"}}>{property.title}</Heading>
            <Text w="full" fontSize={{base: "sm", sm: "xs"}}>{property.date}</Text>
            {property.description ? <Text w="full" fontSize="xs" color="gray">{property.description}</Text> : null}
        </Flex>
    );
}

const Achievements = () => {
    const awardsData: IAchievements[] = require("../objects/awards.json").$schema;
    const certificateData: IAchievements[] = require("../objects/certificate.json").$schema;

    return (
        <>
            <CustomHeading text="My Achievements" isCenter></CustomHeading>

            <Flex flexDirection="column" gap={4}>
                <CustomHeading text="Awards" isSubheading isCenter></CustomHeading>
                <Flex columnGap={4} rowGap={8} flexWrap="wrap" justifyContent="center">
                    {awardsData.map(data => AchievementCards(data))}
                </Flex>
            </Flex>

            <CustomSpacer size={12} />

            <Flex flexDirection="column" gap={4}>
                <CustomHeading text="Certification" isSubheading isCenter></CustomHeading>
                <Flex columnGap={4} rowGap={8} flexWrap="wrap" justifyContent="center">
                    {certificateData.map(data => AchievementCards(data))}
                </Flex>
            </Flex>
        </>
    );
}

/* ====================================================================== */
/* MY SKILLS */
/* ====================================================================== */

const SkillItem = (property: ISkillItems) => {
    const [isOpen, setOpen] = useState(false);
    const logoImage = CustomImage(property.logo);

    return (
        <Tooltip label={property.title} hasArrow bgColor="#438ea6" px={2} fontSize="md" isOpen={isOpen}>
            <Flex
                w={24} h={24}
                borderRadius="full"
                boxShadow="md"
                justifyContent="center"
                alignItems="center"
                onClick={() => {setOpen(!isOpen)}}
                onMouseEnter={() => {setOpen(true)}}
                onMouseLeave={() => {setOpen(false)}}
            >
                <Image objectFit="contain" w={14} h={14} src={logoImage} alt={property.logo} />
            </Flex>
        </Tooltip>
    );
}

const SkillCategory = (property: ISkills) => {
    return (
        <Flex gap={4} flexDirection="column">
            <CustomHeading text={property.category} isSubheading />
            <Flex gap={8} flexWrap="wrap">
                {property.items.map(item => SkillItem(item))}
            </Flex>
        </Flex>
    );
}

const Skills = () => {
    const skillsData: ISkills[] = require("../objects/skills.json").$schema;

    return (
        <>
            <CustomHeading text="My Skills" isCenter></CustomHeading>
            <Flex gap={8} flexDirection="column">
                {skillsData.map(data => SkillCategory(data))}
            </Flex>
        </>
    );
}

/* ====================================================================== */
/* MAIN */
/* ====================================================================== */

const Home = () => {
    return (
        <>
            <AboutMe></AboutMe>

            <CustomAnchor id="studyAndCareer" />
            <StudyAndCareer></StudyAndCareer>

            <CustomAnchor id="achievements" />
            <Achievements></Achievements>

            <CustomAnchor id="skills" />
            <Skills></Skills>

            <CustomSpacer size={20} />
        </>
    );
}

export default Home;