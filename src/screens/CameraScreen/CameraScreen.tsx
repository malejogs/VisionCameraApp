import { useEffect, useReducer, useRef } from "react";
import { Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from "react-native-vision-camera";
import { CameraGui } from "../../layouts/CameraGui";
import {
  FLASH_OPTIONS,
  FPS_OPTIONS,
  RESOLUTION_OPTIONS,
  cameraConfigReducer,
  getConfigOptions,
} from "./CameraScreen.logic";

const CameraScreen = () => {
  const cameraRef = useRef<Camera>();

  const { hasPermission, requestPermission: requestCameraPermission } =
    useCameraPermission();

  const [permissionResponse, requestMediaPermissions] =
    MediaLibrary.usePermissions();

  const [cameraConfigState, dispatch] = useReducer(cameraConfigReducer, {
    isFrontCamera: false,
    flashOption: 0,
    fpsOption: FLASH_OPTIONS.length,
    resolutionOption: 2,
    hasShutterSound: false,
    hasPhotoHdr: false,
  });

  const device = useCameraDevice(
    cameraConfigState.isFrontCamera ? "front" : "back"
  );

  const format = useCameraFormat(device, [
    {
      fps: FPS_OPTIONS[cameraConfigState.fpsOption],
      photoResolution:
        RESOLUTION_OPTIONS[cameraConfigState.resolutionOption].option,
      photoHdr: cameraConfigState.hasPhotoHdr,
    },
  ]);

  useEffect(() => {
    if (!hasPermission) requestCameraPermission();
    if (permissionResponse?.status !== "granted") requestMediaPermissions();
  }, []);

  if (!hasPermission) return <Text>No permissions</Text>;
  if (device == null) return <Text>No Camera</Text>;

  const configOptions = getConfigOptions({ cameraConfigState, dispatch });

  const handleTakePhoto = async () => {
    const photo =
      cameraRef.current &&
      (await cameraRef.current?.takePhoto({
        flash: FLASH_OPTIONS[cameraConfigState.flashOption].option,
        enableShutterSound: cameraConfigState.hasShutterSound,
      }));
    return photo;
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        device={device}
        isActive={true}
        photo={true}
        format={format}
        photoHdr={format.supportsPhotoHdr}
        enableZoomGesture
      />
      <CameraGui configOptions={configOptions} onTakePhoto={handleTakePhoto} />
    </View>
  );
};

export default CameraScreen;
