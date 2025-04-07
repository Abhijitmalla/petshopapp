import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector,useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { incrementQuantity, decrementQuantity } from '@/redux/CartSlice';


const cart = () => {
  const dispatch=useDispatch();
  const storeData = useSelector((state) => state.cart);
  return (
  <SafeAreaView style={{flex:1,paddingHorizontal:15,gap:5}}>
      <Text style={{textAlign:"center",fontSize:24,fontWeight:500}}>My Cart</Text>
      <FlatList data={storeData} renderItem={({item,index})=>{
        {/* parent container */}
        return(
      <View style={{height:responsiveHeight(18),
      
        borderBottomColor:"red",
        borderBottomWidth:2,
        flexDirection:"row",
       
        // backgroundColor:"green"
        }}>
          {/* chillllllllld */}
<View style={{
  // backgroundColor:"red",
  flex:0.35,alignItems:"center",
  justifyContent:"center"}}>
  <Image style={{height:120,width:120,resizeMode:"contain"}} source={{uri: item.image}}/>
</View>
    {/* chillllllllld 2*/}
<View style={{
flex:0.7,
paddingHorizontal:10,
paddingVertical:20
}}>
<View style={{flexDirection:"row",
  alignContent:"center",
  justifyContent:"space-between",
}}>
<Text style={{fontSize:20,fontWeight:600}}>{item.title}</Text>
<AntDesign name="close" size={24} color="grey" onPress={()=>{
  console.log("clicked");
  
}}/>
</View>

<View style={{
  alignItems:"center",
  justifyContent:"space-between",
  flexDirection:"row",
  marginTop:10
}}>
  {/* quantity container */}
  <View style={{flexDirection:"row",
    alignItems:"center",
    gap:10,
  
  }}>

<AntDesign name="pluscircleo" size={28} color="green" />
<Text style={{fontSize:17}}>1</Text>
<AntDesign name="minuscircleo" size={28} color="green" />
  </View>
{/* price container */}
<Text style={{fontSize:22,fontWeight:600}}>${item.price}</Text>

</View>
</View>

        </View>
        )
      }} />
      
      </SafeAreaView>
  )
}

export default cart;

const styles = StyleSheet.create({});