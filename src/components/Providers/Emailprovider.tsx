import { api } from "@/common";
import { StepContext } from "@mui/material";
import { useRouter } from "next/navigation";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ResetPassCode } from "..";
import { toast } from "react-toastify";

type EmailContextType = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  sendEmail: (params: sendEmail) => Promise<void>;
};

export const EmailContext = createContext<EmailContextType>(
  {} as EmailContextType
);

type sendEmail = {
  email: string;
};

export const EmailProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState("");

  const sendEmail = async (params: sendEmail) => {
    await api.post("/sendEmail", params);
  };

  return (
    <EmailContext.Provider
      value={{
        email,
        setEmail,
        sendEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
