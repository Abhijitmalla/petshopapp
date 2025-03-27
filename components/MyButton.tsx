import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient colors={['#F97794', '#D16798', '#623AA2']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

// Styles
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10, // Keeps border radius smooth
    overflow: "hidden", // Ensures the gradient applies correctly
  },
  linearGradient: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
});

export default MyButton;
