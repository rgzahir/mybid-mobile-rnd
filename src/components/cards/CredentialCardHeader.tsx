import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Accent, AlignItemCenter, FlexRow, fontBasic, JustifySpaceBetween, marginDynamic } from "../../styles";

type TCredentialCardHeaderProps = {
  isShownLocal?: boolean;
  setIsShownLocal?: Function;
  data?: any;
};

export const CredentialCardHeader: React.FC<TCredentialCardHeaderProps> = ({
  isShownLocal,
  setIsShownLocal,
  data,
}) => {
  const { credentialName, credentialProvider } = data;

  return (
    <View>
      <TouchableOpacity
        style={{
          ...FlexRow,
          ...AlignItemCenter,
          ...JustifySpaceBetween,
        }}
        onPress={() => {
          setIsShownLocal(!isShownLocal);
        }}
      >
        <View>
          <Text style={{ ...fontBasic(14, "bold", Accent.accent_blue_10) }}>
            {credentialName}
          </Text>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_5, 1, "italic"),
              ...marginDynamic(8),
            }}
          >
            {credentialProvider}
          </Text>
        </View>
        <Text style={{ ...fontBasic(16, "bold", Accent.accent_blue_5) }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CredentialCardHeader;
