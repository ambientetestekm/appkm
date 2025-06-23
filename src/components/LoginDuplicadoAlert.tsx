import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
}

export default function LoginDuplicadoAlert({ visible, onClose }: Props) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Login Já Realizado</Text>
          <Text style={styles.message}>
            Você já efetuou o login hoje. Por favor, tente novamente amanhã.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 8,
    width: 300,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ed9b1f",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
