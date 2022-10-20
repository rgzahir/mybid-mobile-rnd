import React from "react";
import { Image, Modal, View } from "react-native";

import { borderRadiusDynamic, dimensionDynamic, PositionAbsolute } from "../styles";

type TBaseModalProps = {
  indicator: boolean;
  setIndicator: any;
  Detail: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

export const BaseModal: React.FC<TBaseModalProps> = ({
  indicator,
  setIndicator,
  Detail,
  pushNextModalFunction,
  pushNextModalFunction_1,
}) => {
  const Discover_bg = "../media//discover_bg.png";
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={indicator}
        onRequestClose={() => {
          setIndicator(!indicator);
        }}
      >
        <Image
          source={require(Discover_bg)}
          style={{
            ...PositionAbsolute,
            ...borderRadiusDynamic(32),
            ...dimensionDynamic("64%", "120%"),
          }}
          resizeMode="stretch"
        />

        <Detail
          indicator={indicator}
          setIndicator={setIndicator}
          pushNextModalFunction={pushNextModalFunction}
          pushNextModalFunction_1={pushNextModalFunction_1}
        />
      </Modal>
    </View>
  );
};

export default BaseModal;
