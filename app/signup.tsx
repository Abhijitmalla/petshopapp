import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '@/FirebaseConfig';
import { useState } from 'react';




const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [sentEmail, setSentEmail] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     
  const handleInputChange = (setter: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => (value: any) =>{
    setter(value);
    if(errorMessage){
      setErrorMessage(null)
    }
}

const handleSignup = async () => {
  if (!email || !password || !confirmPassword) {
    setErrorMessage("All fields are required!");
    return;
  }
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    sendEmailVerification(user)
      .then(() => {
        setSentEmail(true);
        alert('Verification email sent! Please check your inbox.');
      })
      .catch((error) => {
        setErrorMessage('Error sending verification email');
      });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    router.push('/login'); // Navigate to login page
  })
  .catch((error) => {
    setErrorMessage(error.message);
  });
};
  
  const onSignUp = () => {
    router.push('/login'); // Corrected navigation method
  };
  const onCreate = () => {
    router.push('/signup'); // Corrected navigation method
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      <Image source={require("../assets/images/Vector 1.png")} style={styles.topImage}/>
      </View>
     
      
      <Text style={styles.signUpText}>Create Account</Text>

      {/* Email Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Username' 
          placeholderTextColor="#777" 
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"mail"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
          style={styles.textInput} 
          placeholder='E-mail' 
          value={email}
          onChangeText={handleInputChange(setEmail)}
          placeholderTextColor="#777" 
        />
      </View>


      {/* Password Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome name={"lock"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
          style={styles.textInput} 
          placeholder="Password" 
          value={password}
          onChangeText={handleInputChange(setPassword)}
          placeholderTextColor="#777"
          secureTextEntry={true} 
          maxLength={8}

        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name={"user"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
          style={styles.textInput} 
          placeholder='Confirm Password' 
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#777" 
        />
      </View>



      {/* Sign In Button */}
      <TouchableOpacity style={styles.signinBtn} onPress={handleSignup}>
      <Text style={styles.signText}>Sign Up</Text>
      <LinearGradient colors={['#F97794', '#D16798', '#623AA2']} style={styles.linearGradient}>
 <AntDesign
 name={"arrowright"}
 size={24}
 color={"white"}
 />
</LinearGradient>
      </TouchableOpacity>
      <Text style={styles.footer}>
 <TouchableOpacity onPress={handleSignup}>

 </TouchableOpacity>
 <Text style={styles.footer}>
        Already have an account?  
         <Text style={styles.createText} onPress={onSignUp}>Login</Text>
       </Text>
</Text>
    <View style={styles.image2}>
<ImageBackground source={require("../assets/images/Vector 2.png")} style={styles.imageStyle}/>
    </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
    position:"relative",
  },
  topImageContainer:{},
  topImage:{
    width:"100%",
    height:130,
  },
  

  signUpText: {
    textAlign:"center",
fontSize:30,
color:'#262626',
marginBottom:30,
fontWeight:"bold",

  
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 40,
    paddingHorizontal: 15,
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 50,
    width: "80%",
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  forgetPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "80%",
    fontSize: 15,
    marginBottom: 20,
  },
  
  linearGradient: {
   height:34,
   width:56,
   borderRadius:17,
   alignItems:"center",
   justifyContent:"center",
   marginHorizontal:10,
  },
  signinBtn:{
    flexDirection:"row",
    marginTop:10,
    width:"90%",
    justifyContent:"flex-end",
  },
  footer:{
    color:'262626',
    textAlign:"center",
    fontSize:18,
    marginTop:10,
  },
  image2:{
position:"absolute",
bottom:0,
left:0,
  },
  imageStyle:{
    height:350,
    width:150,
  },
  createText: {
    textDecorationLine: "underline",
    color: "blue",
  },
  
   
  })