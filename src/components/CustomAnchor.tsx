import { Box } from "@chakra-ui/react";

interface CustomAnchorProp {
    id: string
}

const CustomAnchor = (property: CustomAnchorProp) => {
    return (
        <Box id={property.id} mb={20}></Box>
    );
}

export default CustomAnchor;