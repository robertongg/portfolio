import { Box, Button, Card, CardBody, CardFooter, CardHeader, Collapse, Flex, Heading, Icon, Image, ListItem, Tag, Text, UnorderedList } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";
import { useState } from "react";
import { IExperience, IProject } from "../../objects/ObjectsInterface";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

interface FeaturedProjectsCardProp {
    companyName: string,
    companyLocation: string,
    projectDetails: IProject
}

const FeaturedProjectsCard = (property: FeaturedProjectsCardProp) => {
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalImages = property.projectDetails.images ? property.projectDetails.images.length : 0;

    const prevImageFunction = () => {
        if (currentImageIndex - 1 < 0) {
            setCurrentImageIndex(totalImages - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    const nextImageFunction = () => {
        if (currentImageIndex + 1 >= totalImages) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    return (
        <Card
            variant={"unstyled"}
            w={"full"}
            px={6}
            py={5}
            borderRadius={16}
            color={"#ddd"}
            bgColor={"rgba(255,255,255,0.05)"}
            border={"1px solid rgba(255,255,255,0.06)"}
            transition={"0.3s ease"}
            _hover={{
                transform: "translateY(-8px)",
                borderColor: "rgba(0,242,254,0.4)",
                boxShadow: "0 10px 25px rgba(0,242,254,0.15)"
            }}
        >
            <CardHeader
                display={{base: "block", sm: "flex"}}
                justifyContent={"space-between"}
                gap={5}
            >
                <Box w={"full"}>
                    <Heading
                        fontSize={{base: "smaller", md: "large"}}
                        color={"#00f2fe"}
                    >
                        {property.projectDetails.name}
                    </Heading>
                    <Text fontSize={{base: "xs", md: "medium"}}>{property.companyName}, {property.companyLocation}</Text>
                </Box>
                <Text
                    w={{base: "full", sm: 40, md: 44}}
                    textAlign={{base: "left", sm: "right"}}
                    color={"#aaa"}
                    fontSize={{base: "2xs", md: "smaller"}}
                >
                    {property.projectDetails.from} - {property.projectDetails.to ? property.projectDetails.to : "Present"}
                </Text>
            </CardHeader>
            <Collapse in={isCardOpen} >
                <CardBody mt={{base: 4, md: 6}} display={"flex"} flexDir={"column"} gap={4} fontSize={{base: "xs", md: "medium"}}>
                    {property.projectDetails.description == null ? null :
                        <Box>
                            <Heading fontSize={{base: "xs", md: "medium"}}>Project Description:</Heading>
                            <Text>
                                {property.projectDetails.description}
                            </Text>
                        </Box>
                    }
                    {property.projectDetails.role == null || property.projectDetails.role.length <= 0 ? null :
                        <Box>
                            <Heading fontSize={{base: "xs", md: "medium"}}>Role and Responsibility:</Heading>
                            <UnorderedList>
                                {property.projectDetails.role.map((roleItem) => {
                                    return (
                                        <ListItem>{roleItem}</ListItem>
                                    );
                                })}
                            </UnorderedList>
                        </Box>
                    }
                    {property.projectDetails.tools == null || property.projectDetails.tools.length <= 0 ? null :
                        <Box>
                            <Heading fontSize={{base: "xs", md: "medium"}}>Tools Used:</Heading>
                            <Flex mt={1} gap={2} flexWrap={"wrap"}>
                                {property.projectDetails.tools.map((toolItem) => {
                                    return(
                                        <Tag w={"fit-content"} fontSize={"smaller"}>{toolItem}</Tag>
                                    );
                                })}
                            </Flex>
                        </Box>
                    }
                    {property.projectDetails.images == null || property.projectDetails.images.length <= 0 ? null :
                        <Flex
                            w={"full"}
                            position={"relative"}
                            overflow={"hidden"}
                            borderRadius={4}
                            justifyContent={{base: "center", md: "space-between"}}
                            alignItems={"center"}
                            flexWrap={{base: "wrap", md: "nowrap"}}
                            gap={{base: 4, md: "unset"}}
                        >
                            <Button
                                variant={"unstyled"}
                                w={10}
                                h={10}
                                ml={{base: "none", md: 4}}
                                bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                                border={"none"}
                                borderRadius={8}
                                color={"black"}
                                transition={"0.3s ease"}
                                transform={{base: "scale(0.8)", md: "unset"}}
                                _hover={{
                                    transform: {base: "scale(0.85)", md: "translateY(-3px) scale(1.05)"},
                                    boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                                }}
                                onClick={prevImageFunction}
                            >
                                <Icon as={IoIosArrowBack}></Icon>
                            </Button>
                            <Flex
                                w={{base: "full", md: "calc(100% - 140px)"}}
                                aspectRatio={"16 / 9"}
                                order={{base: "-1", md: "unset"}}
                                pos={"relative"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                border={"1px solid rgba(255,255,255,0.08)"}
                                borderRadius={16}
                                bgColor={"white"}
                            >
                                {property.projectDetails.images.map((imageItem, index) => {
                                    return (
                                        <Image
                                            src={imageItem.imageSrc}
                                            alt={imageItem.imageDesc}
                                            maxW={"full"}
                                            maxH={"full"}
                                            pos={"absolute"}
                                            objectFit={"contain"}
                                            transition={"opacity 0.4s ease"}
                                            style={{opacity: (currentImageIndex === index ? "1" : "0")}}
                                        />
                                    );
                                })}
                            </Flex>
                            <Button
                                variant={"unstyled"}
                                w={10}
                                h={10}
                                mr={{base: "none", md: 4}}
                                bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                                border={"none"}
                                borderRadius={8}
                                color={"black"}
                                transition={"0.3s ease"}
                                transform={{base: "scale(0.8)", md: "unset"}}
                                _hover={{
                                    transform: {base: "scale(0.85)", md: "translateY(-3px) scale(1.05)"},
                                    boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                                }}
                                onClick={nextImageFunction}
                            >
                                <Icon as={IoIosArrowForward}></Icon>
                            </Button>
                        </Flex>
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
        </Card>
    );
}

const FeaturedProjects = () => {
    const expData: IExperience[] = require("../../objects/experience.json").$schema;

    return (
        <CustomSection sectionID="projects" sectionHeader="Featured Projects" content={
            <Flex
                w={"full"}
                maxW={"850px"}
                m={"auto"}
                flexDir={"column"}
                alignItems={"center"}
            >
                <Flex
                    w={"full"}
                    flexDir={"column"}
                    gap={4}
                >
                    {expData[0].projects.map((project) => {
                        return (
                            <FeaturedProjectsCard
                                companyName={expData[0].institution}
                                companyLocation={expData[0].location}
                                projectDetails={project}
                            />
                        );
                    })}
                </Flex>
                <Link to={"projects"}>
                    <Button
                        id="hero-banner-roles"
                        variant={"unstyled"}
                        w={"fit-content"}
                        px={6}
                        mt={{base: 6, md: 8}}
                        border={"none"}
                        borderRadius={20}
                        bg={"linear-gradient(135deg, #00f2fe, #4facfe)"}
                        color={"black"}
                        fontSize={{base: "xs", md: "smaller"}}
                        transition={"0.3s ease"}
                        _hover={{
                            transform: "translateY(-3px) scale(1.05)",
                            boxShadow: "0 0 18px rgba(0,242,254,0.6)"
                        }}>
                        View All Projects
                    </Button>
                </Link>
            </Flex>
        }
        />
    );
}

export default FeaturedProjects