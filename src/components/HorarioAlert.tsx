import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface HorarioAlertProps {
  visible: boolean;
  title?: string;
  message: string;
  image?: any;
  onClose: () => void;
}

export default function HorarioAlert({
  visible,
  title,
  message,
  image,
  onClose,
}: HorarioAlertProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          {title && <Text style={styles.title}>{title}</Text>}
          {image && <Image source={image} style={styles.image} />}
          <Text style={styles.message}>{message}</Text>
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
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#d32f2f", // vermelho suave para erro
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 15,
    resizeMode: "contain",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#f40404",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
