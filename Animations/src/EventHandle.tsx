import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {TapGestureHandler, PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';

export const EventHandle = () => {
  const pressed = useSharedValue(false);
  const eventHandler: any = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? 'pink' : 'green',
      transform: [{scale: withSpring(pressed.value ? 1.2 : 1)}],
    };
  });

  ///////////////////////////////////////////////////////////////////////////////

  const startingPosition = 0;
  const pressed2 = useSharedValue(false);
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const eventHandler2 = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {startX: number, startY: number}>({
    onStart: (event, ctx) => {
      pressed2.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      // x.value = withSpring(ctx.startX);
      // y.value = withSpring(ctx.startY);
      pressed2.value = false;
    },
  });
  const uas2 = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed2.value ? 'yellow' : 'violet',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <>
      <TapGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, uas]} />
      </TapGestureHandler>
      <PanGestureHandler onGestureEvent={eventHandler2}>
        <Animated.View style={[styles.ball, uas2]} />
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});
