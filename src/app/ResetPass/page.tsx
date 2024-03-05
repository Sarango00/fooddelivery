"use client";
import { ResetPassCode, ResetPassCodeEmail } from "@/components";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const StepContext = createContext<StepContextType>(
  {} as StepContextType
);

type StepContextType = {
  step: JSX.Element;
  setStep: Dispatch<SetStateAction<JSX.Element>>;
};

export default function ResetPassPage() {
  const [step, setStep] = useState(<ResetPassCodeEmail />);
  return (
    <>
      <StepContext.Provider value={{ step, setStep }}>
        {step}
      </StepContext.Provider>
    </>
  );
}
