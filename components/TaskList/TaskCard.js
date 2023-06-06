import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function TaskCard() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log("pressed");
      }}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/Union.png")}
          style={styles.avatarImage}
        />
        <Text style={styles.title}>Task Card</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9FB",
    height: 72,
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 4,
    paddingBottom: 16,
    justifyContent: "center",
    borderRadius: 16,
    marginBottom: 15,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    // width: 70,
    // height: 20,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#30374F",
  },
  avatarImage: {
    // width: 30,
    // height: 30,
    marginRight: 15,
  },
});
