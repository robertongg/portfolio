import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomSectionProp {
    content: ReactNode,
    sectionID?: string,
    sectionHeader: string
}

const CustomSection = (property: CustomSectionProp) => {
    return (
        <Box
            id={property.sectionID ? property.sectionID : undefined}
            px={8}
            pt={{base: 20, md: 28}}
        >
            <Box m={"auto"} w={"full"} maxW={"8xl"}>
                <Heading
                    fontSize={{base: "2xl", md: "3xl"}}
                    mb={{base: 4, md: 6}}
                    textAlign={"center"}
                >
                    {property.sectionHeader}
                </Heading>
                {property.content}
            </Box>
        </Box>
    );
}

export default CustomSection;