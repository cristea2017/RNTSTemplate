import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getMoviesBySearchQueryApi} from '~/api/movie';
import ScreenWrapper from '~/components/common/ScreenWrapper';
import {globalStyles} from '~/theme/globals';
import NavigationService from '~/utils/NavigationService';
// import { searchYoutubeMusic } from '~/utils/YoutubeManager';
import MapView, {Marker} from 'react-native-maps';
import images from '~/assets/images';
import SwipeBtnView from '~/components/SwipeBtnView';
import SharedView1 from '~/components/SharedView1';

const HomeScreen: React.FC<Props> = props => {
  // console.log('props', props);

  useEffect(async () => {
    // await searchYoutubeMusic('akord')
    // getMoviesBySearchQueryApi({ query: 'a', page: 1 }).then((res, rej) => {
    //     console.log('res>', res);
    // })
    // NavigationService.navigate("SettingsScreen")
  }, []);

  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <SwipeBtnView />
      {/* <MapView style={{ flex: 1 }} region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true} >
                <Marker
                    coordinate={{ latitude: 42.882004, longitude: 74.582748 }}
                    image={images.tab1}
                />
            </MapView> */}
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
