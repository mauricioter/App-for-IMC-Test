import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  formContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    right: "auto",
    marginTop: 30,
    padding: 10
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 20
  },
  formInput: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 10,
    paddingLeft: 10,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: " 90%",
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff"
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
  exhibitionResultImc: {
    width: "100%",
    height: "50%"
  },
  listImc: {
    marginTop: 20,
  },
  resultImcItem: {
    fontSize: 30,
    color: "red",
    height: 50,
    width: "100%"
  },
  textResultImcList: {
    fontSize: 20,
    color: "red"
  }
})

export default style