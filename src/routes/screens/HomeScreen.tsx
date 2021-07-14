import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getMoviesBySearchQueryApi } from '~/api/movie';
import ScreenWrapper from '~/components/common/ScreenWrapper'
import { globalStyles } from '~/theme/globals';

const HomeScreen: React.FC<Props> = props => {
    console.log('props', props);




    useEffect(async () => {
        getMoviesBySearchQueryApi({ query: 'a', page: 1 }).then((res, rej) => {
            console.log('res>', res);

        })



    }, [])

    return (
        <ScreenWrapper>
            <Text>Home</Text>
        </ScreenWrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
