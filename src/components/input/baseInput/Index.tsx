import React, { useState, useRef } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  Text,
  TextInput,
} from "react-native";
import { Controller, Control, FieldError } from "react-hook-form";

import styles from "./styles";
import { Icons } from "@assets";
import { IconButton } from "@components";
import { Colors, Fonts } from "@lib";

export interface InputProps {
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  inputStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  secureTextEntry?: boolean;
  name: string;
  control: Control<any>;
  rules?: any;
  caption?: string;
  onFocus?: (e: any) => void;
  onBlur?: () => void;
  onPressIn?: (e: any) => void;
  onPressOut?: (e: any) => void;
}

export const Input = (props: InputProps) => {
  const {
    keyboardType = "default",
    placeholder,
    inputStyle,
    label,
    editable = true,
    secureTextEntry,
    containerStyle,
    control,
    name,
    rules = {},
    caption,
    onFocus,
    onBlur,
    onPressIn,
    onPressOut,
  } = props;
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isInFocus, setIsInFocus] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputIcon = () => {
    if (secureTextEntry) {
      return (
        <IconButton styles={styles.iconbutton} onPress={toggleShowPassword}>
          {showPassword ? (
            <Icons.EyeOpen.default width={30} height={22.5} />
          ) : (
            <Icons.EyeClosed.default width={30} height={22.5} />
          )}
        </IconButton>
      );
    }
    return null;
  };

  const renderError = (error: FieldError | undefined) => {
    if (error) {
      return (
        <Text style={styles.errorMessage}>
          {error.message || "An error occured"}
        </Text>
      );
    }
    return null;
  };

  const renderCaption = () => {
    if (caption) {
      return <Text style={styles.caption}>{caption}</Text>;
    }
    return null;
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View style={[styles.container, containerStyle]}>
          {label && <Text style={styles.labelStyle}>{label}</Text>}
          <View>
            <TextInput
              ref={inputRef}
              style={[
                styles.input,
                inputStyle,
                {
                  borderColor: error
                    ? Colors.danger
                    : isInFocus
                    ? Colors.primary
                    : Colors.transparent,
                },
                {
                  backgroundColor: !editable
                    ? Colors.color_636363
                    : Colors.white,
                  color: !editable ? Colors.white : Colors.black_3,
                  fontWeight: !editable ? "400" : "400",
                  fontFamily: !editable
                    ? Fonts.montserratMediumItalic
                    : Fonts.montserratRegular,
                },
              ]}
              placeholder={placeholder}
              placeholderTextColor={Colors.color_c4c4c4}
              keyboardType={keyboardType}
              value={value}
              onChangeText={onChange}
              editable={editable}
              secureTextEntry={showPassword}
              returnKeyType="done"
              onFocus={e => {
                setIsInFocus(true);
                if (onFocus) onFocus(e);
              }}
              onBlur={() => {
                setIsInFocus(false);
                if (onBlur) onBlur();
              }}
              onPressIn={onPressIn}
              onPressOut={onPressOut}
            />
            {secureTextEntry ? renderInputIcon() : null}
          </View>
          {error && renderError(error)}
          {caption && renderCaption()}
        </View>
      )}
    />
  );
};
