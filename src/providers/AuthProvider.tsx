import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {FC, createContext, useState} from 'react';

const AuthContext = createContext<{
  user: UserInput;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

type UserInput = null | {username: string};

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [user, setUser] = useState<UserInput>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const staticUser = {username: 'Foo'};
          setUser(staticUser);
          AsyncStorage.setItem('user', JSON.stringify(user));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('user');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext};
export default AuthProvider;
