import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { incrementQuantity, decrementQuantity } from '@/redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.cart);

  const [selectedItem, setSelectedItem] = useState(null); // To store selected image & price

  useEffect(() => {
    if (selectedItem) {
      console.log("Selected item updated:", selectedItem);
    }
  }, [selectedItem]);

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15, gap: 5 }}>
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: '500' }}>My Cart</Text>

      <FlatList
        data={storeData}
        keyExtractor={(item) => item.id?.toString() || item.title}
        renderItem={({ item }) => (
          <View style={{
            height: responsiveHeight(18),
            borderBottomColor: "red",
            borderBottomWidth: 2,
            flexDirection: "row"
          }}>
            {/* Image Container */}
            <TouchableOpacity
              onPress={() => setSelectedItem({ image: item.image, price: item.price })}
              style={{ flex: 0.35, alignItems: "center", justifyContent: "center" }}
            >
              <Image style={{ height: 120, width: 120, resizeMode: "contain" }} source={{ uri: item.image }} />
            </TouchableOpacity>

            {/* Info Container */}
            <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.title}</Text>
                <AntDesign name="close" size={24} color="grey" onPress={() => console.log("clicked")} />
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                {/* Quantity Controls */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <AntDesign name="pluscircleo" size={28} color="green"
                    onPress={() => dispatch(incrementQuantity({ name: item.title }))} />
                  <Text style={{ fontSize: 17 }}>{item.quantity}</Text>
                  <AntDesign name="minuscircleo" size={28} color="green"
                    onPress={() => dispatch(decrementQuantity({ name: item.title }))} />
                </View>

                {/* Price */}
                <Text style={{ fontSize: 22, fontWeight: '600' }}>₹{item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />

      {/* Selected Item View */}
      {selectedItem && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>You tapped:</Text>
          <Image source={{ uri: selectedItem.image }} style={{ height: 150, width: 150, marginBottom: 10 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>₹{selectedItem.price}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
