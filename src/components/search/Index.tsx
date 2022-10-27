import React from "react";
import { Input } from "@components";
import { Control } from "react-hook-form";
import { FormValues } from "@hooks";

interface SearchProps {
  control: Control<FormValues>;
  handleSearchInput: (param: string) => void;
}

export const Search = ({ control, handleSearchInput }: SearchProps) => {
  return (
    <Input
      keyboardType="default"
      label="Search Coins"
      name="param"
      control={control}
      onChange={handleSearchInput}
      placeholder={"BUSDXXXXX"}
      rules={{
        required: "Please type the name of the coin to search",
      }}
    />
  );
};
