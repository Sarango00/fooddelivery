import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import { OrderCheck1Address, OrderCheck1Other } from "..";
import { Dispatch, SetStateAction } from "react";

// type orderCheck1Props = {
//   dist: string;
//   setDist: Dispatch<SetStateAction<string>>;
//   khoroo: string;
//   setKhoroo: Dispatch<SetStateAction<string>>;
//   apt: string;
//   setApt: Dispatch<SetStateAction<string>>;
//   cell: string;
//   setCell: Dispatch<SetStateAction<string>>;
// };

export const OrderCheck1 = () => {
  // const { dist, setDist, khoroo, setKhoroo, apt, setApt, cell, setCell } =
  //   props;

  return (
    <Stack flexBasis={0} flexGrow={1}>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{ padding: "16px 24px", gap: "16px" }}
      >
        <RadioButtonChecked
          sx={{ width: "48px", height: "48px", color: "#0468C8" }}
        ></RadioButtonChecked>
        <Stack gap={"4px"}>
          <Typography fontSize={14} fontWeight={400} color={"#8B8E95"}>
            Алхам 1
          </Typography>
          <Typography fontSize={"20px"} fontWeight={400} color={"#000000"}>
            Хаягийн мэдээлэл оруулах
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#0468C8"}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Box>
      <Paper sx={{ padding: "24px", borderRadius: "16px" }}>
        <Stack gap={"40px"}>
          <OrderCheck1Address
          // dist={dist}
          // setDist={setDist}
          // khoroo={khoroo}
          // setKhoroo={setKhoroo}
          // apt={apt}
          // setApt={setApt}
          // cell={cell}
          // setCell={setCell}
          ></OrderCheck1Address>
          <OrderCheck1Other></OrderCheck1Other>
        </Stack>
      </Paper>
    </Stack>
  );
};
