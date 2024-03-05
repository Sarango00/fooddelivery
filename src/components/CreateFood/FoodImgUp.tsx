"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export type FoodImgUpaParams = {
  isImgUp: boolean;
  setIsImgUp: Dispatch<SetStateAction<boolean>>;
  foodImgUrl: string;
  setFoodImgUrl: Dispatch<SetStateAction<string>>;
};

export const FoodImgUp = (props: FoodImgUpaParams) => {
  const { isImgUp, setIsImgUp, foodImgUrl, setFoodImgUrl } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dm7p178xv/upload?upload_preset=wsqt2qma",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        setFoodImgUrl(data.secure_url);
      } catch (err) {
        console.error("Image upload error:", err);
      }
    }
  };

  return (
    <Stack
      position={"fixed"}
      width={"100vw"}
      height={"100vh"}
      zIndex={1}
      display={isImgUp ? "flex" : "none"}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        zIndex={0}
        onClick={() => {
          setIsImgUp(false);
        }}
      ></Box>
      <Container
        sx={{
          bgcolor: "white",
          zIndex: 0,
          width: "400px",
          height: "fit",
          mt: "100px",
          borderRadius: "20px",
        }}
      >
        <Stack py={8} alignItems="center">
          <Stack gap={3} width={400}>
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button
              onClick={() => {
                handleImageUpload();
              }}
              variant="contained"
            >
              Upload
            </Button>
            {foodImgUrl && (
              <Stack width="100%" pt="100%" position="relative">
                <Image src={foodImgUrl} alt="Uploaded" fill />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
