import { Flex, Image, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

import CustomHeading from "../../components/CustomHeading";
import { ISkillItems, ISkills } from "../../objects/ObjectsInterface";

const SkillItem = (property: ISkillItems) => {
    const [isOpen, setOpen] = useState(false);
    const logoImage = property.logoSrc;

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
    const skillsData: ISkills[] = require("../../objects/skills.json").$schema;

    return (
        <>
            <CustomHeading text="My Skills" isCenter></CustomHeading>
            <Flex gap={8} flexDirection="column">
                {skillsData.map(data => SkillCategory(data))}
            </Flex>
        </>
    );
}

export default Skills;