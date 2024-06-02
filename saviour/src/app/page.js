// app/page.js
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "../pages/Intro";
import Footer from "@/pages/Footer";
import RoadMap from "@/pages/RoadMap";
import QusAns from "@/pages/f&q";
import Tokenomic from "@/pages/Tokenomic";
import IDO from "@/pages/IDO";

export default function Home() {
  return (
    <main>
      <Box bg={"black"}>
        <Navbar />
        <Intro />
        <IDO/>
        <Tokenomic/>
        <RoadMap/>
        <QusAns/>
        <Footer/>
      </Box>
    </main>
  );
}
