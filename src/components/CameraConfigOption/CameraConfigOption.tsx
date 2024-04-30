import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { CameraConfigOptionProps } from "./CameraConfigOption.d";
import styles from "./CameraConfigOption.styles";

const CameraConfigOption = ({
  onPress,
  icon,
  content,
}: CameraConfigOptionProps) => (
  <Pressable onPress={onPress} style={styles.pressable}>
    {icon.name && <MaterialCommunityIcons size={25} color="white" {...icon} />}
    {content}
  </Pressable>
);

export default CameraConfigOption;
