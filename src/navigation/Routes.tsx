import React, {FC, useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from 'providers/AuthProvider';
import AuthStack from './AuthStack';
import AppTabs from './AppTabs';
import Loading from 'components/Loading';

type RoutesProps = {};

const Routes: FC<RoutesProps> = ({}) => {
  const {user, login} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fake user login
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
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
