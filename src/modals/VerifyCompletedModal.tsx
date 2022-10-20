import React from "react";
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

type TVerifyCompletedModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

export const VerifyCompletedModal: React.FC<TVerifyCompletedModalProps> = ({
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
          color={Neutral.neutral_9}
        />
      </View>

      <View
        style={{
          ...JustifySpaceCenter,
          ...AlignItemCenter,
          ...marginDynamic("32%"),
        }}
      >
        <Image source={QR_CODE} style={{ ...marginDynamic(0, 0, 32) }} />

        <TextItem_3
          subText="Your verified details were successfully shared with Recruitement Sdn. Bhd. "
          subTitle="You're all set"
          color_1={Neutral.neutral_10}
          color_2={Neutral.neutral_7}
          width="80%"
        />
      </View>

      <GeneralButton label="Done" onPressHandler={() => {}} marginTop="30%" />
      <TextButtonCenter label="View Details" onPressHandler={() => {}} />
    </View>
  );
};

export default VerifyCompletedModal;
