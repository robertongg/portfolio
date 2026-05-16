import { Flex, Heading, Tag } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";
import { ISkills } from "../../objects/ObjectsInterface";

const Skills = () => {
    const skillsData: ISkills[] = require("../../objects/skills.json").$schema;

    return (
        <CustomSection sectionID="skills" sectionHeader="Skills" content={
            <Flex flexDir={"column"} w={"full"} maxW={"800px"} m={"auto"} gap={10}>
                {skillsData.map((skillsCategory) => {
                    return (
                        <Flex flexDir={"column"} alignItems={"center"} gap={6}>
                            <Heading fontSize={{base: "large", md: "2xl"}} color={"#00f2fe"}>{skillsCategory.category}</Heading>
                            <Flex gap={4} flexWrap={"wrap"} justifyContent={"center"}>
                                {skillsCategory.items.map((skillItem) => {
                                    return (
                                        <Tag
                                            px={6}
                                            py={3}
                                            borderRadius={"full"}
                                            bg={"rgba(255,255,255,0.06)"}
                                            border={"1px solid rgba(255,255,255,0.08)"}
                                            color={"#fff"}
                                            fontSize={{base: "xs", md: "smaller"}}
                                            fontWeight={"normal"}
                                            transition={"0.3s ease"}
                                            _hover={{
                                                transform: "translateY(-4px)",
                                                borderColor: "rgba(0,242,254,0.4)",
                                                boxShadow: "0 8px 18px rgba(0,242,254,0.15)"
                                            }}
                                        >
                                            {skillItem}
                                        </Tag>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        }
        />
    );
}

export default Skills;