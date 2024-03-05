"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Stack } from "@mui/material";

import { FoodInCart, HomeComp, OrderDetail } from "@/components";

export default function Home() {
  return (
    <Stack>
      <HomeComp></HomeComp>

    </Stack>
  );
}
