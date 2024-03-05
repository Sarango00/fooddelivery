"use client";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import Image from "next/image";
import { MenuCard } from "..";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useRouter } from "next/navigation";

export const HomeMenuCards = () => {
  const { allFoods, categories } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Container sx={{ mb: "82px" }}>
      <Stack gap={"80px"}>
        {categories.map((cat) => {
          return (
            <Stack gap={"24px"}>
              <Box
                display={"flex"}
                gap={"24px"}
                padding={"16px 0px"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                  <Image src="/star.png" alt="icon" width={32} height={32} />
                  <Typography
                    color={"#272727"}
                    fontSize={"22px"}
                    fontWeight={700}
                  >
                    {cat.category}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  gap={"5px"}
                  alignItems={"center"}
                  color={"primary.main"}
                  sx={{ cursor: "pointer" }}
                >
                  <Typography onClick={() => router.push("MenuPage")}>
                    Бүгдийг харах
                  </Typography>
                  <ArrowForwardIos />
                </Box>
              </Box>

              <Grid container spacing={2}>
                {allFoods
                  .filter((food) => food.foodCat === cat.category)
                  .slice(0, 4)
                  .map((item, index) => {
                    const foodDisPrice =
                      item.foodPrice - (item.foodPrice * item.foodDisPer) / 100;
                    return (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <MenuCard
                          image={item.foodImg}
                          discount={item.foodDisPer}
                          label={item.foodName}
                          disPrice={foodDisPrice}
                          price={item.foodPrice}
                        ></MenuCard>
                      </Grid>
                    );
                  })}
              </Grid>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};
