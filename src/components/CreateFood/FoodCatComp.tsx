"use client";
import { Add, Delete, Edit, MoreVert } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { MouseEventHandler, useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { FoodCreateModal } from "..";

type FoodCatCompProps = {
  item: String;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const FoodCatComp = (props: FoodCatCompProps) => {
  const { item, onClick } = props;
  const { active } = useContext(AuthContext);

  const editCat = [
    { icon: <Edit></Edit>, label: "Edit name" },
    { icon: <Delete></Delete>, label: "Delete Category" },
  ];

  const [isCatEdited, setIsCatEdited] = useState(false);

  return (
    <Box
      onClick={onClick}
      display={"flex"}
      position={"relative"}
      sx={{
        color: active == item ? "#FFFFFF" : "#000000",
      }}
    >
      <Box
        padding={"8px 16px"}
        sx={{
          border: "1px solid #D6D8DB",
          bgcolor: active == item ? "primary.main" : "none",
          color: active == item ? "#FFFFFF" : "#000000",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
          "&:hover": { color: "#FFFFFF", bgcolor: "primary.main" },
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography fontSize={"18px"} fontWeight={500}>
            {item}
          </Typography>
          <IconButton
            sx={{
              padding: "0px",
            }}
            onClick={() => {
              setIsCatEdited((prev) => !prev);
            }}
          >
            <MoreVert
              sx={{
                color: active == item ? "#FFFFFF" : "1C1B1F",
                "&:hover": { color: "#FFFFFF" },
              }}
            ></MoreVert>
          </IconButton>
        </Box>
      </Box>

      <Stack
        borderRadius={"4px"}
        display={"block"}
        position={"absolute"}
        right={"-200px"}
        bgcolor={"#FFFFFF"}
      >
        {editCat.map((item) => {
          return (
            <Box
              display={isCatEdited ? "flex" : "none"}
              padding={"8px 16px"}
              gap={"16px"}
              color={"#161616"}
              sx={{ "&:hover": { color: "red" }, cursor: "pointer" }}
            >
              {item.icon}
              <Typography
                fontSize={"16px"}
                fontWeight={500}
                sx={{ width: "120px" }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
