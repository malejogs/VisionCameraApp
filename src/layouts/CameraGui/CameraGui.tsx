import { useState } from "react";
import { Pressable, View, Platform, Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import { CameraConfigOption, MiniaturesPhotosButton } from "../../components";
import { CameraGuiProps } from "./CameraGui.d";
import styles from "./CameraGui.styles";

const CameraGui = ({ configOptions, onTakePhoto }: CameraGuiProps) => {
  const [showConfig, setShowConfig] = useState(false);
  const [sessionPhotos, setSessionPhotos] = useState([]);

  const handleTakePhoto = async () => {
    const photo = await onTakePhoto();
    if (photo) {
      const { uri } = await MediaLibrary.createAssetAsync(
        `file://${photo?.path}`
      );
      setSessionPhotos((prev) => [...prev.slice(-4), uri]);
    }
  };

  const openPhotos = () => {
    switch (Platform.OS) {
      case "ios":
        Linking.openURL("photos-redirect://");
        break;
      case "android":
        Linking.openURL("content://media/internal/images/media");
        break;
      default:
        console.log("Could not open gallery app");
    }
  };
  return (
    <View style={styles.container}>
      {showConfig && (
        <View style={styles.optionsContainer}>
          {configOptions.map(({ iconName, ...rest }, i) => (
            <CameraConfigOption key={i} icon={{ name: iconName }} {...rest} />
          ))}
        </View>
      )}
      <View style={styles.mainMenu}>
        <MiniaturesPhotosButton photos={sessionPhotos} onPress={openPhotos} />

        <Pressable
          onPress={handleTakePhoto}
          style={styles.takePhotoPressable}
        />

        <Pressable
          onPress={() => setShowConfig((prev) => !prev)}
          style={[
            styles.configPressable,
            {
              backgroundColor: showConfig ? "white" : "rgba(255 255 255 / 0.2)",
            },
          ]}
        >
          <MaterialCommunityIcons
            name={showConfig ? "movie-open-cog" : "movie-cog"}
            size={30}
            color={showConfig ? "black" : "white"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraGui;
