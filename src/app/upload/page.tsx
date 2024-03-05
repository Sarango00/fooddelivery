"use client";

import { Button, Container, Stack, TextField } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imgUrl, setImgUrl] = useState(null);


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
    <Stack>
      <Container>
        <Stack py={8} alignItems="center">
          <Stack gap={3} width={400}>
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
            />
            <Button onClick={handleImageUpload} variant="contained">
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

export default Page;
