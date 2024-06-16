import { router } from 'expo-router';
import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform, Pressable, TextInput} from 'react-native';
const SignInCustomer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPasswordEntered, setIsPasswordEntered] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignIn = () => {
    if (email === '' || password === '') {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      router.push('(home)/Home');
      // Perform sign-in logic here
    }
  };

  const validateEmail = (text) => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(text));
    setEmail(text);
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
        style={[ styles.segmentButton, styles.activeSegmentButton,]} >
        
        <Text style={[styles.segmentButtonText,styles.activeSegmentButtonText]}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.segmentButton}
        onPress={() => router.push('/signUpAsCustomer')}>
        <Text style={styles.segmentButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
       <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              !isValidEmail && styles.invalidInput,
            ]}
            placeholder="Email"
            placeholderTextColor="black"
            keyboardType="email-address"
            clearButtonMode={'always'}
            onChangeText={validateEmail}
            value={email}
          />
          {!isValidEmail && (
            <Text style={styles.errorText}>Invalid email</Text>
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
            Please enter both email and password
          </Text>
        )}
        
        <Pressable style={({pressed}) => [
              styles.signInButton,
              pressed && {opacity: 1.8, backgroundColor:'#987200'},
        ]} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </Pressable>
        <TouchableOpacity style={styles.buttonForgotPassword} onPress={() => router.replace('forgotPassword')}>
        <Text style={styles.buttonForgotPassword}> Forgot Password? </Text> 
        </TouchableOpacity>
        <Text style={styles.ss}> Dont have account? <Text style = {styles.ff} onPress={() => router.push('signUpAsCustomer')}>Create a New Account!</Text>
        </Text>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default SignInCustomer;
const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  container2: {
    flexDirection: 'row',
    backgroundColor: '#bf9000',
    borderColor: '#000000',
    borderWidth: 1,
    overflow: 'hidden',
    width: 300,
    borderRadius: 25,
    marginHorizontal: 1,
    marginTop: -35,
    marginBottom: 30,
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
  ss:{
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
    marginTop:10,
  },
  ff:{
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10, 
  },
  buttonForgotPassword:{
    alignItems: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    color:'blue',
    marginTop:7.5,
    marginBottom: 10,
  },
});