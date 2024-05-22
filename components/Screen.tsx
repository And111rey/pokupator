import { View, StyleSheet, ViewStyle } from "react-native";
import type { PropsWithChildren, ReactElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

type Props = PropsWithChildren<{
  styles?: ViewStyle;
}>;

export default function Screen({ children, styles }: Props) {
  const style = useStyles();
  return (
    <View style={style.wrap}>
      <View style={[style.screenConatiner, styles]}>{children}</View>
    </View>
  );
}

const useStyles = () => {
  return StyleSheet.create({
    wrap: {
      width: "100%",
      height: "100%",
      backgroundColor: "#c1a3e6",
      justifyContent: "flex-end",
    },
    screenConatiner: {
      backgroundColor: "#c1a3e6",
      width: "100%",
      height: "90%",
    },
  });
};
