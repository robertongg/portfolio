import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";
import HeroBanner from "./HeroBanner";

const Layout = () => {

    const pageHeight = (window.innerHeight - 57);
    
    return (
        <>
            <HeroBanner/>
            <Navbar/>
            <Box px={{base: 6, sm: 10}} py={{base: 4, sm: 6}} minH={pageHeight}>
                <Outlet />
            </Box>
            <Footer/>
        </>
    );
}

export default Layout;