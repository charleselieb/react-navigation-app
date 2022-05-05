import React, {FC, useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Container} from 'components/Container';
import {ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from 'providers/AuthProvider';
import AuthStack from './AuthStack';
import {Button} from 'components/Button';

type RoutesProps = {};

const Routes: FC<RoutesProps> = ({}) => {
  const {user, login, logout} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        console.log(userString);
        if (userString) {
          //decode
          login();
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <Container>
          <Text>Username: {user.username}</Text>
          <Button text="logout" onPress={logout} />
        </Container>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
