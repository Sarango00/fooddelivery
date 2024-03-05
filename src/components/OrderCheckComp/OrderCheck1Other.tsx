import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

export const OrderCheck1Other = () => {
  const payments = ["Бэлнээр", "Картаар"];

  return (
    <Stack gap={"32px"}>
      <Stack gap={"4px"}>
        <Typography>Нэмэлт мэдээлэл</Typography>
        <TextareaAutosize
          minRows={5}
          maxRows={8}
          placeholder="Орц, давхар, орцны код ..."
        ></TextareaAutosize>
      </Stack>
      <Stack gap={"4px"}>
        <Typography>Утасны дугаар*</Typography>
        <TextField
          required
          InputProps={{
            style: { backgroundColor: "#F7F7F8" },
          }}
        ></TextField>
      </Stack>
      <Stack gap={"8px"}>
        <Typography>Төлбөр төлөх</Typography>
        <Box display={"flex"} gap={"33px"}>
          {payments.map((item) => (
            <Box display={"flex"} alignItems={"center"} gap={"20px"}>
              <Checkbox />
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
