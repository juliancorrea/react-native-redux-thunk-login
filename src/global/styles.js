import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginHeader: {
    height: 200,
    backgroundColor: "#ECECEC"
  },
  alignCenter: {
    alignItems: "center"
  },
  black: { color: "#000" },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700",
    paddingHorizontal: 10
  },

  googlePlusButton: { backgroundColor: "#dd4b39" },
  facebookButton: { backgroundColor: "#3B5998" },

  disabledButton : {
    backgroundColor: "rgba(149, 165, 166,1.0)"
  },
  text: {
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: "center"
  },

  imageContainer: {
    paddingTop: 20,
    flexDirection: "row"
  },

  image: {
    flex: 1,
    margin: 5,
    padding: 15,
    height: 50,
    width: 50
  },
  imageSquare: {
    flex: 1,
    height: 50,
    width: 50,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "rgba(55,55,55,0.3)",
    borderRadius: 10,
    alignItems: "center"
  }
});

export default styles;
