"use client";
import { Add, ArrowBackIos, Clear, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import Image from "next/image";
import { OrderDetailCard } from "..";
import { useRouter } from "next/navigation";

export const FoodInCart = () => {
  const { selectedFood, isFoodInCart, setIsFoodInCar, foodInCart } =
    useContext(AuthContext);

  const sum = foodInCart.reduce((total, num) => {
    const disPrice =
      num.food.foodPrice - (num.food.foodPrice * num.food.foodDisPer) / 100;

    if (num.food.foodDisPer) {
      return total + disPrice * num.quantity;
    }
    return total + num.food.foodPrice * num.quantity;
  }, 0);

  const router = useRouter();

  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      position={"absolute"}
      top={"0"}
      zIndex={1000}
      display={isFoodInCart ? "block" : "none"}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        onClick={() => setIsFoodInCar(false)}
      ></Box>
      <Stack
        width={"600px"}
        zIndex={1001}
        position={"absolute"}
        right={0}
        bgcolor={"white"}
        height={"100vh"}
      >
        <Container>
          <Box
            padding={"25px 0 35px 0"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <ArrowBackIos
              onClick={() => setIsFoodInCar(false)}
              sx={{ cursor: "pointer" }}
            ></ArrowBackIos>
            <Typography fontSize={20} fontWeight={900}>
              Таны сагс
            </Typography>
            <ArrowBackIos sx={{ color: "white" }}></ArrowBackIos>
          </Box>
          <Divider></Divider>
          {foodInCart.map((item) => {
            const disPrice =
              item.food.foodPrice -
              (item.food.foodPrice * item.food.foodDisPer) / 100;
            return (
              <Stack>
                <OrderDetailCard
                  src={item.food.foodImg}
                  label={item.food.foodName}
                  price={
                    item.food.foodDisPer
                      ? Intl.NumberFormat().format(disPrice * item.quantity)
                      : Intl.NumberFormat().format(
                          item.food.foodPrice * item.quantity
                        )
                  }
                  recipe={item.food.foodRecipe}
                  quantity={item.quantity}
                ></OrderDetailCard>
                <Divider></Divider>
              </Stack>
            );
          })}
        </Container>
        <Paper
          sx={{
            padding: "10px 32px 30px 32px",
            gap: "10px",
            display: "flex",
            justifyContent: "space-between",
            justifySelf: "flex-end",
          }}
        >
          <Stack sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Typography fontSize={18} fontWeight={400} color={"#5E6166"}>
              Нийт төлөх дүн
            </Typography>
            <Typography fontSize={18} fontWeight={700} color={"#121316"}>
              {Intl.NumberFormat().format(sum)} ₮
            </Typography>
          </Stack>
          <Button
            onClick={() => router.push("/OrderCheck")}
            sx={{
              textTransform: "none",
              padding: "8px 16px",
              flexGrow: 1,
              flexBasis: 0,
            }}
            variant="contained"
            disableElevation
          >
            Захиалах
          </Button>
        </Paper>
      </Stack>
    </Stack>
  );
};
