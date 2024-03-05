"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const Logout = () => {
  const exit = ["Тийм", "Үгүй"];
  const { isShown, setIsShown, logout } = useContext(AuthContext);

  return (
    <Stack
      position={"absolute"}
      width={"100vw"}
      height={"100vh"}
      zIndex={9}
      display={isShown ? "flex" : "none"}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        zIndex={0}
        onClick={() => setIsShown(false)}
      ></Box>
      <Container
        sx={{
          mt: "200px",
          mb: "200px",
          display: "flex",
          justifyContent: "center",
          zIndex: "1",
          width: "380px",
        }}
      >
        <Stack
          bgcolor={"white"}
          borderRadius={"20px"}
          height={"220px"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              fontSize={20}
              fontWeight={600}
              textAlign={"center"}
              mt={"40px"}
              paddingX={"25px"}
            >
              Та системээс гарахдаа итгэлтэй байна уу?
            </Typography>
          </Box>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{
              height: "60px",
              borderRadius: "0px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            {exit.map((item, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    flexGrow: "1",
                    borderRadius: "0px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    bgcolor: "#18BA5133",
                    color: "#373737",
                    fontWeight: "600",
                    fontSize: "20px",
                    "&:hover": { color: "white", bgcolor: "primary.main" },
                  }}
                  onClick={() => {
                    item == "Үгүй" && setIsShown(false);
                    item == "Тийм" && logout();
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </ButtonGroup>
        </Stack>
      </Container>
    </Stack>
  );
};
