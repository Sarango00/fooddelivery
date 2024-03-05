import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { date } from "yup";

export const OrderHisPart1 = () => {
  return (
    <Paper
      sx={{ borderRadius: "16px", padding: "24px", flexBasis: 0, flexGrow: 1 }}
    >
      <Typography fontSize={20} fontWeight={400} color={"#000000"}>
        Захиалгын түүх
      </Typography>
      <Stack gap={"16px"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          padding={"16px"}
          gap={"8px"}
          sx={{ borderBottom: "1px solid #0468C8" }}
        >
          <RadioButtonChecked
            sx={{
              width: "48px",
              height: "48px",
              color: "#0468C8",
            }}
          />
          <Stack flexBasis={0} flexGrow={1}>
            <Typography fontSize={16} fontWeight={400} color={"#272727"}>
              Захиалга #23790
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#0468C8"}>
              Хүлээгдэж буй
            </Typography>
          </Stack>
          <Typography fontSize={16} fontWeight={400} color={"#272727"}>
            2024/04/26
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          padding={"16px"}
          gap={"8px"}
          sx={{ borderBottom: "1px solid #0468C8" }}
        >
          <RadioButtonChecked
            sx={{
              width: "48px",
              height: "48px",
              color: "#0468C8",
            }}
          />
          <Stack flexBasis={0} flexGrow={1}>
            <Typography fontSize={16} fontWeight={400} color={"#272727"}>
              Захиалга #23790
            </Typography>
            <Typography fontSize={14} fontWeight={400} color={"#0468C8"}>
              Хүлээгдэж буй
            </Typography>
          </Stack>
          <Typography fontSize={16} fontWeight={400} color={"#272727"}>
            2024/04/26
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
