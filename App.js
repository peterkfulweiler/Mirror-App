import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
export default function App() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.front);
  //const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      //const hasMediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      //setHasMediaLibraryPermission(hasMediaLibraryPermission.status === "granted")
    })();
  }, [])

  if (hasCameraPermission === undefined) {
    return <Text> Requesting permissions...</Text>
  }
  else if (!hasCameraPermission) {
    return <Text> Permissions for camera not granted. Change in Settings to Access App</Text>
  }

  return (
    <Camera style={styles.container} type={type}>
   </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
