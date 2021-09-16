import React, {useCallback, useEffect, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
  PanResponder,
  Text,
  LayoutAnimation,
} from 'react-native';

interface Props {}

const SwipeBtnView = (props: Props) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: (gesture,gestureState) => {
        pan.flattenOffset();
        console.log('released');
        Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: gestureState.dx > 150 ? 300: 0, y: 0 }
        } // Back to zero
      ).start();
      },
    }),
  ).current;

  useEffect(() => {
    return () => {};
  }, []);


  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x.interpolate({
                        inputRange: [0, 300 ],
                        outputRange: [0, 280 ],
                        extrapolate: 'clamp'
                    })}, {translateY: 0}],
                    width:120
        }}
        {...panResponder.panHandlers}>
        <TouchableOpacity 
        activeOpacity={1}
        style={styles.btn}>
          <Text style={styles.txt}>Buy now ></Text>
        </TouchableOpacity>
      </Animated.View>
       <Text style={{position:'absolute',right:10, zIndex:-1, color:'#129570'}}> >>></Text>
    </View>
  );
};

export default SwipeBtnView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C6C6C6',
    width: 400,
    height: 60,
    borderRadius: 20,
    alignSelf:'center',
    justifyContent:'center'
  },
  btn: {
    height: 60,
    width: 120,
    backgroundColor: '#129570',
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  txt:{
      color:'white',
      fontSize:12,
      fontWeight:'bold'
  }
});
