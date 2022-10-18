import React from "react";
import { Text, View } from "react-native";

import { CurrentStatus, CurrentStatusImg, CurrentStatusImgText, CurrentStatusItem } from "../styles";

export const DiscoverShowStatus = () => {
  return (
    <View style={CurrentStatus}>
      <View style={CurrentStatusItem}>
        <View style={CurrentStatusImg} />
        <Text style={CurrentStatusImgText}>Basics</Text>
      </View>
      <View style={CurrentStatusItem}>
        <View style={CurrentStatusImg} />
        <Text style={CurrentStatusImgText}>Identity</Text>
      </View>
      <View style={CurrentStatusItem}>
        <View style={CurrentStatusImg} />
        <Text style={CurrentStatusImgText}>Finance</Text>
      </View>
      <View style={CurrentStatusItem}>
        <View style={CurrentStatusImg} />
        <Text style={CurrentStatusImgText}>Education</Text>
      </View>
    </View>
  );
};

export default DiscoverShowStatus;
