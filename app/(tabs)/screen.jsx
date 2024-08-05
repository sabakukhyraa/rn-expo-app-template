import { View } from "react-native";
import CustomText from "../../components/CustomText";
import tw from "../../lib/tailwind";

const Screen = () => {
  return (
    <View style={tw.style("flex-1 items-center justify-center")}>
      <CustomText style={tw.style("text-4xl font-pbold")}>Screen</CustomText>
    </View>
  );
};

export default Screen;
