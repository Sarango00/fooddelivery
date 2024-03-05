"use client";
import { Box, Container, Stack, Typography, Link } from "@mui/material";
import Image from "next/image";
import { CustomInput, Logo } from ".";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "./Providers/Authprovider";

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  const router = useRouter();
  const {
    isLogged,
    user,
    searchValue,
    setSearchValue,
    isFoodInCart,
    setIsFoodInCar,
  } = useContext(AuthContext);

  const {} = props;
  const navBar = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
  const navMenu = [
    { icon: "/sags.png", text: user.role === "admin" ? "Меню үүсгэх" : "Сагс" },
    {
      icon: "/icon.png",
      text: !isLogged ? "Нэвтрэх" : user.userName,
    },
  ];

  return (
    <Container>
      <Box
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        padding={"8px 24px"}
        width={"100%"}
      >
        <Box
          alignItems={"center"}
          display={"flex"}
          gap={"24px"}
          justifyContent={"space-between"}
        >
          <Box sx={{ cursor: "pointer" }} onClick={() => router.push("./")}>
            <Logo fill={"black"}></Logo>
          </Box>
          <Box display={"flex"} gap={"8px"} justifyContent={"space-between"}>
            {navBar.map((item) => (
              <Link
                onClick={() => {
                  if (item == "НҮҮР") router.push("./");
                  if (item == "ХООЛНЫ ЦЭС") router.push("MenuPage");
                  if (item == "ХҮРГЭЛТИЙН БҮС") router.push("FooterInfo");
                }}
                underline="none"
              >
                <Typography
                  color={"#000000"}
                  sx={{
                    "&:hover": { color: "primary.main" },
                    cursor: "pointer",
                  }}
                  textAlign={"center"}
                  padding={"8px 16px"}
                  fontSize={"14px"}
                  fontWeight={700}
                >
                  {item}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={1}
        >
          <CustomInput
            type="search"
            placeholder="Хайх"
            onClick={() => router.push(`MenuPage`)}
            onChange={(event) => setSearchValue(event.target.value)}
          ></CustomInput>
          <Box gap={1} display={"flex"}>
            {navMenu.map((item) => (
              <Box
                sx={{ cursor: "pointer" }}
                display={"flex"}
                padding={"8px 16px"}
                gap={1}
              >
                <Image src={item.icon} alt="icon" width={24} height={24} />
                <Link
                  onClick={() => {
                    if (item.text == "Сагс") setIsFoodInCar(true);
                    if (item.text == "Меню үүсгэх") router.push(`CreateFood`);
                    if (item.text == "Нэвтрэх") router.push(`LoginPage`);
                    if (item.text == user.userName) router.push("/UserProPage");
                  }}
                  underline="none"
                  color={"inherit"}
                >
                  <Typography
                    sx={{ "&:hover": { color: "primary.main" } }}
                    fontSize={14}
                    fontWeight={700}
                  >
                    {item.text}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
