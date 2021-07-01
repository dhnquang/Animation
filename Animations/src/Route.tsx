import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface HomeNavigationProps<RouteName extends keyof AppRoutes> {
  navigation: StackNavigationProp<AppRoutes, RouteName>;
  route: RouteProp<AppRoutes, RouteName>;
}

export type AppRoutes = {
  ShapeMorphing: undefined;
  StickyShapes: undefined;
  MaskedView: undefined;
  Fluid: undefined;
  Breathe: undefined;
  DVDLogo: undefined;
  Wave: undefined;
  PanGesture: undefined;
  EventHandle: undefined;
  Rotation: undefined;
  WithSpring: undefined;
  WithTiming: undefined;
  Home: undefined;
};
