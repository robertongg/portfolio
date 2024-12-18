import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import CustomHeading from "../../components/CustomHeading";
import CustomSpacer from "../../components/CustomSpacer";
import { IAchievements } from "../../objects/ObjectsInterface";

const AchievementCards = (property: IAchievements) => {
    const logoImage = property.logoSrc;

    const cardsWidth = {
        base: "full",
        sm: "calc((100% - 1rem) / 2)",
        md: "calc((100% - 2rem) / 3)",
        lg: "calc((100% - 3rem) / 3)",
        xl: "calc((100% - 4rem) / 3)"
    }

    return (
        <Flex w={cardsWidth} flexDirection="column" textAlign="center" gap={{base: 2, sm: 1}}>
            {logoImage ? <Image objectFit="contain" w="full" h={16} src={logoImage} alt={property.logo} mt={4} mb={8} /> : null}
            <Heading w="full" size={{base: "sm", sm: "xs"}}>{property.title}</Heading>
            <Text w="full" fontSize={{base: "sm", sm: "xs"}}>{property.date}</Text>
            {property.description ? <Text w="full" fontSize="xs" color="gray">{property.description}</Text> : null}
        </Flex>
    );
}

const Achievements = () => {
    const awardsData: IAchievements[] = require("../../objects/awards.json").$schema;
    const certificateData: IAchievements[] = require("../../objects/certificate.json").$schema;

    return (
        <>
            <CustomHeading text="My Achievements" isCenter></CustomHeading>

            <Flex flexDirection="column" gap={4}>
                <CustomHeading text="Awards" isSubheading isCenter></CustomHeading>
                <Flex columnGap={4} rowGap={8} flexWrap="wrap" justifyContent="center">
                    {awardsData.map(data => AchievementCards(data))}
                </Flex>
            </Flex>

            <CustomSpacer size={16} />

            <Flex flexDirection="column" gap={4}>
                <CustomHeading text="Certification" isSubheading isCenter></CustomHeading>
                <Flex columnGap={4} rowGap={8} flexWrap="wrap" justifyContent="center">
                    {certificateData.map(data => AchievementCards(data))}
                </Flex>
            </Flex>
        </>
    );
}

export default Achievements;