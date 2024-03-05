"use client";
import { Edit, PermIdentity } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Stack,
  SvgIconTypeMap,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useFormikContext } from "formik";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../Providers/Authprovider";

// type CustomProInputProps = {
//   icon: ReactNode;
//   label?: String;
//   userName: String;
//   isEdited: boolean;
//   setIsEdited: Dispatch<SetStateAction<boolean>>;
// };

export const CustomProInput = (props: TextFieldProps) => {
  const { icon, userName, label, ...rest } = props;
  const { isShown, setIsShown, handleShow } = useContext(AuthContext);
  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => {
    setIsEdited((prev) => !prev);
  };

  return (
    <Stack
      bgcolor={label ? "#F6F6F6" : "white"}
      borderRadius={"4px"}
      padding={"8px 20px"}
    >
      <Box
        width={"300px"}
        display={"flex"}
        gap={1}
        alignItems={"center"}
        sx={{ cursor: !label && "pointer" }}
      >
        <Avatar sx={{ bgcolor: "white" }}>{icon}</Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 2,
            flexBasis: 0,
          }}
        >
          <Typography fontSize={12} color={"#888A99"}>
            {label}
          </Typography>
          {!isEdited ? (
            <Typography fontSize={16} color={"#0D1118"}>
              {userName}
            </Typography>
          ) : (
            <TextField {...rest} defaultValue={userName}></TextField>
          )}
        </Box>
        {label && (
          <IconButton
            onClick={handleEdit}
            sx={{ width: "30px", height: "30px" }}
          >
            <Edit
              sx={{ width: "24px", height: "24px", color: "primary.main" }}
            ></Edit>
          </IconButton>
        )}
      </Box>
    </Stack>
  );
};
