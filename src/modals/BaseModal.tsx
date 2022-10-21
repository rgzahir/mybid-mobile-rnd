import React, { Fragment, FunctionComponent } from "react";
import { Image, Modal } from "react-native";

import { borderRadiusDynamic, dimensionDynamic, PositionAbsolute } from "../styles";

export const BaseModal: FunctionComponent<TBaseModalProps> = ({
  Detail,
  indicator,
  pushNextModalFunction,
  pushNextModalFunction_1,
  setIndicator,
}) => {
  const Discover_bg = "../media//discover_bg.png";
  return (
    <Fragment>
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
          pushNextModalFunction={pushNextModalFunction}
          pushNextModalFunction_1={pushNextModalFunction_1}
          setIndicator={setIndicator}
        />
      </Modal>
    </Fragment>
  );
};

export default BaseModal;
