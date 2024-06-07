import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'

type ListElement = {
    id: string;
    el: string;
  };
  
export  class AsyncStorageActions {


    async storeData (name: string, value: ListElement[]) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(name, jsonValue);
            console.log("SAVE, ", jsonValue);
            // plase for loader
          } catch (e) {
            console.log("problem saving data")
          }
     }
     async getData  (listName: string) {
        try {
          const jsonValue = await AsyncStorage.getItem(listName);
          const keys = await AsyncStorage.getItem('@key')
          if (jsonValue !== null) {
            // value previously stored
          }
          console.log(`existing by ${listName} >>> ` , jsonValue);
          return jsonValue != null ? JSON.parse(jsonValue) : null;

        } catch (e) {
          // error reading value
        }
      };

      async  getAllKeys   ()  {
        console.log("getKeys")
        let keys=[]
        try {
           keys =  await AsyncStorage.getAllKeys() || []
        } catch(e) {
          console.log("ERRRRR ")
        }
        return keys
        // example console.log result:
        // ['@MyApp_user', '@MyApp_key']
      }


}



