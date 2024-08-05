import { Text } from "react-native";
import tw from "../lib/tailwind";

export default CustomText = (props) => {
  return (
    <Text {...props} style={[tw.style("font-pmedium"), props.style]}>
      {props.children}
    </Text>
  );
};
