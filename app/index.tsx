import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton'; // Import button
import { Tabs } from 'expo-router';

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.navigate('/signup'); 
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require("../assets/images/dogImage.jpeg")} 
        style={styles.image}
      />

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Ready to make new friends?</Text>
      </View>

      {/* Button with Linear Gradient Effect */}
      <View style={styles.buttonContainer}>
        <MyButton title="Get Started" onPress={onContinue} style={{
          color:"black",
        }}/>
      </View>

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink", // Keep background plain white
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    resizeMode: "contain",
    borderRadius:150,
  },
  textContainer: {
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    color: 'black', // Text color changed for visibility
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Index;
