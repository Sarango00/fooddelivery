import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { OrderCheck2FoodList } from "./OrderCheck2FoodList";

export const OrderCheck2 = () => {
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
            Алхам 2
          </Typography>
          <Typography fontSize={"20px"} fontWeight={400} color={"#000000"}>
            Захиалга баталгаажуулах
          </Typography>
          <Typography fontSize={16} fontWeight={400} color={"#0468C8"}>
            Хүлээгдэж байна
          </Typography>
        </Stack>
      </Box>
      <Paper sx={{ padding: "24px", borderRadius: "16px" }}>
        <OrderCheck2FoodList></OrderCheck2FoodList>
      </Paper>
    </Stack>
  );
};
