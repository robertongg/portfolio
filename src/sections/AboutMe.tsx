import { Box, Card, CardBody, Flex, Heading, Icon, ScaleFade, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { BsGlobeAsiaAustralia, BsBriefcase } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import CustomHeading from "../components/CustomHeading";
import { IAboutMe } from "../objects/ObjectsInterface";

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

export default AboutMe;