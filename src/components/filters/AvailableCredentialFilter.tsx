import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CredentialFilter } from "../../dummyData";
import { CheckActiveFilter } from "../../functions";
import {
  FlexDirectionRow,
  fontBasic,
  marginDynamic,
  POPPINS_REGULAR,
  Primary,
} from "../../styles";

export const AvailableCredentialFilter: FunctionComponent<
  IAvailableCredentialFilterProps
> = ({ currentFilter, setCurrentFilter }): JSX.Element => {
  return (
    <View style={{ ...FlexDirectionRow, ...marginDynamic(16, 0, 16) }}>
      {CredentialFilter.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => {
              setCurrentFilter(item);
            }}
            style={CheckActiveFilter(currentFilter, item)}
          >
            <Text
              style={{
                fontFamily: POPPINS_REGULAR,
                ...fontBasic(16, "400", Primary.primary_blue),
                lineHeight: 20,
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AvailableCredentialFilter;
