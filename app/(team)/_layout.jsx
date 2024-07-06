
import { Drawer } from 'expo-router/drawer';
export default function TeamLayout() {
  // const showHiddenScreen = false;
  const showHiddenScreen = true;
    return (
      <Drawer screenOptions={{ drawerPosition: 'left' }} initialRouteName="HOME">
        <Drawer.Screen name='ProfileAccount'
         options={{
          title:"Profile Account",
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
        <Drawer.Screen name='index' 
        options={{
          title:"Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#BF9000',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
          <Drawer.Screen name='VehicleData' 
          options={{
          title:"Vehicle Data",
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
          <Drawer.Screen name='EmployeeData' 
          options={{
          title:"Employee Data",
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
          <Drawer.Screen name='Orders' 
          options={{
          title:"Orders",
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
         <Drawer.Screen name='SignOut' 
         options={{
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
      </Drawer>
  );
}
