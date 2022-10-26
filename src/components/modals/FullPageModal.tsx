import React from "react";
import { Modal, View, Text, Pressable } from "react-native";

import modalStyles from "./styles";
import { IconButton } from "@components";

interface ModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
  title?: string;
}

export const FullPageModal = ({
  isModalVisible,
  closeModal,
  title,
  children,
}: ModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={closeModal}>
      <View style={modalStyles.centeredView}>
        <Pressable style={modalStyles.otherView} onPress={closeModal} />
        <View style={modalStyles.modalView}>
          <View style={modalStyles.closeIconButtonContainer}>
            {title && <Text style={modalStyles.title}>{title}</Text>}
            <IconButton
              styles={modalStyles.fullPageCloseIconButton}
              onPress={closeModal}>
              <Text>X</Text>
            </IconButton>
          </View>
          <View style={modalStyles.modalViewChildren}>
            {children && children}
          </View>
        </View>
      </View>
    </Modal>
  );
};
