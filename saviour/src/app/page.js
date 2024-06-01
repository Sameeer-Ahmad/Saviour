// app/page.js
import { Box, Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "../pages/Intro";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <main>
      <Box bg={"black"}>
        <Navbar />
        <Intro />
        <Footer/>
      </Box>
    </main>
  );
}
