import {Text} from 'react-native';
import React, {FC, useContext} from 'react';
import {Container} from 'components/Container';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthParamList} from 'navigation/Routes';
import {Button} from 'components/Button';
import {AuthContext} from 'providers/AuthProvider';

interface LoginProps {
  navigation: NativeStackNavigationProp<AuthParamList, 'Login'>;
}

const Login: FC<LoginProps> = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const {navigate} = navigation;

  return (
    <Container>
      <Text>Login Screen</Text>
      <Button text="Log as Foo" onPress={login} />
      <Button text="Go to Register" onPress={() => navigate('Register')} />
    </Container>
  );
};

export default Login;
