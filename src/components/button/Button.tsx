import React from "react";
import { ActivityIndicator, Pressable, Text, TextStyle } from "react-native";

import styles from "./styles";
import { Colors } from "@lib";
import { StyleType, Variant } from "@types";

interface ButtonProps {
  onPress(): void;
  children?: React.ReactNode;
  label?: string;
  styles?: StyleType | StyleType[];
  extTextStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
  variant: Variant;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    styles: propStyles,
    disabled,
    children,
    label,
    onPress,
    variant,
    loading,
    extTextStyle,
  } = props;

  function getVariantStyle(variant: Variant) {
    const variantStyles = {
      [Variant.Filled]: styles.filled,
      [Variant.Hollow]: styles.hollow,
      [Variant.Plain]: styles.plain,
      [Variant.Link]: styles.link,
    };

    return variantStyles[variant];
  }
  function getVariantTextStyle(variant: Variant) {
    const variantTextStyles = {
      [Variant.Filled]: styles.filledText,
      [Variant.Hollow]: styles.hollowText,
      [Variant.Plain]: styles.plainText,
      [Variant.Link]: styles.linkText,
    };

    return variantTextStyles[variant];
  }

  function getVariantDisabledStyle(variant: Variant) {
    const variantDisabledStyles = {
      [Variant.Filled]: styles.filledDisabled,
      [Variant.Hollow]: styles.hollowDisabled,
      [Variant.Plain]: styles.plainDisabled,
      [Variant.Link]: styles.linkDisabled,
    };

    return variantDisabledStyles[variant];
  }
  const style = getVariantStyle(variant);
  const textStyle = getVariantTextStyle(variant);
  const disabledStyle = getVariantDisabledStyle(variant);

  if (!label && !children) {
    return null;
  }

  return (
    <Pressable
      style={[
        styles.buttonContainer,
        style,
        propStyles,
        disabled && disabledStyle,
      ]}
      disabled={props.disabled}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={Colors.white} />
      ) : children ? (
        children
      ) : (
        <Text style={{ ...textStyle, ...extTextStyle }}> {label}</Text>
      )}
    </Pressable>
  );
};
