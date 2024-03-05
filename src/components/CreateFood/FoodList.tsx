"use client";
import { Add, SettingsBackupRestore } from "@mui/icons-material";
import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AllFoods, MenuCard } from "..";
import { api } from "@/common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/Authprovider";
import Link from "next/link";

export type FoodListParams = {
  isAddedFood: boolean;
  setIsAddedFood: Dispatch<SetStateAction<boolean>>;
  allFoods: AllFoods[];
  setAllFoods: Dispatch<SetStateAction<AllFoods[]>>;
};

export const FoodList = (props: FoodListParams) => {
  const { isAddedFood, setIsAddedFood } = props;
  const { refresh, active, allFoods, setAllFoods } = useContext(AuthContext);

  const filteredFood = allFoods.filter((item) => item.foodCat == active);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      {filteredFood.length ? (
        <Grid spacing={10} container>
          {filteredFood.map((item) => {
            const disPrice =
              item.foodPrice - (item.foodPrice * item.foodDisPer) / 100;
            return (
              <Grid style={{ paddingTop: "0px" }} item xs={12} md={6} lg={4}>
                <MenuCard
                  image={item.foodImg}
                  discount={item.foodDisPer}
                  label={item.foodName}
                  disPrice={disPrice}
                  price={item.foodPrice}
                ></MenuCard>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Stack alignItems={"center"} gap={"30px"}>
          <Add
            sx={{
              color: "primary.main",
              width: "80px",
              height: "80px",
              cursor: "pointer",
            }}
            onClick={() => setIsAddedFood(true)}
          ></Add>
          <Typography fontSize={"16px"} fontWeight={400} color={"#808080"}>
            Уучлаарай, Таны меню хоосон байна.
          </Typography>
        </Stack>
      )}
    </Container>
  );
};
