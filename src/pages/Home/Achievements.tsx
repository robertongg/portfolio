import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";
import { IAchievements } from "../../objects/ObjectsInterface";

const AchievementCards = (property: IAchievements) => {
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
                    <Box w={"full"}>
                        <Heading
                            fontSize={{base: "smaller", md: "large"}}
                            color={"#00f2fe"}
                        >
                            {property.title}
                        </Heading>
                        <Text fontSize={{base: "xs", md: "medium"}}>{property.associate}</Text>
                    </Box>
                    <Text
                        w={{base: "full", md: 48}}
                        textAlign={{base: "left", md: "right"}}
                        color={"#aaa"}
                        fontSize={{base: "2xs", md: "smaller"}}
                    >
                        {property.date}
                    </Text>
                </CardHeader>
                {!property.description ? null :
                    <CardBody mt={{base: 4, md: 6}} fontSize={{base: "xs", md: "medium"}}>
                        {property.description}
                    </CardBody>
                }
            </Box>
        </Card>
    );
}

const Achievements = () => {
    const awardsData: IAchievements[] = require("../../objects/awards.json").$schema;
    const certificateData: IAchievements[] = require("../../objects/certificate.json").$schema;

    return (
        <CustomSection sectionID="achievements" sectionHeader="Achievements" content={
            <Flex flexDir={"column"} w={"full"} maxW={"750px"} m={"auto"} gap={10}>
                <Flex flexDir={"column"} alignItems={"center"} gap={6}>
                    <Heading fontSize={{base: "large", md: "2xl"}} color={"#00f2fe"}>Awards</Heading>
                    <Flex
                        w={"full"}
                        maxW={"750px"}
                        m={"auto"}
                        flexDir={"column"}
                        gap={4}
                    >
                        {awardsData.map((awardItem) => {
                            return (
                                <AchievementCards
                                    title={awardItem.title}
                                    associate={awardItem.associate}
                                    date={awardItem.date}
                                    description={awardItem.description}
                                    logo={awardItem.logo}
                                    logoSrc={awardItem.logoSrc}
                                />
                            );
                        })}
                    </Flex>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"} gap={6}>
                    <Heading fontSize={{base: "large", md: "2xl"}} color={"#00f2fe"}>Certification</Heading>
                    <Flex
                        w={"full"}
                        maxW={"750px"}
                        m={"auto"}
                        flexDir={"column"}
                        gap={4}
                    >
                        {certificateData.map((certificateItem) => {
                            return (
                                <AchievementCards
                                    title={certificateItem.title}
                                    associate={certificateItem.associate}
                                    date={certificateItem.date}
                                    description={certificateItem.description}
                                    logo={certificateItem.logo}
                                    logoSrc={certificateItem.logoSrc}
                                />
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        }/>
    );
}

export default Achievements;