import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  alertMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


