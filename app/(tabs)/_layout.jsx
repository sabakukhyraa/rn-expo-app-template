import { Image, View } from "react-native";
import CustomText from "../../components/CustomText";
import { Redirect, Tabs } from "expo-router";
import { icons } from "../../constants";
import tw from "../../lib/tailwind";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      style={tw.style("flex flex-col items-center gap-2", {
        transform: [{ scale: focused ? 1.05 : 1 }],
      })}
    >
      <Image source={icon} tintColor={color} style={tw.style("w-6 h-6")} />
      <CustomText
        style={tw.style(
          `text-xs ${
            focused ? "font-psemibold text-secondary-pale" : "font-pmedium"
          }`
        )}
      >
        {name}
      </CustomText>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4A709C",
          tabBarInactiveTintColor: "#0D141C",
          tabBarStyle: {
            backgroundColor: "#F7FAFC",
            height: 75,
            borderTopWidth: 1,
            borderTopColor: "#E8EDF5",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="screen"
          options={{
            title: "Screen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.screen}
                color={color}
                name="Screen"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="screen2"
          options={{
            title: "Screen2",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.screen2}
                color={color}
                name="Screen2"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
