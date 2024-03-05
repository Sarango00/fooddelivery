"use client";
import { Box, Container, Stack } from "@mui/material";
import { FoodCat, FoodCreate } from "..";
import { FoodGrid } from "./FoodGrid";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { redirect, useRouter } from "next/navigation";

export const FoodGeneral = () => {
  const { user } = useContext(AuthContext);
  const [isAddedFood, setIsAddedFood] = useState(false);
  const [isImgUp, setIsImgUp] = useState(false);
  const [foodImgUrl, setFoodImgUrl] = useState("");
  const router = useRouter();

  if (user.role !== "admin") {
    redirect("/");
  }

  return (
    <Container sx={{ display: "flex", position: "relative" }}>
      <FoodCat></FoodCat>
      <FoodGrid
        isAddedFood={isAddedFood}
        setIsAddedFood={setIsAddedFood}
      ></FoodGrid>
      <FoodCreate
        isAddedFood={isAddedFood}
        setIsAddedFood={setIsAddedFood}
        isImgUp={isImgUp}
        setIsImgUp={setIsImgUp}
        foodImgUrl={foodImgUrl}
        setFoodImgUrl={setFoodImgUrl}
      ></FoodCreate>
    </Container>
  );
};
