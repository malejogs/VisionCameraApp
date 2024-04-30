import { GestureResponderEvent } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement } from "react";

export type CameraConfigOptionProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>;
  content?: ReactElement;
};
