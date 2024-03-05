"use client";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const OrderCheck2FoodList = () => {
  const { foodInCart } = useContext(AuthContext);

  const sum = foodInCart.reduce((total, num) => {
    const disPrice =
      num.food.foodPrice - (num.food.foodPrice * num.food.foodDisPer) / 100;

    if (num.food.foodDisPer) {
      return total + disPrice * num.quantity;
    }
    return total + num.food.foodPrice * num.quantity;
  }, 0);

  return (
    <Stack gap={"16px"}>
      <Divider></Divider>
      {foodInCart.map((item) => {
        const disPrice =
          item.food.foodPrice -
          (item.food.foodPrice * item.food.foodDisPer) / 100;
        return (
          <Stack gap={"16px"}>
            <Box display={"flex"}>
              <Box sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}>
                <Image
                  src="/order.png"
                  alt="order image"
                  width={180}
                  height={120}
                ></Image>
              </Box>
              <Stack
                gap={"8px"}
                sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Stack gap={"2px"}>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      {item.food.foodName}
                    </Typography>
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                      color={"primary.main"}
                    >
                      {item.food.foodDisPer
                        ? Intl.NumberFormat().format(disPrice * item.quantity)
                        : Intl.NumberFormat().format(
                            item.food.foodPrice * item.quantity
                          )}{" "}
                      ₮
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography
                    padding={"8px"}
                    sx={{ borderRadius: "8px" }}
                    fontSize={16}
                    fontWeight={400}
                    color={"#767676"}
                  >
                    {item.food.foodRecipe}
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Divider></Divider>
          </Stack>
        );
      })}

      <Box
        sx={{
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
      </Box>
    </Stack>
  );
};
