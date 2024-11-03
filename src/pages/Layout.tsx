import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {

    const pageHeight = (window.innerHeight - 57);
    
    return (
        <>
            <Navbar></Navbar>
            <Box px={{base: 6, sm: 10}} py={{base: 4, sm: 6}} minH={pageHeight}>
                <Outlet />
            </Box>
            <Footer></Footer>
        </>
    );
}

export default Layout;