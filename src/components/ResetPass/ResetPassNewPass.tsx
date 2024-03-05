"use client";
import { StepContext } from "@/app/ResetPass/page";
import { CustomInput } from "@/components";
import { Button, Stack, Typography, useForkRef } from "@mui/material";
import { useFormik } from "formik";
import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import { AuthContext } from "../Providers/Authprovider";
import { FormatIndentDecrease } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  newPass: yup.string().required("Нууц үг оруулна уу"),
  newPass2: yup
    .string()
    .oneOf([yup.ref("newPass"), null], "Нууц үг таарахгүй байна"),
});

export const ResetPassNewPass = () => {
  const { step, setStep } = useContext(StepContext);
  const { user, changePass } = useContext(AuthContext);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      newPass: "",
      newPass2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      changePass(values.newPass);
      console.log(values.newPass);
      router.push("/LoginPage");
    },
  });

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
        Шинэ нууц үг зохиох
      </Typography>

      <Stack>
        <Stack gap={"16px"}>
          <CustomInput
            type="password"
            label="Нууц үг"
            placeholder="Нууц үг оруулна уу"
            name="newPass"
            value={formik.values.newPass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPass && Boolean(formik.errors.newPass)}
            helperText={formik.touched.newPass && formik.errors.newPass}
          ></CustomInput>

          <CustomInput
            type="password"
            label="Нууц үг давтах"
            placeholder="Нууц үг давтаж оруулна уу"
            name="newPass2"
            value={formik.values.newPass2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.newPass2 && Boolean(formik.errors.newPass2)}
            helperText={formik.touched.newPass2 && formik.errors.newPass2}
          ></CustomInput>
        </Stack>
      </Stack>

      <Stack gap={4}>
        <Button
          variant="contained"
          disableElevation
          disabled={
            !formik.values.newPass ||
            !formik.values.newPass2 ||
            formik.values.newPass !== formik.values.newPass2
          }
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
