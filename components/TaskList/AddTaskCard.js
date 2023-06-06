import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/todo";

export default function AddTaskCard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTask({ title: title, description: description }));
    setTitle("");
    setDescription("");
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.innerContainer}>
          <Image
            source={require("../../assets/Union.png")}
            style={styles.avatarImage}
          />
          <Text style={styles.title}>Add Task</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.inputView}>
              <Text style={styles.inputLabel}>Title:</Text>
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.inputField}
              />
              <Text style={styles.inputLabel}>Description:</Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                style={[styles.inputField, styles.textArea]}
                multiline
              />
            </View>
            <View style={styles.buttonView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Discard</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonAdd]}
                onPress={handleSubmit}
              >
                <Text style={styles.textStyle}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    marginBottom: 20,
    fontFamily: "Inter-500",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter-500",
    color: "#ABB6C8",
  },
  avatarImage: {
    marginRight: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputView: {
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "Inter-600",
    fontWeight: "600",
    marginBottom: 5,
  },
  inputField: {
    paddingVertical: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    fontFamily: "Inter-500",
    fontWeight: "500",
    height: 100,
    textAlignVertical: "top",
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    fontFamily: "Inter-500",
    fontWeight: "500",
    width: "30%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#f0222f",
  },
  buttonAdd: {
    backgroundColor: "#64eb34",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
