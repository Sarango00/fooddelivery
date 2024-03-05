"use client";

import { Box, Button, Container, Stack, TextField } from "@mui/material";
import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "../Providers/Authprovider";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "@/common";

type uploadImgProps = {
  imgUrl: string;
  setImgUrl: Dispatch<SetStateAction<string>>;
};

export const UploadImg = (props: uploadImgProps) => {
  const { isUploaded, setIsUploaded, refreshF } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { imgUrl, setImgUrl } = props;

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
          "https://api.cloudinary.com/v1_1/dm7p178xv/upload?upload_preset=pg154abs",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        setImgUrl(data.secure_url);
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
      display={isUploaded ? "flex" : "none"}
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        bgcolor={"#00000080"}
        zIndex={0}
        onClick={() => {
          setIsUploaded(false);
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
            {imgUrl && (
              <Stack width="100%" pt="100%" position="relative">
                <Image src={imgUrl} alt="Uploaded" fill />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
