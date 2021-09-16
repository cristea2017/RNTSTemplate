import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {globalStyles} from '~/theme/globals';

/* ------------- Props and State ------------- */
type Props = {
  children: React.children;
};

/* ------------- Component ------------- */
const ScreenWrapper: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>{children}</SafeAreaView>
  );
};

export default ScreenWrapper;
