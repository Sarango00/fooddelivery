import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Stack>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "250px",
          mb: "200px",
        }}
      >
        <Image
          src={"/notfound.png"}
          alt="not found"
          width={133}
          height={133}
        ></Image>
        <Typography fontSize={14} color={"#8B8E95"}>
          Уучлаарай илэрц олдсонгүй...
        </Typography>
      </Container>
    </Stack>
  );
};
