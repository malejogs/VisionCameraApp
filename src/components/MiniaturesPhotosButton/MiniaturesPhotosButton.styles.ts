import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  pressable: {
    position: "relative",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255 255 255 / 0.2)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: 45,
    height: 60,
    zIndex: 1,
    borderColor: "white",
    borderWidth: 1,
  },
});

export default styles;
