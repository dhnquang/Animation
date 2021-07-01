import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
	withSequence,
	withRepeat,
} from 'react-native-reanimated';

export const Rotation = () => {
  const rotation = useSharedValue(0);

  const animatedRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, animatedRotateStyle]} />
      <Button
        onPress={() => {
          rotation.value = withSequence(
            withTiming(-10, {duration: 50}),
            withRepeat(withTiming(10, {duration: 100}), 6, true),
            withTiming(0, {duration: 50}),
          );
        }}
        title="Bell"
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    marginBottom: 10,
		borderRadius: 15,
  },
});
