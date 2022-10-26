import React from "react";
import { Modal, View, Text, Pressable } from "react-native";

import styles from "./styles";

interface ModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: JSX.Element;
  height?: string;
}

export const BottomModal = ({
  isModalVisible,
  closeModal,
  title,
  children,
  subtitle,
  icon,
  height,
}: ModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <Pressable style={styles.otherView} onPress={closeModal} />
        <View
          style={[
            styles.modalView,
            {
              height: height
                ? height
                : Number(height) > 100 || Number(height) < 0
                ? "50%"
                : "40%",
            },
          ]}>
          {icon && icon}
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          {children && children}
        </View>
      </View>
    </Modal>
  );
};
