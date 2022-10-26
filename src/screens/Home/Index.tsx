import React from "react";
import { View, Text } from "react-native";
import { ScreenLayout } from "@layouts";
import styles from "./styles";
import { Button, Input, Logo } from "@components";
import { useForm } from "react-hook-form";
import { Variant } from "@types";

const defaultValues = {
  param: "",
};

interface FormValues {
  param: string;
}

export const HomeScreen = () => {
  const { control } = useForm<FormValues>({ defaultValues });
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.contentContainer}>
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

          {/* <Button
            variant={Variant.Filled}
            onPress={() => {}}
            label="Submit"
            styles={styles.submitButton}
            // loading={status === Status.PENDING}
          /> */}

          <Text>Coins</Text>
        </View>
      </View>
    </ScreenLayout>
  );
};
