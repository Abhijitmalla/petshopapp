import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Route } from 'expo-router/build/Route';

const Favorite = ({ route }) => {
  const { favorites } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Products</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorite products yet!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  empty: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
