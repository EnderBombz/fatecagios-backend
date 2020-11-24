import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header statusBarHeight={0} theme={{ colors: { primary: '#00022E', underlineColor: '#00022E'} }}>
      <Appbar.Content title="Fatecágios" subtitle="Oportunidades para fatecanos" color="#fff"/>
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} color="#fff"/>
    </Appbar.Header>
  );
};

export default TopBar;