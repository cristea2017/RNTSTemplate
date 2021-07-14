import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { globalStyles } from '~/theme/globals';

/* ------------- Props and State ------------- */
type Props = {};

/* ------------- Component ------------- */
const ScreenWrapper: React.FC<Props> = props => {
    const { children } = props;

    return <SafeAreaView style={globalStyles.screenContainer}>{children}</SafeAreaView>;
};

export default ScreenWrapper;
