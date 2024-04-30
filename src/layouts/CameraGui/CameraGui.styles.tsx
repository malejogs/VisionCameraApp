import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  container: { position: "absolute", bottom: 30, width: "100%" },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 7,
    margin: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(0 0 0 / 0.2)",
    borderRadius: 15,
  },
  mainMenu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  takePhotoPressable: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
  },
  configPressable: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
