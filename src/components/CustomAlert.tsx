import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  imageSource?: any;
  onClose: () => void;
}

export default function CustomAlert({
  visible,
  title,
  message,
  imageSource,
  onClose,
}: CustomAlertProps) {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          {imageSource && (
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
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
    marginTop: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
