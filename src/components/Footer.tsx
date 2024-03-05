import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Logo } from ".";

export const Footer = () => {
  const footerBar = [
    "Нүүр",
    "Холбоо барих",
    "Хоолны цэс",
    "Үйлчилгээний нөхцөл",
    "Хүргэлтийн бүс",
    "Нууцлалын бодлого",
  ];

  const icons = ["/facebook.png", "/instagram.png", "/twitter.png"];
  return (
    <Stack
      bgcolor={"primary.main"}
      position="relative"
      sx={{
        backgroundImage: "url(footer.png)",
      }}
    >
      <Container sx={{ marginTop: "114px", marginBottom: "40px" }}>
        <Stack gap={"40px"}>
          <Box display={"flex"} gap={1} justifyContent={"center"}>
            <Logo fill="white"></Logo>
            <Typography
              fontSize={20}
              fontWeight={700}
              color={"primary.contrastText"}
            >
              Food Delivery
            </Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            {footerBar.map((item) => (
              <Link href="#" color="inherit">
                {item}
              </Link>
            ))}
          </Box>
          <Box display={"flex"} gap={"18px"} justifyContent={"center"}>
            {icons.map((item) => {
              return (
                <Link href="#">
                  <Image
                    width={35}
                    height={40}
                    src={item}
                    alt="social-icon"
                  ></Image>
                </Link>
              );
            })}
          </Box>
          <Divider sx={{ bgcolor: "primary.contrastText" }}></Divider>
          <Box>
            <Stack alignItems={"center"}>
              <Typography
                color={"primary.contrastText"}
                fontSize={16}
                fontWeight={400}
              >
                © 2024 Pinecone Foods LLC{" "}
              </Typography>
              <Typography
                color={"primary.contrastText"}
                fontSize={16}
                fontWeight={400}
              >
                Зохиогчийн эрх хуулиар хамгаалагдсан.
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
