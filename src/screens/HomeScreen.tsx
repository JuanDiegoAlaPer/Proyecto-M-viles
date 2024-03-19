import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);
  const snapPoints = ["45%"];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../assets/images/epicgames.png")}
          style={styles.image}
        />
        <Text style={{ fontSize: 20, marginTop: 10, color: "white" }}>
          Bienvenido a Epic Games
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSnapPress(0)}
        >
          <Text style={{ color: "#0080FB", fontSize: 16, fontWeight: "600" }}>
            Ofertas
          </Text>
        </TouchableOpacity>
        {/* <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetView>
            <Text>Hello</Text>
          </BottomSheetView>
        </BottomSheet> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    height: 130,
    width: 180,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 130,
    height: 130,
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#f4f4f4",
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
});
