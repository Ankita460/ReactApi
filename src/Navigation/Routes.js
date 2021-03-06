import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack = createStackNavigator();

function Routes(props) {
  const{isLogin}=props;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLogin && AuthStack()}
        
        {MainStack()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
