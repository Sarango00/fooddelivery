"use client";
import { MoreVert } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { AllFoods, FoodList } from "..";
import { Dispatch, SetStateAction, useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

export type FoodGridParams = {
  isAddedFood: boolean;
  setIsAddedFood: Dispatch<SetStateAction<boolean>>;
  allFoods: AllFoods[];
  setAllFoods: Dispatch<SetStateAction<AllFoods[]>>;
};

export const FoodGrid = (props: FoodGridParams) => {
  const { active } = useContext(AuthContext);
  const { isAddedFood, setIsAddedFood, allFoods, setAllFoods } = props;
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        bgcolor: "#F7F7F8",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        py={"16px"}
        mt={"60px"}
        mb={"80px"}
      >
        <Typography fontSize={"22px"} fontWeight={700} color={"#272727"}>
          {active}
        </Typography>
        <Box
          padding={"8px 16px"}
          sx={{
            borderRadius: "4px",
            cursor: "pointer",
            bgcolor: "#18BA51",
          }}
          onClick={() => setIsAddedFood(true)}
        >
          <Typography fontSize={"16x"} fontWeight={400} color={"#FFFFFF"}>
            Add new food
          </Typography>
        </Box>
      </Box>
      <FoodList
        allFoods={allFoods}
        setAllFoods={setAllFoods}
        isAddedFood={isAddedFood}
        setIsAddedFood={setIsAddedFood}
      ></FoodList>
    </Container>
  );
};
