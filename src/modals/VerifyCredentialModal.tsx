import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { GeneralButton, TextButtonCenter } from "../components/buttons";
import { TextItem_1 } from "../components/TextItem";
import { backgroundColorDynamic, borderRadiusDynamic, FlexOne, fontBasic, marginDynamic, Neutral, paddingDynamic, White } from "../styles";

export const VerifyCredentialModal: FunctionComponent<TModalProps> = ({
  indicator,
  setIndicator,
  pushNextModalFunction,
}) => {
  const updateVerifyModal = () => {
    setIndicator(!indicator);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...backgroundColorDynamic(White),
        ...paddingDynamic(100, 16, 0, 16),
        ...borderRadiusDynamic(32),
        ...marginDynamic("15%"),
      }}
    >
      <Text
        style={{
          ...fontBasic(24, "600", Neutral.neutral_10, 1, "normal", 32),
        }}
      >
        Share your credentials with Recruitment Sdn. Bhd.?
      </Text>

      <View
        style={{
          ...marginDynamic(32, 0, 16),
        }}
      >
        <TextItem_1
          subTitle={"Name of Graduate"}
          subText={"Joey Chan Chan Chan"}
        />

        <TextItem_1 subTitle={"Issuance Date"} subText={"Malaysia"} />

        <TextItem_1 subTitle={"Location"} subText={"Kuala Lumpur"} />

        <TextItem_1
          subTitle={"Programme"}
          subText={"Bachelor of Arts (Hons) in Business Administration"}
        />

        <TextItem_1
          subTitle={"Credit"}
          subText={"Second Class Honors (Upper Division)"}
        />

        <TextItem_1
          subTitle={"Document Scanned"}
          subText={"Graduation Certificate"}
        />

        <TextItem_1
          subTitle={"Verified Selfie"}
          subText={"https//myBID/Verified/selfie"}
        />
      </View>

      <GeneralButton label="Accept" onPressHandler={pushNextModalFunction} />
      <TextButtonCenter label="Decline" onPressHandler={updateVerifyModal} />
    </View>
  );
};

export default VerifyCredentialModal;
