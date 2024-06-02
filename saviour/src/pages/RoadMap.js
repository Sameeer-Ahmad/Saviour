"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function RoadMap() {
  return (
   <Box p={16}>
     <Box
    width={250}
    height={224}
      borderRadius={"13px"}
      boxShadow="0 0 0 2px rgba(237, 1, 55, 1), 0 0 0 2px rgba(239, 73, 15, 1)"
    >
      <Image
        src="https://s3-alpha-sig.figma.com/img/4b01/5d0d/f2954eaf00df1cee6eb3039a08679aa7?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hltJ8oxKc-BHNm~Ai2b3llLxsNkFOxJmnAsCjAs2dVQTC91LuaozbEVZk8krh1gGoubBurKUCjXF7-Bzo1TeYPn60cHSJTnQwXr3ctXW89XfIy6ncCKqCx9Yaej9iMsiO~LP5u6V5cjmKAGLQW1pHU1FrvRPuaLUwKyW28b6vU2lo~PXgJgsPEu0EJa-y9X3pOvfY64HrO9OhHX1IyJZAG7urzn1nwrfVXSAFiaMiu-juyPaVaWyfQFod9wmqa3e3KXEV3PKQgBAK1GlTj3NRwEFbk647tIt3SqBJQRU3x-xZ1026IwKemFWA2ytyUEuoVgcvsqsJVCYe2cC~puDQA__"
        alt="Saviour"
        width={220}
        height={680}
        borderRadius={"13px"}
        
      />
    </Box>
   </Box>
  );
}

export default RoadMap;
