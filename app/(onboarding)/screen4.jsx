import { View } from "react-native";
import CustomText from "../../components/CustomText";
import tw from "../../lib/tailwind";

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <CustomText
        style={tw.style("text-primary text-[28px] text-center font-pbold")}
      >
        Lorem ipsum dolor sit.
      </CustomText>
      <CustomText
        style={tw.style("text-xs text-primary text-center mt-3 font-pregular")}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </CustomText>
    </View>
  );
};

export default Screen4;
