import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/Home/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageBanner from '@/components/Home/ImageBanner';
import ProductCard from '@/components/Home/ProductCard';
import Category from '@/components/Home/Category';
import data from '@/data/data.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = ['Find your Favorite Pet'];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [products, setProducts] = useState(data.products); // Load data.json products
  const [selectedCategory, setSelectedCategory] = useState("Find your Favorite Pet");
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) // Trim spaces & ignore case
  );
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
      <Header />

      {/* Search Bar */}
      <SafeAreaView style={styles.inputContainer}>
        <View style={styles.icon}>
          <AntDesign name="search1" size={26} color="#C0C0C0" />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Search for pets..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Updates searchQuery state
        />
      </SafeAreaView>

      {/* Image Banner */}
      {/* <ImageBanner /> */}
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
        //  contentContainerStyle={{ marginBottom: 500}} 
      />

      {/* Product List (Filtered) */}
      <FlatList
  data={filteredProducts}
  numColumns={2}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <ProductCard item={item} handleLiked={handleLiked} /> // Pass handleLiked as a prop
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
