import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import Login from 'screens/auth/Login';
import Register from 'screens/auth/Register';

export type AuthParamList = {
  Login: undefined;
  Register: undefined;
};

interface AuthStackProps {}

const Stack = createNativeStackNavigator<AuthParamList>();

const AuthStack: FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
