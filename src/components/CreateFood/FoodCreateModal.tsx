"use client";

import { Clear, StackedLineChart } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useFormik } from "formik";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "@/common";
import { headers } from "next/headers";

type catCreateParams = {
  catName: string;
};

export const FoodCreateModal = () => {
  const { isCatShown, setIsCatShown, refreshF } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: { catName: "" },
    onSubmit: async (values) => {
      await createCat(values);
      setIsCatShown(false);
      formik.setFieldValue("catName", "");
    },
  });
  const btns = ["Clear", "Continue"];

  const createCat = async (params: catCreateParams) => {
    try {
      await api.post("/foods/createCat", params, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      refreshF();
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      position={"absolute"}
      top={0}
      display={isCatShown ? "flex" : "none"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={1000}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        onClick={() => setIsCatShown(false)}
      ></Box>
      <Stack
        sx={{
          bgcolor: "#FFFFFF",
          width: "500px",
          zIndex: 1,
          borderRadius: "16px",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          padding={"16px 24px"}
        >
          <Clear
            onClick={() => setIsCatShown(false)}
            sx={{ width: "32px", height: "32px", cursor: "pointer" }}
          ></Clear>
          <Typography fontSize={24} fontWeight={700} color={"#161616"}>
            Create new category
          </Typography>
          <Clear sx={{ color: "white" }}></Clear>
        </Box>
        <Divider></Divider>
        <Stack padding={"24px"} gap={"8px"}>
          <Typography fontSize={14} fontWeight={500} color={"#121316"}>
            Category name
          </Typography>
          <TextField
            InputProps={{
              style: {
                border: "1px #F4F4F4",
                borderRadius: "4px",
                backgroundColor: "#F4F4F4",
              },
            }}
            type="text"
            name="catName"
            value={formik.values.catName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
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
                      ? formik.setFieldValue("catName", "")
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
    </Box>
  );
};
