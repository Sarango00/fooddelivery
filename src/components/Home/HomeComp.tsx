import { Stack } from "@mui/material";
import { HomeCard, HomeMenuCards, HomeSlide } from "..";

export const HomeComp = () => {
  return (
    <Stack>
      <HomeSlide></HomeSlide>
      <HomeCard></HomeCard>
      <HomeMenuCards />
    </Stack>
  );
};
