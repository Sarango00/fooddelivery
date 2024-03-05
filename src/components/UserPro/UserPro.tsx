"use client";
import {
  Edit,
  History,
  Logout,
  Mail,
  Mode,
  PermIdentity,
  Phone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useForkRef,
} from "@mui/material";
import { CustomProInput } from "..";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useFormik } from "formik";
import * as yup from "yup";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "@/common";
import { useRouter } from "next/navigation";

type userProProps = {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
};

const validationSchema = yup.object({
  userName: yup.string(),
  email: yup.string().email("Имэйл хаягаа оруулна уу"),
  number: yup.number().positive().integer(),
});

type updateProParams = {
  userName: string;
  number: number;
  email: string;
};

export const UserPro = (props: userProProps) => {
  const { user, setIsShown, setIsUploaded, refreshF } = useContext(AuthContext);
  const { imgUrl, setImgUrl } = props;

  const formik = useFormik({
    initialValues: {
      userName: user.userName,
      email: user.email,
      number: user.number,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendUserImg();
      updatePro(values);
      console.log(values);
    },
  });

  const sendUserImg = async () => {
    if (!imgUrl) return;
    try {
      await api.post(
        "/userImg",
        { imgUrl },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      refreshF();
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  const updatePro = async (params: updateProParams) => {
    await api.post("/updatePro", params, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    refreshF();
  };

  const router = useRouter();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "150px",
        mt: "100px",
      }}
    >
      <Stack gap={"40px"}>
        <Stack alignItems={"center"} gap={"40px"}>
          <Box position={"relative"}>
            <Avatar
              sx={{ width: "120px", height: "120px" }}
              src={user.proImg}
            ></Avatar>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
                bgcolor: "white",
                border: "1px solid #D6D8DB",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              onClick={() => setIsUploaded(true)}
            >
              <Edit
                sx={{ width: "24px", height: "24px", color: "primary.main" }}
              ></Edit>
            </IconButton>
          </Box>
          <Typography fontSize={28} fontWeight={700}>
            {user.userName}
          </Typography>
        </Stack>
        <Stack padding={"0px 20px"} gap={"16px"}>
          <CustomProInput
            icon={<PermIdentity sx={{ color: "black" }} />}
            label="Таны нэр"
            userName={user.userName}
            value={formik.values.userName}
            name="userName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          ></CustomProInput>
          <CustomProInput
            icon={<Phone sx={{ color: "black" }} />}
            label="Утасны дугаар"
            userName={user.number}
            value={formik.values.number}
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
          ></CustomProInput>
          <CustomProInput
            icon={<Mail sx={{ color: "black" }} />}
            label="Имэйл хаяг"
            userName={user.email}
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></CustomProInput>
          {user.role !== "admin" && (
            <CustomProInput
              icon={<History sx={{ color: "black" }} />}
              userName="Захиалгын түүх"
              onClick={() => router.push("OrderHistory")}
            ></CustomProInput>
          )}

          <Box onClick={() => setIsShown(true)}>
            <CustomProInput
              icon={<Logout sx={{ color: "black" }} />}
              userName="Гарах"
            ></CustomProInput>
          </Box>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Хадгалах
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
