import { Box } from "@mui/material";
import Image from "next/image";
import { relative } from "path";

export const DeliveryArea = () => {
  return (
    <Box position={"relative"} width={"100%"} pt="50%">
      <Image src="/area.png" alt="delivery area" fill></Image>
    </Box>
  );
};
