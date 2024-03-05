"use client";
import { Clear } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { CustomInput, FoodImgUp } from "..";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { isObject, useFormik } from "formik";
import * as yup from "yup";
import { api } from "@/common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Image from "next/image";

export type FoodCreateParams = {
  category: string;
  isAddedFood: boolean;
  setIsAddedFood: Dispatch<SetStateAction<boolean>>;
  isImgUp: boolean;
  setIsImgUp: Dispatch<SetStateAction<boolean>>;
  foodImgUrl: string;
  setFoodImgUrl: Dispatch<SetStateAction<string>>;
  foodName: string;
  foodCat: string;
  foodRecipe: string;
  foodPrice: number;
  foodDiscount?: boolean;
  foodDisPer?: number;
  foodImg: string;
};

type createFoodParams = {
  foodName: string;
  foodCat: string;
  foodRecipe: string;
  foodPrice: number;
  foodDisPer?: number;
  foodImg: string;
};

const validationSchema = yup.object({
  foodName: yup.string().required(),
  foodCat: yup.string(),
  foodRecipe: yup.string().required(),
  foodPrice: yup.number().required(),
  foodDisPer: yup
    .number()
    .positive()
    .integer()
    .max(100, "100 хувиас бага дүн оруулна уу"),
});

export const FoodCreate = (props: FoodCreateParams) => {
  const { categories, refreshF } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);

  const {
    isAddedFood,
    setIsAddedFood,
    isImgUp,
    setIsImgUp,
    foodImgUrl,
    setFoodImgUrl,
  } = props;
  const btns = ["Clear", "Continue"];

  const formik = useFormik({
    initialValues: {
      foodName: "",
      foodCat: "",
      foodRecipe: "",
      foodPrice: undefined,
      foodDiscount: "",
      foodDisPer: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createFood({
        foodName: values.foodName,
        foodCat: values.foodCat,
        foodRecipe: values.foodRecipe,
        foodPrice: values.foodPrice,
        foodDisPer: values.foodDisPer,
        foodImg: foodImgUrl,
      });
      setIsAddedFood(false);
      setFoodImgUrl("");
      refreshF();
    },
  });

  const createFood = async (params: createFoodParams) => {
    try {
      await api.post("/foods/createFood", params, {
        headers: { Authorization: localStorage.getItem("token") },
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  return (
    <Container
      sx={{
        position: "absolute",
        display: `${isAddedFood ? "block" : "none"}`,
        zIndex: 1000,
      }}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        top={0}
        left={0}
        position={"absolute"}
        bgcolor={"#00000080"}
        onClick={() => setIsAddedFood(false)}
      ></Box>
      <Stack
        position={"absolute"}
        top={"100px"}
        left={"50%"}
        bgcolor={"white"}
        width={"500px"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"16px 24px"}
        >
          <Clear
            sx={{ width: "32px", height: "32px", cursor: "pointer" }}
            onClick={() => setIsAddedFood(false)}
          ></Clear>
          <Typography fontSize={24} fontWeight={700} color={"#161616"}>
            Create food
          </Typography>
          <Clear sx={{ color: "white" }}></Clear>
        </Box>
        <Divider></Divider>
        <Stack padding={"24px"} gap={"16px"}>
          <CustomInput
            label="Хоолны нэр"
            placeholder="Хоолны нэр"
            name="foodName"
            value={formik.values.foodName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.foodName && Boolean(formik.errors.foodName)}
            helperText={formik.touched.foodName && formik.errors.foodName}
          ></CustomInput>

          <CustomInput
            select
            label="Хоолны ангилал"
            placeholder="Хоолны ангилал"
            name="foodCat"
            value={formik.values.foodCat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.foodCat && Boolean(formik.errors.foodCat)}
            helperText={formik.touched.foodCat && formik.errors.foodCat}
          >
            {categories.map(({ category, _id }) => (
              <MenuItem key={_id} value={category}>
                {category}
              </MenuItem>
            ))}
          </CustomInput>
          {/* <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCat}
              label="category"
              onChange={handleSelectedCat}
            >
              {categories.map((item) => (
                <MenuItem value={item.category}>{item.category}</MenuItem>
              ))}
            </Select>
          </FormControl> */}
          {/* <Autocomplete
            options={categories.map((item) => item._id)}
            value={formik.values.foodCat}
            onChange={formik.handleChange}
            renderInput={(params) => (
              <TextField {...params} name="foodCat" label="category" />
            )}
          /> */}
          <CustomInput
            label="Хоолны орц"
            placeholder="Хоолны орц"
            name="foodRecipe"
            value={formik.values.foodRecipe}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.foodRecipe && Boolean(formik.errors.foodRecipe)
            }
            helperText={formik.touched.foodRecipe && formik.errors.foodRecipe}
          ></CustomInput>
          <CustomInput
            label="Хоолны үнэ"
            type="number"
            placeholder="Хоолны үнэ"
            name="foodPrice"
            value={formik.values.foodPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.foodPrice && Boolean(formik.errors.foodPrice)}
            helperText={formik.touched.foodPrice && formik.errors.foodPrice}
          ></CustomInput>
          <FormControlLabel
            onChange={formik.handleChange}
            control={
              <Switch
                name="foodDiscount"
                onChange={() => {
                  setIsChecked((prev) => {
                    if (prev) {
                      formik.setFieldValue("foodDisPer", undefined);
                      return false;
                    } else {
                      formik.setFieldValue("foodDisPer", 0);
                      return true;
                    }
                  });
                }}
              />
            }
            label="Хямдралтай эсэх"
            sx={{ fontSize: "14px", fontWeight: "500", color: "#121316" }}
          />
          <CustomInput
            type="number"
            placeholder="Хямдралын хувь"
            disabled={isChecked ? false : true}
            name="foodDisPer"
            value={formik.values.foodDisPer}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.foodDisPer && Boolean(formik.errors.foodDisPer)
            }
            helperText={formik.touched.foodDisPer && formik.errors.foodDisPer}
          ></CustomInput>
          <Stack gap={"8px"}>
            <Typography>Хоолны зураг</Typography>
            {foodImgUrl ? (
              <Stack>
                <Image
                  src={foodImgUrl}
                  alt="Uploaded"
                  width={200}
                  height={200}
                />
              </Stack>
            ) : (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                sx={{
                  width: "280px",
                  height: "120px",
                  bgcolor: "#BABCC41F",
                  border: "1px dashed #D6D7DC",
                  borderRadius: "8px",
                }}
              >
                <Typography fontSize={16} fontWeight={700} color={"#525252"}>
                  Add image for the food
                </Typography>
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#393939",
                    "&:hover": { bgcolor: "#393939" },
                  }}
                  onClick={() => setIsImgUp(true)}
                >
                  <Typography fontSize={16} fontWeight={700} color={"#FFFFFF"}>
                    Add image
                  </Typography>
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Divider></Divider>
        <Box padding={"24px"} display={"flex"} justifyContent={"flex-end"}>
          {btns.map((item) => {
            return (
              <Box
                sx={{
                  padding: "10px 8px",
                  borderRadius: "4px",
                  color: "#3F4145",
                  cursor: "pointer",
                  width: "90px",
                  textAlign: "center",
                  "&:hover": { color: "#FFFFFF", bgcolor: "#3F4145" },
                }}
              >
                <Typography
                  onClick={() => {
                    item == "Clear"
                      ? formik.resetForm()
                      : formik.handleSubmit();
                  }}
                  fontSize={16}
                  fontWeight={700}
                >
                  {item}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Stack>
      <FoodImgUp
        isImgUp={isImgUp}
        setIsImgUp={setIsImgUp}
        foodImgUrl={foodImgUrl}
        setFoodImgUrl={setFoodImgUrl}
      ></FoodImgUp>
    </Container>
  );
};
