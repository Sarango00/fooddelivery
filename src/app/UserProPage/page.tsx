"use client";
import { Logout, UploadImg, UserPro } from "@/components";
import { AuthContext } from "@/components/Providers/Authprovider";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function UserProPage() {
  const router = useRouter();
  const { isLogged } = useContext(AuthContext);
  const [imgUrl, setImgUrl] = useState("");

  return isLogged ? (
    <Stack>
      <UserPro imgUrl={imgUrl} setImgUrl={setImgUrl}></UserPro>
      <Logout></Logout>
      <UploadImg imgUrl={imgUrl} setImgUrl={setImgUrl}></UploadImg>
    </Stack>
  ) : (
    router.push("/")
  );
}
