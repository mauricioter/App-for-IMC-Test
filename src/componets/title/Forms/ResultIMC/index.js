import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import style from "./style";

export default function ResultIMC(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " + props.resultImc,

    })
  }

  return (
    <View style={style.resultImc}>
      <View style={style.boxShareButton}>
        <Text style={style.information}>
          {props.messageResultImc}
        </Text>
        <Text style={style.numerImc}>
          {props.resultImc}
        </Text>
        <TouchableOpacity
          onPress={onShare}
          style={style.share}>
          <Text style={style.shareText}>
            Share
          </Text>
        </TouchableOpacity>
        <View />
      </View>
    </View>
  )
}