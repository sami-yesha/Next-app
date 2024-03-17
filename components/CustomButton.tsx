"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <>
      <button
        disabled={false}
        type={"button"}
        className={`${containerStyles}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default CustomButton;
