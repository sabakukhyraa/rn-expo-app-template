import { View } from "react-native";
import tw from "../../lib/tailwind";
import CustomText from "../../components/CustomText";
import { useGlobalContext } from "../../context/GlobalProvider";

const Screen1 = () => {
  const { onboardingState, setOnboardingState } = useGlobalContext();

  // without continue button
  const pressHandler = (someParameter) => {
    // state ayarlama
    setOnboardingState((old) => old + 1);
  };

  return (
    <View style={tw.style("bg-white flex-1 items-center")}>
      <CustomText
        style={tw.style("text-[28px] text-primary text-center font-pbold")}
      >
        Tell us about yourself!
      </CustomText>
      <CustomText
        style={tw.style("text-xs text-primary text-center mt-3 font-pregular")}
      >
        To give you a better experience we need {"\n"}your personal information
      </CustomText>
    </View>
  );
};

export default Screen1;
