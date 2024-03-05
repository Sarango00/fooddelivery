import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { url } from "inspector";
import Image from "next/image";

export const HomeSlide = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        backgroundImage: "url(footer.png)",
        marginBottom: "122px",
      }}
    >
      <Container
        sx={{
          display: "flex",

          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack
          width={"40%"}
          gap={"23px"}
          marginTop={"280px"}
          marginBottom={"280px"}
        >
          <Typography
            color={"primary.contrastText"}
            fontWeight={600}
            fontSize={"55px"}
            lineHeight={"50px"}
          >
            Pinecone Food delivery
          </Typography>
          <Divider sx={{ backgroundColor: "primary.contrastText" }}></Divider>
          <Typography
            width={"80%"}
            color={"primary.contrastText"}
            fontWeight={700}
            fontSize={"22px"}
            lineHeight={"26px"}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Box>
          <Image
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              top: "170px",
            }}
            src="/food1.png"
            alt="food"
            width={443}
            height={438}
          ></Image>
          <Image
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              top: "283px",
            }}
            src="/food2.png"
            alt="food"
            width={313}
            height={313}
          ></Image>
        </Box>
      </Container>
    </Box>
  );
};
