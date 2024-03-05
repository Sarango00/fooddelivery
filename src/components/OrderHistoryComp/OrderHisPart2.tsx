import { RadioButtonChecked } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";

export const OrderHisPart2 = () => {
  return (
    <Paper
      sx={{ borderRadius: "16px", padding: "24px", flexBasis: 0, flexGrow: 1 }}
    >
      <Typography fontSize={20} fontWeight={400} color={"#000000"}>
        Захиалгын дэлгэрэнгүй
      </Typography>
      <Stack gap={"16px"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          padding={"16px"}
          gap={"8px"}
          sx={{ borderBottom: "1px solid #D6D8DB" }}
        >
          <Stack flexBasis={0} flexGrow={1}>
            <Typography fontSize={16} fontWeight={400} color={"#272727"}>
              Main pizza
            </Typography>
          </Stack>
          <Typography fontSize={16} fontWeight={400} color={"#272727"}>
            (1)
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          padding={"16px"}
          gap={"8px"}
          sx={{ borderBottom: "1px solid #D6D8DB" }}
        >
          <Stack flexBasis={0} flexGrow={1}>
            <Typography fontSize={16} fontWeight={400} color={"#272727"}>
              Хулууны зутан шөл
            </Typography>
          </Stack>
          <Typography fontSize={16} fontWeight={400} color={"#272727"}>
            (1)
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};
