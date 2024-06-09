import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from "../components/GetStarted";
import SignInAs from '../components/SignInAs';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import SignInCustomer from '../components/USER/SignInCustomer';
import SignUpCustomer from '../components/USER/SignUpCustomer';
import SignInTeam from '../components/TEAM/SignInTeam';
import SignUpTeam from '../components/TEAM/SignUpTeam';
import SignInEmployee from '../components/EMPLOYEE/SignInEmployee';
import CustomerDrawerContainer from '../components/USER/DrawerContainer';
import TeamDrawerContainer from "../components/TEAM/DrawerContainer";
import EmployeeDrawerContainer from "../components/EMPLOYEE/DrawerContainer";
import TeamSignOut from '../components/TEAM/SignOut';
import EmployeeSignOut from '../components/EMPLOYEE/SignOut';
export default function App() {
  const Stack = createNativeStackNavigator();
   return (
     <NavigationContainer independent={true}>
          <Stack.Navigator>
            
       
        
          <Stack.Screen name="Customer Drawer" component={CustomerDrawerContainer} options={{ headerShown: false }}/>
       
          
         <Stack.Screen name='Team SignOut' component={TeamSignOut} options={{
          title:"Sign Out",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Stack.Screen name="Team Drawer" component={TeamDrawerContainer} options={{ headerShown: false }}/>
        
          <Stack.Screen name='Employee SignOut' component={EmployeeSignOut} options={{
          title:"Sign Out",
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
           <Stack.Screen name="Employee Drawer" component={EmployeeDrawerContainer} options={{ headerShown: false }}/>
          </Stack.Navigator>
     </NavigationContainer>
   );
}
//          <Stack.Screen name='Profile Account' component={ProfileAccount} options={{
//           title:"Profile Account",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='HOME' component={HOME} options={{
//           title:"Home",
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='Vehicle Data' component={VehicleData} options={{
//           title:"Vehicle Data",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='Employee Data' component={EmployeeData} options={{
//           title:"Employee Data",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='Orders' component={Orders} options={{
//           title:"Orders",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='Track Order' component={TrackOrder} options={({ navigation }) => ({
//             title: 'Tracking Your Order',
//             headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTitleAlign: "center",
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//             headerLeft: () => (
//               <TouchableOpacity onPress={() => navigation.replace('Orders')} style={{marginLeft: 10}}>
//                 <Text style={{color: '#000000'}}>Go Back</Text>
//               </TouchableOpacity>
//             ),
//           })}/>
//           <Stack.Screen name='View Order Details' component={ViewOrderDetails} options={{
//             title: 'View Order Details',
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
//           <Stack.Screen name='Chats' component={Chats} options={{
//           title:"Chats",
//           gestureEnabled: true,
//           gestureDirection: 'horizontal',
//           headerTitleAlign: "center",
//           headerStyle: {
//             backgroundColor: '#BF9000',
//           },
//           headerTintColor: '#000000',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },}}/>
