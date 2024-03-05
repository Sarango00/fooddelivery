import { Check } from "@mui/icons-material";
import { Alert, Stack } from "@mui/material";

type StatusStateProps = {};

export const StatusState = (props: StatusStateProps) => {
  const {} = props;
  return (
    <Alert
      sx={{ backgroundColor: "#FFFFFF", borderRadius: 20, boxShadow: 1 }}
      icon={<Check sx={{ color: "black" }} />}
      severity="success"
    >
      Амжилттай бүртгэгдлээ.
    </Alert>
  );
};
