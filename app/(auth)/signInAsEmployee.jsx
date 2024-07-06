import { router } from 'expo-router';
import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable, TextInput} from 'react-native';
const SignInEmployee = ({navigation}) => {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmpId, setIsValidEmpId] = useState(true);
  const [isPasswordEntered, setIsPasswordEntered] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignIn = () => {
    if (empId === '' || password === '') {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      router.push('/(employee)/Home');
      // Perform sign-in logic here

    }
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
        style={styles.logo}
        source={require('../../assets/HOUSE-MOVERS-LOGO.png')}/>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              !isValidEmpId && styles.invalidInput,
            ]}
            placeholder="Enter EmployeeID or Phone#"
            placeholderTextColor="black"
            keyboardType="default"
            clearButtonMode={'always'}
            onChangeText={(text) => setEmpId(text)}
            value={empId}
          />
          {!isValidEmpId && (
            <Text style={styles.errorText}>Invalid EmpID</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              !isPasswordEntered && styles.invalidInput,
            ]}
            placeholder="Password"
            placeholderTextColor="black"
            clearButtonMode={'always'}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          {!isPasswordEntered && (
            <Text style={styles.errorText}>Please enter password</Text>
          )}
        </View>
        {showErrorMessage && (
          <Text style={styles.errorMessage}>
            Please enter both Fields EmployeeID/Phn# and Password
          </Text>
        )}
        <Pressable style={({pressed}) => [
              styles.signInButton,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
        ]} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
        <TouchableOpacity style={styles.buttonForgotPassword} onPress={() => router.push('forgotPassword')}>
        <Text style={styles.buttonForgotPassword}> Forgot Password? </Text> 
        </TouchableOpacity>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignInEmployee;
const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 0,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo:{
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 280,
    marginBottom: 85,
    marginLeft: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
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
  invalidInput: {
    borderColor: '#bf9000',
  },
  errorText: {
    color: '#bf9000',
    marginTop: 5,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    marginBottom:10,
  },
   signInButton: {
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
  signInButtonText: {
    color: '#000000',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  buttonForgotPassword:{
    alignItems: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    color:'blue',
    marginTop:15,
    marginBottom: 10,
  },
});