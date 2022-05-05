import React, {FC} from 'react';

import {Text} from 'react-native';
import {Container} from 'components/Container';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <Container>
      <Text>Home Screen</Text>
    </Container>
  );
};

export default Home;
