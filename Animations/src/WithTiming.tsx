import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export const WithTiming = () => {
  const offset = useSharedValue(0);
  const width = useSharedValue(96);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 255}],
    };
  });
  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 800,
        easing: Easing.bezier(0.25, 1, 0.25, 1),
      }),
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button
        onPress={() => (offset.value = withTiming(Math.random()))}
        title="Move"
      />
      <Animated.View style={[styles.box2, animatedStyles2]} />
      <Button
        onPress={() => (width.value = Math.random()* 255)}
        title="Expand"
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#FDEEBE',
    marginBottom: 10,
  },
  box2: {
    marginTop: 10,
    height: 100,
    width: 100,
    backgroundColor: '#FDBEEB',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
