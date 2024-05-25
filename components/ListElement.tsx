import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "@/components/Button"
import {useState} from 'react'


interface ListElementProps {
  data: string;
}

export default function ListElement({ data }: ListElementProps) {
   

  const [isDone, setIsDone] = useState<boolean>(false)


  const style = useStyles(isDone);
  return (
    <View style={style.wrap}>
      <View style={{ width: "80%" }}>
        <Text style={style.txt}>{data}</Text>
      </View>

      <Button title={isDone? "Return": "Done" } onPress={()=>setIsDone((p) => !p)}/>
      <TouchableOpacity
       onPress={()=>setIsDone((p) => !p)}
        style={{
          width: "15%",
          height: "80%",
          borderRadius: 10,
          // backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.9
        }}
      >
        <Text
          allowFontScaling
          style={style.btnText}
        >
       {isDone? "Return": "Done" }
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const useStyles = (isDone: boolean) => {
  return StyleSheet.create({
    wrap: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 0.5,
      borderRadius: 5,
      // borderColor: "white",
      width: "100%",
      marginVertical: 5,
      backgroundColor:'white',
      // backgroundColor:'#2a085c',
      opacity: isDone? 0.4:.8
    },
    txt: {
      padding: 5,
      fontSize: 20,
      fontWeight: "bold",
      color:  "#c1a3e6",
    },
    btnText: {
      fontSize: 18,
      fontWeight: "bold",
      color: isDone? "red":"green" 
    }
  });

};
