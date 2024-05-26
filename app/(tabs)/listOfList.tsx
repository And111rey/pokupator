import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "@/components/Screen";
import { AsyncStorageActions } from "@/hooks/useDataAsyncStorage";

export default function ListOfListScreen() {
  const ASDataAction = new AsyncStorageActions();

  const [keys, setKeyse] = useState(["@baxa", "@bath"]);
  useEffect( () => {
    // const data =  ASDataAction.getAllKeys()
    // setKeyse(data);
  },[ASDataAction]);

  return (
    <Screen>
      {keys.map((el, i) => {
        return <Text key={i}>{el}</Text>;
      })}
    </Screen>
  );
}
