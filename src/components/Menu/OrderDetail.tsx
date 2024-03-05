"use client";
import { Add, Clear, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const OrderDetail = () => {
  const {
    isSelectedFood,
    setIsSelectedFood,
    allFoods,
    selectedFood,
    setSelectedFood,
    isFoodInCart,
    setIsFoodInCar,
    foodInCart,
    setFoodInCart,
    addFoodToCart,
  } = useContext(AuthContext);
  const [quant, setQuant] = useState(1);



  const addQuant = () => {
    const max = 10;

    if (quant < max) setQuant(quant + 1);
  };

  const minusQuant = () => {
    const min = 1;

    if (quant > min) setQuant(quant - 1);
  };

  return (
    <Stack
      width={"1400px"}
      height={"100vh"}
      position={"absolute"}
      top={0}
      zIndex={1000}
      display={isSelectedFood ? "block" : "none"}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        zIndex={0}
        onClick={() => {
          setIsSelectedFood(false);
          setSelectedFood({});
        }}
      ></Box>
      <Container
        sx={{
          display: "flex",
          width: "60%",
          bgcolor: "#FFFFFF",
          borderRadius: "16px",
          padding: "32px",
          gap: "32px",
          zIndex: "1000",
          position: "absolute",
          top: "10%",
          right: "10%",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}>
          <Image
            src={selectedFood.foodImg}
            alt="order image"
            width={450}
            height={450}
          ></Image>
        </Box>
        <Stack gap={"32px"} sx={{ display: "flex", flexGrow: 1, flexBasis: 0 }}>
          <Box
            sx={{ display: "flex", justifyContent: "end" }}
            onClick={() => {
              setIsSelectedFood(false);
              setSelectedFood({});
            }}
          >
            <IconButton
              sx={{
                width: "24px",
                height: "24px",
                justifySelf: "flex-end",
              }}
            >
              <Clear></Clear>
            </IconButton>
          </Box>
          <Stack gap={"2px"}>
            <Typography fontSize={28} fontWeight={700} color={"#000000"}>
              {selectedFood.foodName}
            </Typography>
            <Typography fontSize={18} fontWeight={600} color={"primary.main"}>
              {!selectedFood.foodDisPer
                ? selectedFood.foodPrice
                : selectedFood.foodPrice -
                  (selectedFood.foodPrice * selectedFood.foodDisPer) / 100}{" "}
              ₮
            </Typography>
          </Stack>
          <Box>
            <Typography fontSize={18} fontWeight={600} color={"#000000"}>
              Орц
            </Typography>
            <Typography
              padding={"8px"}
              sx={{ borderRadius: "8px", bgcolor: "#F6F6F6" }}
              fontSize={16}
              fontWeight={400}
              color={"#767676"}
            >
              {selectedFood.foodRecipe}
            </Typography>
          </Box>
          <Typography fontSize={18} fontWeight={600} color={"#000000"}>
            Тоо
          </Typography>
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
              onClick={minusQuant}
            >
              <Remove></Remove>
            </Button>
            <Typography>{quant}</Typography>
            <Button
              sx={{
                bgcolor: "primary.main",
                width: "45px",
                height: "40px",
                padding: "0px 30px",
                color: "white",
              }}
              onClick={addQuant}
            >
              <Add></Add>
            </Button>
          </Box>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              addFoodToCart(selectedFood, quant);
              setIsSelectedFood(false);
              setQuant(1);
            }}
          >
            Сагслах
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
