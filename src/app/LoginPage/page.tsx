"use client";
import { Button, Container, Stack, Typography } from "@mui/material";
import { CustomInput } from "@/components";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/Providers/Authprovider";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });

  const router = useRouter();

  return (
    <Stack
      width={"350px"}
      margin={"111px auto 75px"}
      padding={"32px"}
      gap={"48px"}
    >
      <Typography
        textAlign={"center"}
        color={"#0D1118"}
        fontSize={"28px"}
        fontWeight={"700"}
      >
        Нэвтрэх
      </Typography>

      <Stack>
        <Stack gap={"16px"}>
          <CustomInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></CustomInput>
          <CustomInput
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></CustomInput>
        </Stack>
        <Button
          sx={{ width: "fit-content", alignSelf: "flex-end" }}
          onClick={() => router.push("ResetPass")}
        >
          <Typography
            textTransform={"none"}
            fontSize={14}
            color={"text.secondary"}
          >
            Нууц үг сэргээх
          </Typography>
        </Button>
      </Stack>

      <Stack gap={4}>
        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.email || !formik.values.password}
          onClick={() => formik.handleSubmit()}
        >
          Нэвтрэх
        </Button>
        <Typography color={"text.secondary"} fontSize={14} textAlign={"center"}>
          Эсвэл
        </Typography>
        <Button
          onClick={() => router.push("SignUp")}
          variant="outlined"
          sx={{ color: "#272727" }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
}
