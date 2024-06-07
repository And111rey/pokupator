import { View, Text , ScrollView, ViewStyle, TouchableOpacity} from "react-native";
import React, { useState, useEffect, PropsWithChildren } from "react";
import Screen from "@/components/Screen";
import { AsyncStorageActions } from "@/hooks/useDataAsyncStorage";
import { router , useLocalSearchParams, useGlobalSearchParams} from "expo-router";


export default function ListOfListScreen() {
  const ASDataAction = new AsyncStorageActions();
  const {data} = useLocalSearchParams() 

  const  [list , setList] = useState<String[]| []>([])

  const upDataKeyList = async () => {
    const data = await ASDataAction.getAllKeys()
    setList(data)
  }
  useEffect(()=>{
    upDataKeyList()
    // setList(data.split(','))
  },[data])

  const [keys, setKeyse] = useState(["@baxa", "@bath"]);
 

  return (
    <Screen styles={{}}>
      <ScrollView>
        <View style={{backgroundColor:'yello', alignItems:'center'}}> 
      {list.map((el, i) => {
        return <Card index={i} key={i}>{el}</Card>;
      })}
   </View>
      </ScrollView>
    
    </Screen>
  );
}
const askToRemove = () => {
  // router.push('modal')
}


type Props = PropsWithChildren<{
  index?: Number;
}>;

const Card = ({ children, index }: Props) => {

  const  isEven  = (index: Number) => {
    return index % 2 === 0;
  }

  return (
    <TouchableOpacity
    onLongPress={askToRemove}
      style={{
        // justifyContent:'center',
        // alignItems:'center',
        // height: 50,
        // width: "70%",
        // padding: 30,
        backgroundColor:  isEven(index) ? "#9ee8b2" : '#a2caf2',
        margin: 10,
        padding: 20,
        borderRadius: 4,
        // alignSelf: isEven(index) ? "flex-end" : null,
        maxWidth: "50%",
        // width:'50%',

      

        
      }}
    >
      <Text style={{ color:'#9e33c4', fontSize: 20, fontWeight:'bold'}}>{children}</Text>
    </TouchableOpacity>

  );
}