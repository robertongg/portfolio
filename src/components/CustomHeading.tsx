import { Heading } from "@chakra-ui/react";

interface CustomHeadingProp {
    text: string,
    isSubheading?: boolean,
    isCenter?: boolean,
    noMargin?: boolean,
}

const CustomHeading = (property: CustomHeadingProp) => {
    const textAlign = property.isCenter !== true ? "left" : "center"

    if (property.isSubheading !== true) {
        return (
            <Heading color="#22495e" size="2xl" mb={property.noMargin ? 0 : {base: 4, md: 8}} textAlign={textAlign}>
                {property.text}
            </Heading>
        );
    } else {
        return (
            <Heading color="#438ea6" size="lg" mb={property.noMargin ? 0 : {base: 0.5, sm: 1, md: 2}} textAlign={textAlign}>
                {property.text}
            </Heading>
        );
    }
}

export default CustomHeading;