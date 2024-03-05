"use client";

import { Search, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

export const CustomInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <Stack>
      <Typography fontSize={"14px"} fontWeight={400} color={"#000000"}>
        {label}
      </Typography>
      <TextField
        {...rest}
        type={type === "password" && showPassword ? "text" : type}
        inputProps={{
          style: {
            padding: "8px 16px",
          },
        }}
        InputProps={{
          style: {
            border: "1px #ECEDF0",
            borderRadius: "4px",
            backgroundColor: "#F7F7F8",
          },
          startAdornment: type === "search" && (
            <InputAdornment position="start">
              <IconButton>
                <Search sx={{ color: "black" }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? (
                  <Visibility sx={{ color: "black" }} />
                ) : (
                  <VisibilityOff sx={{ color: "black" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      >
        {props.children}
      </TextField>
    </Stack>
  );
};
