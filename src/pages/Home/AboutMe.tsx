import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobeAsiaAustralia, BsBriefcase } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import CustomHeading from "../../components/CustomHeading";
import { IAboutMe } from "../../objects/ObjectsInterface";

interface AboutMeItemProp {
    icon: IconType | null,
    header: string,
    text: string
}

const AboutMeItem = (property: AboutMeItemProp) => {
    return (
        <Flex position="relative" alignItems="center" w="full" maxW={360}>
            {!property.icon ? null :
                <Icon
                    as={property.icon}
                    color="#438ea6"
                    opacity="0.3"
                    fontSize="9xl"
                    position="relative"
                    zIndex={-1}
                />
            }
            <Heading
                color="#438ea6"
                position="absolute"
                left={36}
                mt={-16}
                size={{base: "lg", md: "xl"}}
            >
                {property.header}
            </Heading>
            <Box position="relative" w="calc(100% - 8rem)">
                <Text position="absolute" left={{base: 12, sm: 16}}>
                    {property.text}
                </Text>
            </Box>
        </Flex>
    );
}

const AboutMe = () => {
    const aboutMeData: IAboutMe[] = require("../../objects/aboutMe.json").$schema;

    return (
        <>
            <CustomHeading text="About Me" isCenter></CustomHeading>
            <Flex columnGap={24} rowGap={12} flexWrap="wrap" w="full" justifyContent="center" maxW={1000} m="auto">
                {aboutMeData.map((data) => {
                    var icon = null;
                    var text = data.text;

                    switch(data.header) {
                        case "NATIONALITY": icon = BsGlobeAsiaAustralia; break;
                        case "LANGUAGE": icon = IoLanguage; break;
                        case "AGE":
                            icon = LiaBirthdayCakeSolid;
                            text = text.replace("{0}", ((new Date()).getFullYear() - 2000).toString())
                            break;
                        case "EXPERIENCE":
                            var startDate = new Date(2023, 2);
                            var currentDate = new Date();
                            var experience = "";

                            var difference = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
                            difference += currentDate.getMonth() - startDate.getMonth();

                            if (difference < 12) {
                                experience = `${difference.toString()} month` + (difference > 1 ? "s" : "");
                            } else {
                                var yearDifference = Math.floor(difference / 12);
                                experience = `${yearDifference.toString()} year` + (yearDifference > 1 ? "s" : "");

                                if (difference % 12 !== 0) {
                                    var monthDifference = difference % 12;
                                    experience += ` and ${monthDifference.toString()} month` + (monthDifference > 1 ? "s" : "");
                                }
                            }

                            icon = BsBriefcase;
                            text = text.replace("{0}", experience);
                            break;
                    }

                    return (
                        <AboutMeItem icon={icon} header={data.header} text={text}></AboutMeItem>
                    )
                })}
            </Flex>
        </>
    );
}

export default AboutMe;