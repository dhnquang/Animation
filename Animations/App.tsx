import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}
