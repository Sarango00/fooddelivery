"use client";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { FoodCatComp, FoodCreateModal } from "..";
import { api } from "@/common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const FoodCat = () => {
  const { setActive, setIsCatShown, categories } = useContext(AuthContext);

  return (
    <Container sx={{ width: "400px", height: "100vh" }}>
      <Stack gap={"40px"} mt={"60px"}>
        <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
          Food menu
        </Typography>
        <Stack gap={"26px"}>
          {categories.map((item) => (
            <FoodCatComp
              item={item.category}
              onClick={() => {
                setActive(item.category);
              }}
            ></FoodCatComp>
          ))}
          <Box
            padding={"8px 16px"}
            sx={{
              border: "1px solid #D6D8DB",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#5E6166",
              "&:hover": { color: "#FFFFFF", bgcolor: "primary.main" },
            }}
          >
            <Box
              onClick={() => setIsCatShown(true)}
              display={"flex"}
              gap={"8px"}
              alignItems={"center"}
            >
              <Add></Add>
              <Typography fontSize={"18px"} fontWeight={500}>
                Create new catergory
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Stack>
      <FoodCreateModal></FoodCreateModal>
      
    </Container>
  );
};
