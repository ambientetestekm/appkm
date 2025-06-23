import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface InvalidUserAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function InvalidUserAlert({ visible, onClose }: InvalidUserAlertProps) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>Erro de Login</Text>
          <Text style={styles.message}>Usuário ou senha inválidos. Tente novamente.</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
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
  alertBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    maxWidth: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#cc0000",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#cc0000",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
