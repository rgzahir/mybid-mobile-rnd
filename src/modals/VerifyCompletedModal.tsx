import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";

import { BackButton, GeneralButton, TextButtonCenter } from "../components/buttons";
import { TextItem_3 } from "../components/TextItem";
import {
  AlignItemCenter,
  backgroundColorDynamic,
  FlexOne,
  FlexRow,
  JustifyFlexEnd,
  JustifySpaceCenter,
  marginDynamic,
  Neutral,
  paddingDynamic,
} from "../styles";

export const VerifyCompletedModal: FunctionComponent<TModalProps> = ({
  indicator,
  setIndicator,
}) => {
  const QR_CODE = require("../media/Frame.png");
  const updateVerifyCompletedModal = () => {
    setIndicator(!indicator);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...backgroundColorDynamic(Neutral.neutral_1),
        ...paddingDynamic(48, 16, 0, 16),
      }}
    >
      <View
        style={{
          ...FlexRow,
          ...JustifyFlexEnd,
          ...paddingDynamic(0, 16),
        }}
      >
        <BackButton
          label="X"
          onPressHandler={updateVerifyCompletedModal}
          fontColor={Neutral.neutral_9}
        />
      </View>

      <View
        style={{
          ...AlignItemCenter,
          ...JustifySpaceCenter,
          ...marginDynamic("32%"),
        }}
      >
        <Image source={QR_CODE} style={{ ...marginDynamic(0, 0, 32) }} />

        <TextItem_3
          color_1={Neutral.neutral_10}
          color_2={Neutral.neutral_7}
          subText="Your verified details were successfully shared with Recruitement Sdn. Bhd. "
          subTitle="You're all set"
          width="80%"
        />
      </View>

      <GeneralButton
        label="Done"
        marginTop="30%"
        onPressHandler={updateVerifyCompletedModal}
      />
      <TextButtonCenter label="View Details" onPressHandler={() => {}} />
    </View>
  );
};

export default VerifyCompletedModal;
