import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Accent, AlignItemCenter, FlexDirectionRow, fontBasic, JustifySpaceBetween, marginDynamic } from "../../styles";
import { NormalIconButton } from "../buttons";

export const CredentialCardHeader: FunctionComponent<
  TCredentialCardHeaderProps
> = ({ data, isShownLocal, setIsShownLocal }) => {
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
