import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    borderRadius: 60,
    alignItems: "center",
    width: "100%",
  },
  numerImc: {
    fontSize: 50,
    color: "#FF0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  share: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5
  },
  shareText: {
    color: "#ffffff",
    fontWeight: "bold",
    paddingHorizontal: 30
  }
})

export default style