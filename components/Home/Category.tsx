import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Category = ({item,selectedCategory,setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
      <Text style={[styles.category,
        selectedCategory===item && {
          color:"#FFF",
          backgroundColor:"red",
        },
      ]}>{item}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  category:{
    fontSize:16,
    fontWeight:600,
    color :"#938F8F",
    backgroundColor:"#DFDCDC",
    padding:10,
    textAlign:"center",
    borderRadius:20,
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical:10,marginTop:20
   
  }
})