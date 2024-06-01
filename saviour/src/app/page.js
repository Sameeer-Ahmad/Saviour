// app/page.js
import { Box, Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main>
      <Box bg={"black"}>
        <Navbar />
        <Intro />
      </Box>
    </main>
  );
}
