"use client";
import { OrderCheck1, OrderCheck2 } from "@/components";
import { FormatLineSpacing } from "@mui/icons-material";
import { Container } from "@mui/material";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  dist: yup.string().required(),
  khoroo: yup.string().required(),
  apt: yup.string().required(),
  addition: yup.string(),
  cell: yup.number().positive().integer().required(),
});

export default function OrderCheck() {
  // const [dist, setDist] = useState("");
  // const [khoroo, setKhoroo] = useState("");
  // const [apt, setApt] = useState("");
  // const [cell, setCell] = useState("");

  const formik = useFormik({
    initialValues: {
      dist: "",
      khoroo: "",
      apt: "",
      addition: "",
      cell: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Formik
      initialValues={{ dist: "", khoroo: "", apt: "", addition: "", cell: "" }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {(formikProps) => (
        <Container
          {...formikProps}
          sx={{ display: "flex", gap: "200px", mt: "100px", mb: "200px" }}
        >
          <OrderCheck1

          // dist={dist}
          // setDist={setDist}
          // khoroo={khoroo}
          // setKhoroo={setKhoroo}
          // apt={apt}
          // setApt={setApt}
          // cell={cell}
          // setCell={setCell}
          ></OrderCheck1>
          <OrderCheck2
          // dist={dist}
          // setDist={setDist}
          // khoroo={khoroo}
          // setKhoroo={setKhoroo}
          // apt={apt}
          // setApt={setApt}
          // cell={cell}
          // setCell={setCell}
          ></OrderCheck2>
        </Container>
      )}
    </Formik>
  );
}
