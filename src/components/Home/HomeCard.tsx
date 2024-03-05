import { MenuBook, QueryBuilder, RamenDining } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Menu,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

type HomeCardProps = {};

export const HomeCard = (props: HomeCardProps) => {
  const {} = props;

  const cards = [
    {
      icon: (
        <MenuBook
          sx={{ width: "30px", height: "30px" }}
          color="primary"
        ></MenuBook>
      ),
      text1: " Хүргэлтийн төлөв хянах",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: (
        <QueryBuilder color="primary" sx={{ width: "30px", height: "30px" }} />
      ),
      text1: "Шуурхай хүргэлт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: (
        <RamenDining color="primary" sx={{ width: "30px", height: "30px" }} />
      ),
      text1: "Эрүүл, баталгаат орц",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <MenuBook color="primary" sx={{ width: "30px", height: "30px" }} />,
      text1: "Хоолны өргөн сонголт",
      text2: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Container sx={{ display: "flex", marginBottom: "122px", gap: "47px" }}>
      {cards.map((item) => {
        return (
          <Card sx={{ padding: "16px", borderRadius: "16px" }}>
            <Stack gap={"15px"}>
              <Box padding={"15px"}>{item.icon}</Box>
              <Stack>
                <Typography
                  fontSize={"18px"}
                  fontWeight={700}
                  color={"#272727"}
                >
                  {item.text1}
                </Typography>
                <Typography
                  sx={{ opacity: "75%" }}
                  fontWeight={400}
                  color={"#272727"}
                >
                  {item.text2}
                </Typography>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </Container>
  );
};
