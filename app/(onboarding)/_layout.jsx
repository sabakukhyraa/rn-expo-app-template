import { Image, Pressable, View } from "react-native";
import { useEffect, useState } from "react";
import CustomText from "../../components/CustomText";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../../lib/tailwind";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";

const OnboardingLayout = () => {
  const onboardingData = [
    {
      number: 1,
      type: "type-1",
      route: "/route-1",
    },
    {
      number: 2,
      type: "type-1",
      route: "/route-2",
    },
    {
      number: 3,
      type: "type-1",
      route: "/route-3",
    },
    {
      number: 4,
      type: "type-2",
      route: "/route-4",
    },
    {
      number: 5,
      type: "type-2",
      route: "/route-5",
    },
    {
      number: 6,
      type: "type-2",
      route: "/route-6",
    },
  ];

  const { onboardingState, setOnboardingState } = useGlobalContext();

  const currentScreen = onboardingData.find((e) => e.number == onboardingState);

  useEffect(() => {
    if (currentScreen) {
      router.push(currentScreen.route);
    }
  }, [onboardingState]);

  const handleContinue = () => {
    if (onboardingState < onboardingData.length) {
      setOnboardingState((prev) => prev + 1);
    } else {
      router.push("/home");
    }
  };

  const handleBack = () => {
    setOnboardingState((prev) => prev - 1);
  };

  return (
    <SafeAreaView style={tw.style("bg-white p-5 flex-1")}>
      <View style={tw.style("bg-white flex-1 pt-14")}>
        {onboardingState > 1 && (
          <Pressable
            style={tw.style("absolute", { textAlign: "center" })}
            onPress={handleBack}
          >
            <Image
              source={icons.arrow}
              tintColor={"#222222"}
              style={tw.style("w-6 h-6")}
            />
          </Pressable>
        )}
        <Stack>
          <Stack.Screen
            name="screen1"
            options={{
              title: "Screen1",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screen2"
            options={{
              title: "Screen2",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screen3"
            options={{
              title: "Screen3",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screen4"
            options={{
              title: "Screen4",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screen5"
            options={{
              title: "Screen5",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="screen6"
            options={{
              title: "Screen6",
              headerShown: false,
            }}
          />
        </Stack>
        <Pressable
          style={tw.style("button mb-6 mt-16", { textAlign: "center" })}
          onPress={handleContinue}
        >
          <CustomText style={tw.style("text-button")}>Continue</CustomText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingLayout;
