// MultiStepForm.jsx
import React, { useState } from "react";
import FormConfirmation from "./formconfirmation";
import DataPersonal from "./datapersonal";
import Header from "./header";
import EmailConfirmation from "./emailconfirmation";

import { Stepper } from "react-form-stepper";
import Step from "./Step";

import { Button } from "@/components/ui/button";
const MultiStepForm = () => {
  const FormTitles = [
    "Data Personal",
    "Form Confirmation",
    "Email Confirmation",
  ];

  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
  });

  const [page, setPage] = useState(0);

  const handleChange = (e) => {
    // Update state saat input berubah
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data formulir ke server atau lakukan tindakan lainnya
    console.log("Data Form:", formData);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <DataPersonal formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <FormConfirmation formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-[21px] mb-[25px]">
        <div className="flex items-center gap-1">
          <span
            className="bg-white w-[10px] h-[10px] rounded-full border-2
          border-primary-4"
          ></span>
          <div className="w-[60px] border border-grey-8 rounded-md"></div>
          <span
            className="bg-white w-[10px] h-[10px] rounded-full border-2
          border-primary-4"
          ></span>
          <div className="w-[60px] border border-grey-8 rounded-md"></div>

          <span
            className="bg-white w-[10px] h-[10px] rounded-full border-2
          border-primary-4"
          ></span>
        </div>
      </div>

      <h1 className="font-semibold text-[15px] text-center text-grey-1">
        REGISTRASI DATA DIRI
      </h1>

      <div className="body">{PageDisplay()}</div>
      <div className="stepbutton">
        <Button
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;
