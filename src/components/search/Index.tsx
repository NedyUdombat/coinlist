import { View, Text } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@components";

const defaultValues = {
  param: "",
};

interface FormValues {
  param: string;
}

export const Search = () => {
  const { control } = useForm<FormValues>({ defaultValues });
  return (
    <Input
      keyboardType="default"
      label="Search Coins"
      name="param"
      control={control}
      placeholder={"BUSDXXXXX"}
      rules={{
        required: "Please type the name of the coin to search",
      }}
    />
  );
};
