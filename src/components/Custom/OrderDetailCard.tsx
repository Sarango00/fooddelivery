"use client";
import { Add, Clear, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextFieldProps,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";

type OrderDetailCardProps = {
  src: string;
  label: string;
  price: number;
  recipe: string;
  quantity: number;
};

export const OrderDetailCard = (props: OrderDetailCardProps) => {
  const { src, label, price, recipe, quantity } = props;
  const { foodInCart, addQuantInCart, lessQuantInCart, removeFoodInCart } =
    useContext(AuthContext);

  return (
    <Container sx={{ display: "flex", padding: "30px 0" }}>
      <Box sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}>
        <Image src={src} alt="order image" width={245} height={150}></Image>
      </Box>
      <Stack gap={"8px"} sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack gap={"2px"}>
            <Typography fontSize={18} fontWeight={600} color={"#000000"}>
              {label}
            </Typography>
            <Typography fontSize={18} fontWeight={600} color={"primary.main"}>
              {price} ₮
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton
              onClick={() => removeFoodInCart(label)}
              sx={{
                width: "24px",
                height: "24px",
                justifySelf: "flex-end",
              }}
            >
              <Clear></Clear>
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography
            padding={"8px"}
            sx={{ borderRadius: "8px" }}
            fontSize={16}
            fontWeight={400}
            color={"#767676"}
          >
            {recipe}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              bgcolor: "primary.main",
              width: "45px",
              height: "40px",
              padding: "0px 30px",
              color: "white",
            }}
            onClick={() => lessQuantInCart(label)}
          >
            <Remove></Remove>
          </Button>
          <Typography>{quantity}</Typography>
          <Button
            sx={{
              bgcolor: "primary.main",
              width: "45px",
              height: "40px",
              padding: "0px 30px",
              color: "white",
            }}
            onClick={() => {
              addQuantInCart(label);
            }}
          >
            <Add></Add>
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
