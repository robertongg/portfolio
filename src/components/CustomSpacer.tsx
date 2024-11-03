import { Box } from "@chakra-ui/react";

interface CustomSpacerProp {
    size?: number
}

const CustomSpacer = (property: CustomSpacerProp) => {
    const size = property.size ? (property.size > 0 ? property.size : 1) : 1;

    return (
        <Box mb={size}></Box>
    );
}

export default CustomSpacer;