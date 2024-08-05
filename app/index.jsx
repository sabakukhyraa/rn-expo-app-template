import { ImageBackground, StyleSheet, View } from "react-native";
import tw from "../lib/tailwind";
import { useState } from "react";
import { Redirect, useRootNavigationState } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "../components/CustomText";
import { images } from "../constants";

export default function App() {
  const [isLogged, setIsLogged] = useState(true);
  const RootNavigation = useRootNavigationState();

  if (isLogged && RootNavigation?.key) {
    return <Redirect href="/gender" />;
  }

  return (
    <View style={tw.style("flex-1")}>
      <ImageBackground
        source={images.image}
        resizeMode="cover"
        style={tw.style("flex-1 justify-center")}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, .8)", "transparent"]}
          style={styles.overlayView}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <SafeAreaView style={tw.style("p-5 flex-1 justify-end gap-4")}>
          <CustomText
            style={tw.style("text-white text-3xl font-pbold leading-10")}
          >
            Mindfulness for any moment
          </CustomText>
          <CustomText style={tw.style("text-white font-pregular")}>
            Stress less. Move more. Sleep soundly.{"\n"} There’s something for
            everyone.
          </CustomText>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayView: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
