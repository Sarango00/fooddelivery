"use client";
import { StepContext } from "@/app/ResetPass/page";
import { CustomInput, ResetPassCode } from "@/components";

import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import * as yup from "yup";
import { AuthContext } from "../Providers/Authprovider";
import { EmailContext } from "../Providers/Emailprovider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export const ResetPassCodeEmail = () => {
  const { step, setStep } = useContext(StepContext);
  const { email, setEmail, sendEmail } = useContext(EmailContext);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await sendEmail(values);
        setEmail(values.email);
        setStep(<ResetPassCode />);
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message ?? error.message);
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
        </Stack>
      </Stack>

      <Stack gap={4}>
        <Button
          variant="contained"
          disableElevation
          disabled={!formik.values.email}
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
