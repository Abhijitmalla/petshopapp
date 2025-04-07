import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const ProductDetails = ({ item, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: "gray",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
