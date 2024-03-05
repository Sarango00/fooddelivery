import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

type MenuCardProps = {
  image: string;
  discount?: number;
  label: string;
  disPrice?: number;
  price: number;
  onClick?: () => void;
};

export const MenuCard = (props: MenuCardProps) => {
  const { image, discount, label, disPrice, price, onClick } = props;
  return (
    <Stack onClick={onClick} alignItems={"center"} sx={{ cursor: "pointer" }}>
      <Box>
        <Box position={"relative"}>
          <Image
            src={image}
            alt="menu logo"
            width={282}
            height={186}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {Boolean(discount) && (
            <Typography
              sx={{
                border: "1px #FFFFFF solid",
                bgcolor: "#18BA51",
                color: "#FFFFFF",
                padding: "4px 16px",
                borderRadius: "16px",
                position: "absolute",
                top: "16px",
                right: "29px",
                zIndex: 999,
              }}
            >
              {discount}%
            </Typography>
          )}
        </Box>

        <Box>
          <Typography fontSize={"18px"} fontWeight={600} color={"#000000"}>
            {label}
          </Typography>
          <Box sx={{ display: "flex", gap: "16px" }}>
            {disPrice ? (
              <Typography fontSize={18} fontWeight={600} color={"#18BA51"}>
                {Intl.NumberFormat().format(disPrice)} ₮
              </Typography>
            ) : (
              ""
            )}

            <Typography
              fontSize={18}
              fontWeight={discount ? 400 : 600}
              color={discount ? "#171717" : "#18BA51"}
              sx={discount && { textDecoration: "line-through" }}
            >
              {Intl.NumberFormat().format(price)} ₮
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
