
import { StyleSheet,View, Text,Image } from 'react-native';
import React from 'react';


const Header = () => {
   
  return (
    <View style={styles.cont}>
      <View style={styles.iconCont}>
        <Image source={require("../../assets/images/grid.png")} style={styles.icon}/>
      </View>
      <Image source={require("../../assets/images/myimage.jpeg")} style={styles.dp}/>

      </View>
     
    
  )
}



export default Header;

const styles = StyleSheet.create({
  icon:{
    height:28,
    width:28
  },
  iconCont:{
    backgroundColor:"white",
    height:44,
    width:44,
    borderRadius:22,
    justifyContent:"center",
    alignItems:"center"
  },
  dp:{
    height:44,
    width:44,
    borderRadius:22
  },
  cont:{
    flexDirection:"row",
    justifyContent:"space-between",
  }
})