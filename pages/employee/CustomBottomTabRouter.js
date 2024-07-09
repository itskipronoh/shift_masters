import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabButton = ({ onPress, title, icon }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    {icon}
    <Text style={styles.tabText}>{title}</Text>
  </TouchableOpacity>
);

const CustomBottomTabRouter = ({ state, descriptors, navigation }) => (
  <View style={styles.tabBar}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
      const isFocused = state.index === index;
      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <TabButton
          key={route.key}
          onPress={onPress}
          title={label}
          icon={options.tabBarIcon({ color: isFocused ? '#673ab7' : '#222' })}
        />
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 50,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#222',
  },
});

export default CustomBottomTabRouter;
