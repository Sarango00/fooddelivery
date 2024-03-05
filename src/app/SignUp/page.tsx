"use client";
import { CustomInput } from "@/components";
import { AuthContext, AuthProvider } from "@/components/Providers/Authprovider";
import { Cloud, CloudQueue } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { sign } from "crypto";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email("Имэйл хаягаа оруулна уу").required(),
  address: yup.string().required(),
  pass1: yup.string().required("Нууц үг оруулна уу"),
  pass2: yup
    .string()
    .oneOf([yup.ref("pass1"), null], "Нууц үг таарахгүй байна"),
});

export default function SignUp() {
  const [isAgree, setIsAgree] = useState(false);

  const { signup } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      address: "",
      pass1: "",
      pass2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup({
        userName: values.userName,
        email: values.email,
        address: values.address,
        password: values.pass1,
      });
    },
  });

  return (
    <AuthProvider>
      <Stack
        minWidth={"350px"}
        width={"35%"}
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
          Бүртгүүлэх
        </Typography>

        <Stack>
          <Stack gap={"16px"}>
            <CustomInput
              label="Нэр"
              placeholder="Нэрээ оруулна уу"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            ></CustomInput>

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
              label="Хаяг"
              placeholder="Та хаягаа оруулна уу"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            ></CustomInput>

            <CustomInput
              label="Нууц үг"
              placeholder="Нууц үгээ оруулна уу"
              type="password"
              name="pass1"
              value={formik.values.pass1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pass1 && Boolean(formik.errors.pass1)}
              helperText={formik.touched.pass1 && formik.errors.pass1}
            ></CustomInput>

            <CustomInput
              label="Нууц үг давтах"
              placeholder="Нууц үгээ оруулна уу"
              type="password"
              name="pass2"
              value={formik.values.pass2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pass2 && Boolean(formik.errors.pass2)}
              helperText={formik.touched.pass2 && formik.errors.pass2}
            ></CustomInput>
          </Stack>
        </Stack>

        <Stack gap={4}>
          <Box
            onClick={() => setIsAgree((prev) => !prev)}
            display={"flex"}
            gap={1}
            padding={"8px 16px 8px 0px"}
          >
            <Cloud
              sx={{
                color: isAgree ? "primary.main" : "#525252",
              }}
            ></Cloud>
            <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            disabled={
              !formik.values.email ||
              !formik.values.pass1 ||
              !formik.values.userName ||
              !formik.values.address ||
              !formik.values.pass2 ||
              formik.values.pass1 != formik.values.pass2 ||
              !isAgree
            }
            onClick={() => formik.handleSubmit()}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Stack>
    </AuthProvider>
  );
}
