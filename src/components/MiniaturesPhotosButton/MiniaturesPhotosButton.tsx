import { Image, Platform, Pressable } from "react-native";
import styles from "./MiniaturesPhotosButton.styles";
import { MiniaturesPhotosButtonProps } from "./MiniaturesPhotosButton.d";

const MiniaturesPhotosButton = ({
  photos,
  onPress,
}: MiniaturesPhotosButtonProps) => (
  <Pressable onPress={onPress} style={styles.pressable}>
    {photos?.map((photo, i) => (
      <Image
        key={photo}
        source={{
          uri: `${Platform.OS === "android" ? "file://" : ""}${photo}`,
        }}
        style={[
          styles.image,
          { transform: [{ rotate: `${(i - 2) * -12}deg` }] },
        ]}
      />
    ))}
  </Pressable>
);

export default MiniaturesPhotosButton;
