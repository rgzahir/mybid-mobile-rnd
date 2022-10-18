import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CredentialFilter } from "../../dummyData";
import { CheckActiveFilter } from "../../functions";
import { Primary } from "../../styles";

type AvailableCredentialFilterProps = {
  setCurrentFilter: Function;
  currentFilter: string;
};

export const AvailableCredentialFilter: React.FC<
  AvailableCredentialFilterProps
> = ({setCurrentFilter, currentFilter}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 16, marginBottom: 16}}>
      {CredentialFilter.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={CheckActiveFilter(item, currentFilter)}
            onPress={() => {
              setCurrentFilter(item);
            }}>
            <Text style={{color: Primary.primary_blue}}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AvailableCredentialFilter;
