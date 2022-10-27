import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Coin } from "@types";
import styles from "./styles";
import { BottomModal } from "@components";

interface CoinCardProps {
  coin: Coin;
}

export const CoinCard = ({ coin }: CoinCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPress = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.touchable}>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.title}>{coin.name}</Text>
            <Text style={styles.subtitle}>{coin.rate}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <BottomModal
        isModalVisible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
        height={"25%"}>
        <View style={styles.modalContainer}>
          <Text style={styles.property}>
            Currency: <Text style={styles.name}> {coin.name}</Text>
          </Text>
          <Text style={styles.property}>
            Rate: <Text style={styles.rate}> {coin.rate}</Text>
          </Text>
        </View>
      </BottomModal>
    </>
  );
};
