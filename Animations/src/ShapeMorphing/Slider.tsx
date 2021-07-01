import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { clamp } from 'react-native-redash';
import Background from '../StrokeAnimation/Background';

interface SliderProps {
  translateX: Animated.SharedValue<number>;
}

const { width } = Dimensions.get("window");
export const SLIDER_WIDTH = width * 0.8;

const Slider = ({translateX}: SliderProps) => {
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({translationX}, ctx) => {
      translateX.value =clamp(translationX + ctx.x, 0, SLIDER_WIDTH);
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
      </View>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.cursor, style]}>
          <View style={styles.cursorPoint} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
		width: SLIDER_WIDTH,
		alignSelf: 'center',
		height:1,
		borderWidth:1,
		borderColor: '#000000',
		justifyContent:'center',
	},
  dividerContainer: {
	},
  divider: {
		backgroundColor: 'red'
	},
  cursor: {
		height: 15,
		width: 15,
		backgroundColor: 'transparent',
		borderColor: '#fff',
		borderWidth: 1,
		justifyContent: 'center',
	},
  cursorPoint: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: 'black',
	},
});

export default Slider;
