import React, {FC, useContext} from 'react';

import {Text} from 'react-native';
import {Container} from 'components/Container';
import {Button} from 'components/Button';
import {AuthContext} from 'providers/AuthProvider';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const {logout} = useContext(AuthContext);

  return (
    <Container>
      <Text>Home Screen</Text>
      <Button text="Logout" onPress={logout} />
    </Container>
  );
};

export default Home;
