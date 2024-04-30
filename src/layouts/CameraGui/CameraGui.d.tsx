import { PhotoFile } from "react-native-vision-camera";
import { configOption } from "../../screens/CameraScreen";

export type CameraGuiProps = {
  configOptions: configOption[];
  onTakePhoto: () => Promise<PhotoFile>;
};
