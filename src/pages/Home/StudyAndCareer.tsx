import { BsBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import { Box, Card, CardBody, CardFooter, CardHeader, Collapse, Flex, Heading, Icon, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";
import { useState } from "react";

import { IExperience } from "../../objects/ObjectsInterface";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const StudyAndCareerCard = (property: IExperience) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const isWork = property.type === "WORK";

    return (
        <Card
            variant={"unstyled"}
            w={"full"}
            display={"flex"}
            flexDir={{base: "column", sm: "row"}}
            borderRadius={16}
            color={"#ddd"}
            bgColor={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.06)"}
            transition={"0.3s ease"}
            overflow={"hidden"}
            _hover={{
                transform: "translateY(-8px)",
                borderColor: "rgba(0,242,254,0.4)",
                boxShadow: "0 10px 25px rgba(0,242,254,0.15)"
            }}
        >
            {!property.logoSrc ? null :
                <Flex
                    w={{base: "full", sm: "200px"}}
                    p={{base: 10, sm: 6}}
                    alignItems={"center"}
                    bgColor={"white"}
                >
                    <Image
                        src={property.logoSrc}
                        alt={property.logo}
                        maxW={"full"}
                        maxH={"full"}
                        objectFit={"contain"}
                    />
                </Flex>
            }
            <Box px={6} py={5} w={"full"}>
                <CardHeader
                    display={{base: "block", md: "flex"}}
                    justifyContent={"space-between"}
                    gap={5}
                >
                    <Box w={10}>
                        <Icon boxSize={"full"} as={isWork ? BsBriefcaseFill : FaGraduationCap}></Icon>
                    </Box>
                    <Box w={"full"}>
                        <Heading
                            fontSize={{base: "smaller", md: "large"}}
                            color={"#00f2fe"}
                        >
                            {property.title}
                        </Heading>
                        <Text fontSize={{base: "xs", md: "medium"}}>{property.institution}, {property.location}</Text>
                    </Box>
                    <Text
                        w={{base: "full", md: 48}}
                        textAlign={{base: "left", md: "right"}}
                        color={"#aaa"}
                        fontSize={{base: "2xs", md: "smaller"}}
                    >
                        {property.from} - {property.to ? property.to : "Present"}
                    </Text>
                </CardHeader>
                <Collapse in={isCardOpen} >
                    <CardBody mt={{base: 4, md: 6}} display={"flex"} flexDir={"column"} gap={4} fontSize={{base: "xs", md: "medium"}}>
                        {property.description.length <= 0 ? null :
                            <Box>
                                <Heading fontSize={{base: "xs", md: "medium"}}>{isWork ? "Job " : ""}Description:</Heading>
                                <UnorderedList>
                                    {property.description.map((descriptionItem) => {
                                        return (
                                            <ListItem>{descriptionItem}</ListItem>
                                        );
                                    })}
                                </UnorderedList>
                            </Box>
                        }
                        {property.projects.length <= 0 ? null :
                            <Box>
                                <Heading fontSize={{base: "xs", md: "medium"}}>Related Projects:</Heading>
                                <UnorderedList>
                                    {property.projects.map((projectItem) => {
                                        return (
                                            <ListItem>
                                                <Text w={"fit-content"} color="#00f2fe" _hover={{textDecor: "underline"}}>
                                                    <Link to={"projects#" + projectItem.id}>
                                                        {projectItem.name}
                                                    </Link>
                                                </Text>
                                            </ListItem>
                                        );
                                    })}
                                </UnorderedList>
                            </Box>
                        }
                    </CardBody>
                </Collapse>
                <CardFooter color={"#00f2fe"} mt={4} fontSize={{base: "xs", md: "smaller"}}>
                    <Text
                        display={"flex"}
                        alignItems={"center"}
                        gap={1}
                        cursor={"pointer"}
                        _hover={{textDecor: "underline"}}
                        onClick={() => {setIsCardOpen(!isCardOpen)}}
                    >
                        <Icon as={isCardOpen ? IoIosArrowUp : IoIosArrowDown}></Icon>
                        <Text>{isCardOpen ? "Hide details" : "Show details"}</Text>
                    </Text>
                </CardFooter>
            </Box>
        </Card>
    );
}

const StudyAndCareer = () => {
        const expData: IExperience[] = require("../../objects/experience.json").$schema;

    return (
        <CustomSection sectionID="studyAndCareer" sectionHeader="Study and Career" content={
            <Flex
                w={"full"}
                maxW={"750px"}
                m={"auto"}
                flexDir={"column"}
                gap={4}
            >
                {expData.map((item) => {
                    return (
                        <StudyAndCareerCard
                            id={item.id}
                            type={item.type}
                            title={item.title}
                            institution={item.institution}
                            location={item.location}
                            from={item.from}
                            to={item.to}
                            description={item.description}
                            projects={item.projects}
                            logo={item.logo}
                            logoSrc={item.logoSrc}
                        />
                    );
                })}
                
            </Flex>
        }
        />
    );
}

export default StudyAndCareer;