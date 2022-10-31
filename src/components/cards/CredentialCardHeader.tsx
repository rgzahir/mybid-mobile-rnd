import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { UpdateTextColor } from "../../functions/CredentialCard";
import { Accent, AlignItemCenter, FlexDirectionRow, fontBasic, JustifySpaceBetween, marginDynamic } from "../../styles";
import { NormalIconButton } from "../buttons";

export const CredentialCardHeader: FunctionComponent<
  TCredentialCardHeaderProps
> = ({ data, isShownLocal, setIsShownLocal }) => {
  const [textColor_1, setTextColor_1] = useState(Accent.accent_blue_10);
  const [textColor_2, setTextColor_2] = useState(Accent.accent_blue_5);
  const { credentialName, credentialProvider } = data;

  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
        }}
        onPress={() => {
          setIsShownLocal(!isShownLocal);
          UpdateTextColor(isShownLocal, setTextColor_1, setTextColor_2);
        }}
      >
        <View>
          <Text style={{ ...fontBasic(14, "bold", textColor_1) }}>
            {credentialName}
          </Text>
          <Text
            style={{
              ...fontBasic(14, "600", textColor_2, 1, "italic"),
              ...marginDynamic(8),
            }}
          >
            {credentialProvider}
          </Text>
        </View>

        {isShownLocal ? (
          <NormalIconButton
            name="arrow-up2"
            size={16}
            color={Accent.accent_blue_5}
            disabledPress={true}
          />
        ) : (
          <NormalIconButton
            name="circle-right"
            size={16}
            color={Accent.accent_blue_5}
            disabledPress={true}
          />
        )}
      </TouchableOpacity>
    </Fragment>
  );
};

export default CredentialCardHeader;
