import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import nextId from "react-id-generator";
import Screen from "@/components/Screen";
import Button from "@/components/Button";
 import {AsyncStorageActions} from "@/hooks/useDataAsyncStorage"

type ListElement = {
  id: string;
  el: string;
};

export default function Add() {
  const [list, setList] = useState<ListElement[] | []>([]);
  const [text, setText] = useState<string>("");
  const [listName, setListName] = useState<string>("");
  const style = useStyle();
  
  const ASDataAction = new AsyncStorageActions()


  const addElement = () => {
    if (text) {
      const element = { id: nextId(listName), el: text };
      setList((prevList) => [...prevList, element]);
      setText("");
    }
  };

  const addListName = () => {
    setListName(text);
    setText("");
  };

  const deleteElement = (id: string) => {
    setList((p) => p.filter((el) => el.id != id));
  };
 

  useEffect(() => {
    ASDataAction.getData(listName);
    ASDataAction.getAllKeys()
  });

  return (
    <Screen styles={{ alignItems: "center" }}>
      {listName ? (
        <>
          <Text style={style.title}>{listName}</Text>
          <ScrollView style={style.renderArea}>
            {list.map((e, i) => {
              return (
                <TouchableOpacity
                  onPress={() => deleteElement(e.id)}
                  style={style.renderedElem}
                  key={i}
                >
                  <Text style={{ color: "white" }}>{`${i + 1}) ${e.el}`}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Text style={{ color: "white", fontSize: 20 }}>What to buy?</Text>
          <TextInput value={text} onChangeText={setText} style={style.txtInp} />
          <View style={style.btnBox}>
            <Button title="Add to list" onPress={addElement} />
            <Button
              title="SAVE"
              type="primary"
              onPress={() => ASDataAction.storeData(listName, list)}
            />
          </View>
        </>
      ) : (
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text style={{ color: "white", fontSize: 20 }}>List name</Text>
          <TextInput value={text} onChangeText={setText} style={style.txtInp} />
          <Button
            title="Create"
            onPress={() => {
              addListName();
            }}
          />
        </View>
      )}
    </Screen>
  );
}

const useStyle = () => {
  return StyleSheet.create({
    title: {
      color: "#5b7db0",
      fontSize: 26,
      fontWeight: "bold",
      margin: 10,
    },
    renderArea: {
      width: "70%",
    },
    renderedElem: {
      padding: 10,
      margin: 5,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "white",
    },
    txtInp: {
      width: "70%",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 4,
      margin: 10,
      color: "white",
    },
    btnBox: {
      flexDirection: "row",
    },
  });
};
