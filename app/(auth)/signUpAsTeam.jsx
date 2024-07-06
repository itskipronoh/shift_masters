import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
const SignUpTeam = () => {
  const [name,onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [cnic,onChangeCnic] = useState(''); 
  const [number,onChangeNumber] = useState(''); 
  const [password, onChangePassword] = useState(''); 
  const [cnfrmpassword, onChangeCnfrmPassword] = useState('');
  const [error, setError] = useState('');
  const handleSignUp = () => {
    if (!name || !email || !number || !password || !cnfrmpassword) {
      setError('All fields are required.');
      return;
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    else if(cnic.length<13)
    {
      setError('Please enter a valid 13 digit cnic number without dashes(-)');
      return;
    }
    else if(cnic.length>13)
    {
      setError('Please enter a valid 13 digit cnic number without dashes(-)');
      return;
    }
    else if(number.length<11){
      setError('Please enter a valid 11 digits mobile number');
      return;
    }
    else if(number.length>13){
      setError('Please enter a valid 11 digits mobile number');
      return;
    }
    else if (password.length < 8) {
      setError('Password should be at least 8 characters long!');
      return;
    }
    else if (password !== cnfrmpassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // console.log(name,email, cnic, number, password, cnfrmpassword, error);

    // const fdata = {
    //   Company_Name:name ,
    //   Leader_Name: name,
    //   Leader_Email: email,
    //   Leader_CNIC: cnic,
    //   Password: password
    // };
    //Company_Name,Leader_Name,Leader_Email,Leader_CNIC,Password
    // console.log(fdata);
    // fetch('http://127.0.0.1:3000/signupteam',{
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(fdata),
    // })
    // .then(response => response.json()).then(
    //   data=> {
    //     if(data.error) {
    //       setError(data.error);
    //     }
    //     else{
    //       alert('account created successfully');
    //       navigation.replace('Team Sign In');
    //     }
    //     console.log(data);
    //   }
    // )
  };
  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/HOUSE-MOVERS-LOGO.png')}/>
      <View style={styles.container2}>
      <TouchableOpacity
        style={styles.segmentButton}
        onPress={() => router.push('signInAsTeam')}>
        <Text style={styles.segmentButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[ styles.segmentButton, styles.activeSegmentButton,]}
        onPress={() => router.push('signUpAsTeam')}>
        <Text style={[ styles.segmentButtonText,styles.activeSegmentButtonText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>

       <TextInput 
        style={styles.inputname} 
        value={name} 
        placeholder="Enter Name"
        placeholderTextColor="black"
        keyboardType="default"
        //left={<TextInput.Icon name="account" />}
        onChangeText={onChangeName}
        clearButtonMode={'always'}
      />
      <TextInput 
        style={styles.inputemail} 
        value={email}
        placeholder="Enter Email"
        placeholderTextColor="black"
        keyboardType="email-address"
        //left={<TextInput.Icon name="form-textbox-password" />}
        onChangeText={onChangeEmail} 
        clearButtonMode={'always'}
      />
      <TextInput 
        style={styles.inputnumber} 
        value={cnic}
        placeholder="Enter CNIC without dashes - "
        placeholderTextColor="black"
        keyboardType="phone-pad"
        //left={<TextInput.Icon name="form-textbox-password" />}
        onChangeText={onChangeCnic} 
        clearButtonMode={'always'}
      />
      <TextInput 
        style={styles.inputnumber} 
        value={number}
        placeholder="Enter Mobile Number"
        placeholderTextColor="black"
        keyboardType="phone-pad"
        //left={<TextInput.Icon name="form-textbox-password" />}
        onChangeText={onChangeNumber} 
        clearButtonMode={'always'}
      />
      <TextInput 
        style={styles.inputpassword} 
        value={password}
        placeholder="Enter Password"
        placeholderTextColor="black"
        keyboardType="default"
        secureTextEntry={true}
        //left={<TextInput.Icon name="form-textbox-password" />}
        onChangeText={(text) => onChangePassword(text)}
        clearButtonMode={'always'}
      />
      <TextInput 
        style={styles.inputpassword2} 
        value={cnfrmpassword}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        keyboardType="default"
        secureTextEntry={true}
        //left={<TextInput.Icon name="form-textbox-password" />}
        onChangeText={(text) => onChangeCnfrmPassword(text)} 
        clearButtonMode={'always'}
      /> 
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Pressable style={({pressed}) => [
              styles.buttonSignUp,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
      ]} onPress={handleSignUp}>
        <Text style={styles.buttonSignUpText}> Sign Up </Text> 
      </Pressable>
      <Text style={styles.ss}> If Already have an account? <Text style = {styles.ff} onPress={() => {router.push('/signInAsTeam');}}>SignIn to Account!</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignUpTeam;
const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo:{
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    width: 270,
    marginTop: -50,
    marginLeft: 15,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
 container2: {
    flexDirection: 'row',
    backgroundColor: '#bf9000',
    borderColor: '#000000',
    borderWidth: 1,
    overflow: 'hidden',
    width: 300,
    borderRadius: 25,
    marginHorizontal: 1,
    marginTop: -45,
    marginBottom:10,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeSegmentButton: {
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  segmentButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeSegmentButtonText: {
    color: '#bf9000',
  },
  inputname:{
    height: 40,
    width: 300,
    borderRadius: 15,
    borderColor: '#000000',
    color: 'black',
    margin: 12,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  inputemail:{
    height: 40,
    width: 300,
    borderRadius: 15,
    borderColor: '#000000',
    color: 'black',
    margin: 12,
    borderWidth: 1,
    //marginLeft:0,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  inputnumber:{
    height: 40,
    width: 300,
    borderRadius: 15,
    borderColor: '#000000',
    color: 'black',
    margin: 12,
    borderWidth: 1,
    //marginLeft:0,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  inputpassword:{
    height: 40,
    width: 300,
    borderRadius: 15,
    borderColor: '#000000',
    color: 'black',
    margin: 12,
    borderWidth: 1,
    //marginLeft:0,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  inputpassword2:{
    height: 40,
    width: 300,
    borderRadius: 15,
    borderColor: '#000000',
    color: 'black',
    margin: 12,
    borderWidth: 1,
    //marginLeft:0,
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  buttonSignUp:{
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: 300,
    padding: 10,
    backgroundColor:'#BF9000',
    marginTop:10,
  },
  buttonSignUpText:{
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom: 10,
  },
  ss:{
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
    marginTop:15,
  },
  ff:{
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 12,
    alignSelf: 'center',
    padding: 10, 
  },
});