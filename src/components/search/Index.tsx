import React from "react";
import { Input } from "@components";
import { Control } from "react-hook-form";
import { FormValues } from "@hooks";
import { Status } from "@types";

interface SearchProps {
  control: Control<FormValues>;
  handleSearchInput: (param: string) => void;
  status: Status;
}

export const Search = ({ control, handleSearchInput, status }: SearchProps) => {
  return (
    <Input
      keyboardType="default"
      label="Search Coins"
      name="param"
      control={control}
      onChange={handleSearchInput}
      placeholder={"BUSDXXXX"}
      editable={status !== Status.PENDING}
      rules={{
        required: "Please type the name of the coin to search",
        disabled: status === Status.PENDING,
      }}
    />
  );
};
