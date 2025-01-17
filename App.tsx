import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/MainNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
