import { View, Text, ScrollView, StyleSheet } from "react-native";

import Screen from "@/components/Screen";
import ListElement from "@/components/ListElement";

export default function ShoppingList() {
  const styles = useStyles();
  return (
    <Screen>
      <ScrollView style={styles.scrollContainer}>
        <ListElement data={"MOLOKsdlfjslkdjfskldjfksjdlkfjslkdjflksjdfklsjdlkfjsldkfjslkjO"} />
        <ListElement data={"Smetana"}  />
        <ListElement data={"Okorok"} />
      </ScrollView>
    </Screen>
  );
}

const useStyles = () => {
  return StyleSheet.create({
    scrollContainer: {
      alignContent: "center",
      marginHorizontal: 10,
    },
  });
};
