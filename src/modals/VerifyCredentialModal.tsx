import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { TextItem_1 } from "../components/TextItem";
import {
  backgroundColorDynamic,
  borderRadiusDynamic,
  FlexOne,
  fontBasic,
  marginDynamic,
  Neutral,
  paddingDynamic,
  Primary,
  White,
} from "../styles";

type TVerifyCredentialModalProps = {
  indicator: boolean;
  setIndicator: any;
};

export const VerifyCredentialModal: React.FC<TVerifyCredentialModalProps> = ({
  indicator,
  setIndicator,
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
        ...marginDynamic("20%"),
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
          ...marginDynamic(32),
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

      <TouchableOpacity
        style={{
          ...marginDynamic(16, "auto", 0, "auto"),
        }}
        onPress={updateVerifyModal}
        // onPress={setIndicator(!indicator)}
      >
        <Text
          style={{
            ...fontBasic(16, "600", Primary.primary_blue, 1, "normal", 24),
            alignSelf: "center",
          }}
        >
          Decline
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCredentialModal;
