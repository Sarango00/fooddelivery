"use client";
import { StepContext } from "@/app/ResetPass/page";
import { CustomInput, ResetPassNewPass } from "@/components";
import { Box, Button, Stack, Typography, useForkRef } from "@mui/material";
import { useFormik } from "formik";
import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import { AuthContext } from "../Providers/Authprovider";
import { EmailContext } from "../Providers/Emailprovider";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  otp: yup
    .number()
    .positive()
    .integer()
    .required("Нууц үг сэргээх код оруулна уу"),
});

export const ResetPassCode = () => {
  const { step, setStep } = useContext(StepContext);
  const { email } = useContext(EmailContext);
  const { user, otp, setOtp, verifyOtp } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await verifyOtp(values);
        setOtp(values.otp);
        setStep(<ResetPassNewPass />);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data.message ?? err.message);
        }
      }
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
        Нууц үг сэргээх
      </Typography>

      <Typography>
        Таны{" "}
        <Typography component={"span"} color={"primary.main"}>
          {email}
        </Typography>{" "}
        хаяг руу сэргээх код илгээх болно.
      </Typography>

      <Stack>
        <Stack gap={"16px"}>
          <CustomInput
            type="password"
            label="Нууц үг сэргээх код"
            placeholder="Нууц үг сэргээх код оруулна уу"
            name="otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          ></CustomInput>
        </Stack>
      </Stack>

      <Stack gap={4}>
        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.otp}
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
