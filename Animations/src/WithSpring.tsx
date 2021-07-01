import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export const WithSpring = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withSpring(offset.value * 255)}],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
			<Animated.View style={[styles.box, customSpringStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    marginBottom: 10,
  },
});
