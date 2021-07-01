import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "./Route";

import { HomeScreen } from "./HomeScreen";
import { WithTiming } from "./WithTiming";
import { WithSpring } from "./WithSpring";
import { Rotation } from "./Rotation";
import { EventHandle } from "./EventHandle";
import PanGesture from "./PanGesture";
import Wave from "./Wave";
import DVDLogo from "./DVDLogo";
import Breathe from "./Breathe";
import Fluid from "./Fluid";
import MaskedView from "./MaskedView";
import StickyShapes from "./StickyShapes";
import PathMorphing from "./ShapeMorphing/ShapeMorphing";
import DynamicSpring from "./DynamicSpring/DynamicSpring";

const Stack = createStackNavigator<AppRoutes>();

const HomeNavigation = () => {
	return(
		<Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'WithTiming'} component={WithTiming}/>
			<Stack.Screen name={'WithSpring'} component={WithSpring}/>
			<Stack.Screen name={'Rotation'} component={Rotation}/>
			<Stack.Screen name={'EventHandle'} component={EventHandle}/>
			<Stack.Screen name={'PanGesture'} component={PanGesture}/>
			<Stack.Screen name={'Wave'} component={Wave}/>
			<Stack.Screen name={'DVDLogo'} component={DVDLogo}/>
			<Stack.Screen name={'Breathe'} component={Breathe}/>
			<Stack.Screen name={'Fluid'} component={Fluid}/>
			<Stack.Screen name={'MaskedView'} component={MaskedView}/>
			<Stack.Screen name={'StickyShapes'} component={StickyShapes}/>
			<Stack.Screen name={'ShapeMorphing'} component={PathMorphing}/>
			<Stack.Screen name={'DynamicSpring'} component={DynamicSpring}/>
    </Stack.Navigator>
	)
}

export default HomeNavigation;