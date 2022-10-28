import React, { useEffect, useRef } from "react";
import { Text, Animated } from "react-native";

import styles from "./styles";
import { StyleType } from "@types";

interface LogoProps {
  styles?: StyleType | StyleType[];
}

export const Logo = ({ styles: propStyles }: LogoProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    transform: [{ scale: fadeAnim }],
  };

  const fadeIn = () => {
    Animated.spring(fadeAnim, {
      toValue: 1.2,
      friction: 5,
      tension: 150,
      useNativeDriver: true,
    }).start(() =>
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(),
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => fadeIn(), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[animatedStyle]}>
      <Text style={[styles.title, propStyles]}>
        coin<Text style={styles.titleSuffix}>LIST</Text>
      </Text>
    </Animated.View>
  );
};
