import { OrderHisPart1 } from "@/components";
import { OrderHisPart2 } from "@/components/OrderHistoryComp/OrderHisPart2";
import { Container } from "@mui/material";

export default function OrderHistory() {
  return (
    <Container sx={{ display: "flex", gap: "150px", mt: "120px" }}>
      <OrderHisPart1></OrderHisPart1>
      <OrderHisPart2></OrderHisPart2>
    </Container>
  );
}
