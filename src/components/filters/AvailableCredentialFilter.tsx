import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CredentialFilter } from "../../dummyData";
import { CheckActiveFilter } from "../../functions";
import { FlexDirectionRow, marginDynamic, Primary } from "../../styles";

export const AvailableCredentialFilter: FunctionComponent<
  TAvailableCredentialFilterProps
> = ({ currentFilter, setCurrentFilter }) => {
  return (
    <View style={{ ...FlexDirectionRow, ...marginDynamic(16, 0, 16) }}>
      {CredentialFilter.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              setCurrentFilter(item);
            }}
            style={CheckActiveFilter(item, currentFilter)}
          >
            <Text style={{ color: Primary.primary_blue }}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AvailableCredentialFilter;
