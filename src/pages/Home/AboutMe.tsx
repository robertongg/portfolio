import { Box, Text } from "@chakra-ui/react";
import CustomSection from "../../components/CustomSection";

const AboutMe = () => {
    const startDate = new Date(2023, 2);
    const currentDate = new Date();
    let experience = "";

    let difference = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    difference += currentDate.getMonth() - startDate.getMonth();

    if (difference < 12) {
        experience = `${difference.toString()} month` + (difference > 1 ? "s" : "");
    } else {
        const yearDifference = Math.floor(difference / 12);
        experience = `${yearDifference.toString()} year` + (yearDifference > 1 ? "s" : "");

        if (difference % 12 !== 0) {
            const monthDifference = difference % 12;
            experience += ` and ${monthDifference.toString()} month` + (monthDifference > 1 ? "s" : "");
        }
    }

    return (
        <CustomSection sectionID="aboutMe" sectionHeader="About Me" content={
            <Box textAlign={"center"} p={4} m={"auto"} maxW={"725px"} fontSize={{base: "smaller", md: "medium"}}>
                <Text>
                    <Text display={"inline"} color={"#00f2fe"}>Software Engineer</Text> with {experience} of experience
                    in <Text display={"inline"} color={"#00f2fe"}>Software Development</Text> and <Text display={"inline"} color={"#00f2fe"}>RPA Automation</Text>.
                    Based in Singapore with <Text display={"inline"} color={"#00f2fe"}>Singapore PR</Text> residential status.
                    Fluent in English, Mandarin, and Bahasa Indonesia.
                </Text>
            </Box>
        } />
    );
}

export default AboutMe;