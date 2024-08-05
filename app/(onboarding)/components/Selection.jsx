import { Pressable, ScrollView, View } from "react-native";
import CustomText from "../../../components/CustomText";
import tw from "../../../lib/tailwind";
import { useState } from "react";

const Selection = ({ options }) => {
  const [selection, setSelection] = useState();

  return (
    <ScrollView style={tw.style("w-full")}>
      {options.map((content, index) => (
        <View key={index} style={tw.style("w-full")}>
          <Pressable
            style={tw.style(
              `w-full border mb-[14px] p-[14px] rounded-xl ${
                selection == index
                  ? "border-transparent bg-secondary"
                  : "border-[#E1E1E1]"
              }`
            )}
            onPress={() => setSelection(index)}
          >
            <CustomText
              style={tw.style(
                `${
                  selection == index ? "text-white" : "text-primary"
                } text-center`
              )}
            >
              {content}
            </CustomText>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default Selection;
