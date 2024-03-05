import { FmdGood } from "@mui/icons-material";
import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { LookupAddressEntry } from "axios";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";

// type orderCheck1AddressProps = {
//   dist: string;
//   setDist: Dispatch<SetStateAction<string>>;
//   khoroo: string;
//   setKhoroo: Dispatch<SetStateAction<string>>;
//   apt: string;
//   setApt: Dispatch<SetStateAction<string>>;
//   cell: string;
//   setCell: Dispatch<SetStateAction<string>>;
// };

export const OrderCheck1Address = () => {
  // const { dist, setDist, khoroo, setKhoroo, apt, setApt, cell, setCell } =
  //   props;

  const options = [
    "Дүүрэг сонгоно уу",
    "Хороо сонгоно уу",
    "Байр, гудамж сонгоно уу",
  ];
  const districts = [
    { icon: <FmdGood />, text: "Баянзүрх дүүрэг" },
    { icon: <FmdGood />, text: "Хан-Уул дүүрэг" },
    { icon: <FmdGood />, text: "Баянгол дүүрэг" },
    { icon: <FmdGood />, text: "Сонгинохайрхан дүүрэг" },
    { icon: <FmdGood />, text: "Чингэлтэй дүүрэг" },
  ];

  const khoroos = [
    { icon: <FmdGood />, text: "1-р хороо" },
    { icon: <FmdGood />, text: "2-р хороо" },
    { icon: <FmdGood />, text: "3-р хороо" },
    { icon: <FmdGood />, text: "4-р хороо" },
    { icon: <FmdGood />, text: "5-р хороо" },
    { icon: <FmdGood />, text: "6-р хороо" },
    { icon: <FmdGood />, text: "7-р хороо" },
  ];

  const apats = [
    { icon: <FmdGood />, text: "Нархан хотхон" },
    { icon: <FmdGood />, text: "26-р байр" },
    { icon: <FmdGood />, text: "Хоймор хотхон" },
    { icon: <FmdGood />, text: "45-р байр" },
    { icon: <FmdGood />, text: "Зайсан хотхон " },
  ];

  return (
    <Stack gap={"16px"}>
      <Typography>Хаягаа оруулна уу</Typography>
      {options.map((option) => (
        <TextField
          required
          select
          label={option}
          InputProps={{
            style: { display: "flex", backgroundColor: "#F7F7F8" },
          }}
        >
          {option === "Дүүрэг сонгоно уу"
            ? districts.map((item, index) => (
                <MenuItem key={index} value={item.text}>
                  <Box sx={{ display: "flex" }}>
                    <Box> {item.icon}</Box>
                    <Typography> {item.text}</Typography>
                  </Box>
                </MenuItem>
              ))
            : option === "Хороо сонгоно уу"
            ? khoroos.map((item, index) => (
                <MenuItem key={index} value={item.text}>
                  <Box sx={{ display: "flex" }}>
                    <Box> {item.icon}</Box>
                    <Typography> {item.text}</Typography>
                  </Box>
                </MenuItem>
              ))
            : apats.map((item, index) => (
                <MenuItem key={index} value={item.text}>
                  <Box sx={{ display: "flex" }}>
                    <Box> {item.icon}</Box>
                    <Typography> {item.text}</Typography>
                  </Box>
                </MenuItem>
              ))}
        </TextField>
      ))}
    </Stack>
  );
};
