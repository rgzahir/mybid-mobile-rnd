import React from "react";
import { Text, View } from "react-native";

import { HighlightItem, HighlightPic, NormalMargin, NormalText, TextComment } from "../styles";

export const DiscoverHighlightItem = () => {
  return (
    <View>
      <View style={HighlightItem}>
        <View style={HighlightPic} />
        <View>
          <Text style={NormalText}>You just added your first credentials.</Text>
          <Text style={{...TextComment, ...NormalMargin}}>Today, 10:100AM</Text>
        </View>
      </View>
      <View style={HighlightItem}>
        <View style={HighlightPic} />
        <View>
          <Text style={NormalText}>You just added your first credentials.</Text>
          <Text style={{...TextComment, ...NormalMargin}}>Today, 10:100AM</Text>
        </View>
      </View>
      <View style={HighlightItem}>
        <View style={HighlightPic} />
        <View>
          <Text style={NormalText}>You just added your first credentials.</Text>
          <Text style={{...TextComment, ...NormalMargin}}>Today, 10:100AM</Text>
        </View>
      </View>
      <View style={HighlightItem}>
        <View style={HighlightPic} />
        <View>
          <Text style={NormalText}>You just added your first credentials.</Text>
          <Text style={{...TextComment, ...NormalMargin}}>Today, 10:100AM</Text>
        </View>
      </View>
      <View style={HighlightItem}>
        <View style={HighlightPic} />
        <View>
          <Text style={NormalText}>You just added your first credentials.</Text>
          <Text style={{...TextComment, ...NormalMargin}}>Today, 10:100AM</Text>
        </View>
      </View>
    </View>
  );
};

export default DiscoverHighlightItem;
