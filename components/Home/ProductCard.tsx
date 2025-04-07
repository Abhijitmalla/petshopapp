import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item, handleLiked }) => {
  if (!item) return null; // Prevents crashes if item is undefined
  const router = useRouter();




  return (
    
    <TouchableOpacity
    activeOpacity={0.8}
    onPress={()=>{
      router.push({
        pathname: '/favorite',
        params: {
          id: item.id.toString(), // must be string
          title: item.title,
          price: item.price.toString(),
          image: item.image,
        },
     });
      
    }}
    style={styles.container}>
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
    </TouchableOpacity>
  
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    position: 'relative',
    alignItems: 'center',
    marginBottom:10,
    

    
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
