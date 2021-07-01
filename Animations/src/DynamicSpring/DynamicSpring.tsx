import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withDecay,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const DynamicSpring = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onStart: (_event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event, ctx) => {
      translateX.value = ctx.offsetX;
      translateY.value = ctx.offsetY;
    },
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const translateX2 = useDerivedValue(() => withSpring(translateX.value));
  const translateY2 = useDerivedValue(() => withSpring(translateX.value));
  const style2 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX2.value},
        {translateY: translateY2.value},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View>
        <Image source={require('./assets/Photo.png')} style={styles.img} />
      </Animated.View>
      <Animated.View {...{style2}}>
        <Image
          source={require('./assets/Photos.png')}
          style={[styles.img, styles.absolute]}
        />
      </Animated.View>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Image
            source={require('./assets/controller.png')}
            style={styles.img}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  absolute: {
    position: 'absolute',
  },
});

export default DynamicSpring;
