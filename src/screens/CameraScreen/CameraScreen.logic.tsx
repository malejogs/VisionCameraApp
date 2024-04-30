import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { configOption } from "./CameraScreen.d";

export const FLASH_OPTIONS: {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  option: "off" | "auto" | "on";
}[] = [
  { icon: "flash-off", option: "off" },
  { icon: "flash-auto", option: "auto" },
  { icon: "flash", option: "on" },
];

export const FPS_OPTIONS = [10, 15, 25, 30, 60];

export const RESOLUTION_OPTIONS = [
  { name: "HD", option: { height: 1280, width: 720 } },
  { name: "FHD", option: { height: 1920, width: 1080 } },
  { name: "2K", option: { height: 2560, width: 1440 } },
  { name: "4K", option: { height: 3840, width: 2160 } },
];

export const cameraConfigReducer = (
  state: {
    isFrontCamera: boolean;
    flashOption: number;
    fpsOption: number;
    resolutionOption: number;
    hasShutterSound: boolean;
    hasPhotoHdr: boolean;
  },
  action: {
    type:
      | "flipCamera"
      | "changeFlash"
      | "turnShutterSound"
      | "changeFPS"
      | "changeHDR"
      | "changeResolutionOption";
  }
) => {
  switch (action.type) {
    case "flipCamera": {
      return {
        ...state,
        isFrontCamera: !state.isFrontCamera,
      };
    }
    case "changeFlash": {
      return {
        ...state,
        flashOption: (state.flashOption + 1) % FLASH_OPTIONS.length,
      };
    }
    case "turnShutterSound": {
      return {
        ...state,
        hasShutterSound: !state.hasShutterSound,
      };
    }
    case "changeFPS": {
      return {
        ...state,
        fpsOption: (state.fpsOption + 1) % FPS_OPTIONS.length,
      };
    }
    case "changeHDR": {
      return {
        ...state,
        hasPhotoHdr: !state.hasPhotoHdr,
      };
    }
    case "changeResolutionOption": {
      return {
        ...state,
        resolutionOption:
          (state.resolutionOption + 1) % RESOLUTION_OPTIONS.length,
      };
    }
  }
};

export const getConfigOptions = ({
  dispatch,
  cameraConfigState,
}): configOption[] => [
  {
    onPress: () => dispatch({ type: "flipCamera" }),
    iconName: "camera-flip",
  },
  {
    onPress: () => dispatch({ type: "changeFlash" }),
    iconName: FLASH_OPTIONS[cameraConfigState.flashOption].icon,
  },
  {
    onPress: () => dispatch({ type: "turnShutterSound" }),
    iconName: cameraConfigState.hasShutterSound ? "bell-ring" : "bell-off",
  },
  {
    onPress: () => dispatch({ type: "changeFPS" }),
    content: (
      <>
        <Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
          {FPS_OPTIONS[cameraConfigState.fpsOption]}
        </Text>
        <Text style={{ fontSize: 10, color: "white" }}>FPS</Text>
      </>
    ),
  },
  {
    onPress: () => dispatch({ type: "changeHDR" }),
    iconName: cameraConfigState.hasPhotoHdr ? "hdr" : "hdr-off",
  },
  {
    onPress: () => dispatch({ type: "changeResolutionOption" }),
    content: (
      <>
        <Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
          {RESOLUTION_OPTIONS[cameraConfigState.resolutionOption].name}
        </Text>
      </>
    ),
  },
];
