import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/Home/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Category from '@/components/Home/Category';
import ImageBanner from '@/components/Home/ImageBanner';
import ProductCard from '@/components/Home/ProductCard';
import data from '@/data/data.json';

const categories = ['Trending Now', 'All', 'Dog', 'Fish', 'Cat', 'Birds'];

const Home = () => {
  const [products, setProducts] = useState(data?.products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = selectedCategory === "All"
  ? products
  : products.filter((product) => product.category === selectedCategory);
const [isLiked,setIsLiked]=useState(false);
  const handleLiked = (item) => {
    const newProducts = products.map((prod) =>
      prod.id === item.id ? { ...prod, 
        isLiked: !prod.isLiked } : prod
    );
    setProducts(newProducts);
  };

  return (
    <View style={{ flex: 1, padding: 0, marginTop: 10 }}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <AntDesign name="search1" size={26} color="#C0C0C0" />
        </View>
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>

      {/* Image Banner */}
      <ImageBanner />

      {/* Category List */}
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            
          />
        
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 150}} 
      />

      {/* Product List */}
      <FlatList    
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item} // Fix keyExtractor
        renderItem={({ item }) => (
          
          <ProductCard item={item} handleLiked={handleLiked} />
        
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    height: 48,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
}); 