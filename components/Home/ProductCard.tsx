import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductCard = ({ item, handleLiked }) => {
  if (!item) return null; // Prevents crashes if item is undefined

  return (
    <View style={styles.container}>
      <Image 
        source={{uri:item.image}} 
        style={styles.coverImage} 
      />
      <View style={styles.content}>
        <Text style={styles.text}>{item.title}</Text> 
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => handleLiked(item)} style={styles.heart}>
        {item?.isLiked ? (
          <AntDesign name="heart" size={20} color="#E55B5B" />
        ) : (
          <AntDesign name="hearto" size={20} color="#E55B5B" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    position: 'relative',
    alignItems: 'center',
    
  },
  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#444', 
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '600',
  },
  content: {
    alignItems: 'center',
  },
  heart: {
    height: 34,
    width: 34,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
