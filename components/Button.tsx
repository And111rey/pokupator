import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface BtnProps {
  title: string;
  onPress: () => void;
  type?: "primary" | "basic" | 'remove'; 
}

export default function Button({ title, onPress , type='basic'}: BtnProps) {
  const style = useStyles(type);

  return (
    <TouchableOpacity onPress={() => onPress()} style={style.btnWrap}>
      <Text allowFontScaling style={style.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const useStyles = (type:string) => {
  return StyleSheet.create({
    btnWrap: {
      padding: 10,
      borderColor: type == "primary"? "#5b7db0": 'white',
      borderWidth: 1,
      borderRadius: 4,
      margin: 20,
      backgroundColor: type == "primary"? "#5b7db0": ""

    },

    btnText: {
      fontSize: 18,
      fontWeight: "bold",
      color:  type == "primary"? "white": "#5b7db0"
    },
  });
};
