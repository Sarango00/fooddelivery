"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { FoodInCart, MenuCard, NotFound, OrderDetail } from "..";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";

export const MenuSelect = () => {
  const {
    categories,
    userCatActive,
    setUserCatActive,
    allFoods,
    searchValue,
    isSelectedFood,
    setIsSelectedFood,
    selectedFood,
    setSelectedFood,
  } = useContext(AuthContext);

  const router = useRouter();

  const searchFiltered = allFoods.filter((item) =>
    item.foodName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const categoryFiltered = allFoods.filter(
    (item) => item.foodCat == userCatActive
  );

  return (
    <>
      <Container sx={{ mb: "86px", position: "relative" }}>
        <Grid
          sx={{ justifyContent: "center" }}
          container
          spacing={"26px"}
          padding={"32px 0px"}
        >
          {searchValue.length ? (
            <Typography
              sx={{
                color: "primary.main",
                padding: "8px 16px",
              }}
            >
              Хайлт
            </Typography>
          ) : (
            categories.map((item) => {
              return (
                <Grid item xs={12} md={4} lg={3}>
                  <Card
                    variant="outlined"
                    sx={{
                      width: "100%",
                      boxShadow: 0,
                      padding: "8px 16px",
                      textAlign: "center",
                      borderRadius: "16px",
                      cursor: "pointer",
                      bgcolor:
                        userCatActive == item.category
                          ? "primary.main"
                          : "white",
                      color: userCatActive == item.category ? "white" : "black",
                    }}
                    onClick={() => setUserCatActive(item.category)}
                  >
                    {item.category}
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
        <Grid container>
          {searchValue.length ? (
            searchFiltered.length ? (
              searchFiltered.map((item) => {
                const foodDisPrice =
                  item.foodPrice - (item.foodPrice * item.foodDisPer) / 100;
                return (
                  <Grid item>
                    <MenuCard
                      image={item.foodImg}
                      discount={item.foodDisPer}
                      label={item.foodName}
                      disPrice={foodDisPrice}
                      price={item.foodPrice}
                      onClick={() => {
                        const food = allFoods.find(
                          (food) => food._id === item._id
                        );

                        if (food) {
                          setSelectedFood(food);
                        }
                      }}
                    ></MenuCard>
                  </Grid>
                );
              })
            ) : (
              <Grid item lg={12}>
                <NotFound></NotFound>
              </Grid>
            )
          ) : categoryFiltered.length ? (
            categoryFiltered.map((item) => {
              const foodDisPrice =
                item.foodPrice - (item.foodPrice * item.foodDisPer) / 100;
              return (
                <Grid onClick={() => setIsSelectedFood(true)} item>
                  <MenuCard
                    image={item.foodImg}
                    discount={item.foodDisPer}
                    label={item.foodName}
                    disPrice={foodDisPrice}
                    price={item.foodPrice}
                    onClick={() => {
                      const food = allFoods.find(
                        (food) => food._id === item._id
                      );

                      if (food) {
                        setSelectedFood(food);
                      }
                    }}
                  ></MenuCard>
                </Grid>
              );
            })
          ) : (
            <Grid item lg={12}>
              <NotFound></NotFound>
            </Grid>
          )}
        </Grid>
      </Container>
      <OrderDetail></OrderDetail>
      <FoodInCart></FoodInCart>
    </>
  );
};
