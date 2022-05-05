import {Container} from 'components/Container';
import React, {FC} from 'react';
import {Text} from 'react-native';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <Container>
      <Text>Search Screen</Text>
    </Container>
  );
};

export default Search;
