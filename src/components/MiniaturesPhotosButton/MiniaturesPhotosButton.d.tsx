import { GestureResponderEvent } from "react-native";

export type MiniaturesPhotosButtonProps = {
  photos: string[];
  onPress: (event: GestureResponderEvent) => void;
};
