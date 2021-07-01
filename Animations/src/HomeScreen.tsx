import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {HomeNavigationProps} from './Route';

export const HomeScreen = ({navigation}: HomeNavigationProps<'Home'>) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Animation tutorial</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('WithTiming')}
        style={styles.box}>
        <Text style={styles.text}>With Timing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('WithSpring')}
        style={styles.box}>
        <Text style={styles.text}>With Spring</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Rotation')}
        style={styles.box}>
        <Text style={styles.text}>Rotation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('EventHandle')}
        style={styles.box}>
        <Text style={styles.text}>Event Handling</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PanGesture')}
        style={styles.box}>
        <Text style={styles.text}>Pan Gesture</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wave')}
        style={styles.box}>
        <Text style={styles.text}>Wave</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DVDLogo')}
        style={styles.box}>
        <Text style={styles.text}>DVD Logo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Breathe')}
        style={styles.box}>
        <Text style={styles.text}>Breathe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fluid')}
        style={styles.box}>
        <Text style={styles.text}>Fluid</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MaskedView')}
        style={styles.box}>
        <Text style={styles.text}>Mask View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('StickyShapes')}
        style={styles.box}>
        <Text style={styles.text}>Sticky Shape</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ShapeMorphing')}
        style={styles.box}>
        <Text style={styles.text}>Shape Morphing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DynamicSpring')}
        style={styles.box}>
        <Text style={styles.text}>Dynamic Spring</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 5,
  },
  box: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
    padding: 10,
    alignSelf: 'center',
  },
});
