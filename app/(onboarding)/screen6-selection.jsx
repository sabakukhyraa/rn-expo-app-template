import { Image, View } from "react-native";
import CustomText from "../../components/CustomText";
import tw from "../../lib/tailwind";
import Selection from "./components/Selection";
import { icons } from "../../constants";

const Screen6 = () => {
  return (
    <View style={tw.style("bg-white flex-1 items-center")}>
      <Image style={tw.style("mt-13 mb-8")} source={icons.someIcon} />
      <CustomText
        style={tw.style("text-2xl text-primary text-center font-pbold")}
      >
        Lorem ipsum dolor sit amet.
      </CustomText>
      <CustomText
        style={tw.style(
          "text-base text-primary text-center mt-3 mb-14 font-pregular"
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
        repellat.
      </CustomText>
      <Selection
        options={[
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
        ]}
      />
    </View>
  );
};

export default Screen6;
