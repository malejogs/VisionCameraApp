import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

export type configOption = {
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: (event: GestureResponderEvent) => void;
  content?: React.JSX.Element;
};
