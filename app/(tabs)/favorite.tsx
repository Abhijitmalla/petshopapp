
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation, useLocalSearchParams, router } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/CartSlice';


const Favorite = () => {
  const productData=useLocalSearchParams();
  const { id, title, price, image } =productData;
  const nav = useNavigation();
  const dispatch=useDispatch();
  const storeData = useSelector((state) => state.cart); 
  console.log(storeData);
  return (
    <SafeAreaView style={{ flex: 1, gap: 20 }}>
      <StatusBar backgroundColor={'white'} />

      <Image
        style={{
          height: '500',
          width:'100%',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
        source={{ uri: image }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '100%',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      ><TouchableOpacity onPress={() => router.push('/home')}>
      <Ionicons name="arrow-back" size={24} color="blue" />
    </TouchableOpacity>
        <Feather name="share" size={24} color="blue" />
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 25, color: 'black', fontWeight: '600' }}>
            {title}
          </Text>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </View>
        <Text style={{ marginTop: 5, fontSize: 15, color: 'grey' }}>
          ${price}
        </Text>
        <TouchableOpacity
        onPress={()=>{
          dispatch(addToCart({id,
            title,
            price, // convert to number if it's a string
            image}));
          router.push("/(tabs)/cart")
        }}
          activeOpacity={0.8}
          style={{
            backgroundColor:"lightgreen",
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            marginTop: 80,
          }}
        >
          
             <Text>Add To Cart</Text>
          
        
          
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    
  );
};

export default Favorite;

const styles = StyleSheet.create({});
