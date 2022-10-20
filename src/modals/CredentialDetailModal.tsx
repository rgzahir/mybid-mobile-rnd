import React from "react";
import { Text, View } from "react-native";

import { SquareButton, TextButtonCenter } from "../components/buttons";
import { LineHorizontal, TextItem_1, TextItem_2 } from "../components/TextItem";
import {
  Accent,
  backgroundColorDynamic,
  borderRadiusDynamic,
  FlexOne,
  FlexRow,
  fontBasic,
  JustifySpaceAround,
  marginDynamic,
  Neutral,
  paddingDynamic,
  White,
} from "../styles";

type TCredentialDetailModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

export const CredentialDetailModal: React.FC<TCredentialDetailModalProps> = ({
  indicator,
  setIndicator,
  pushNextModalFunction,
  pushNextModalFunction_1,
}) => {
  const Show_QR_Icon = require("../media/Scan_qr_alt_light.png");
  const View_Icon = require("../media/Img_box_light.png");
  const updateModal = () => {
    setIndicator(!indicator);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...backgroundColorDynamic(White),
        ...paddingDynamic(50, 16, 0, 16),
        ...borderRadiusDynamic(32),
        ...marginDynamic("20%"),
      }}
    >
      <TextItem_2
        subTitle={"Graduate Certificate"}
        subText={"USCI UNiversity"}
      />

      <Text
        style={{
          ...fontBasic(32, "600", Accent.accent_blue_10, 1, "normal", 40),
        }}
      >
        {"Bachelor of Arts (Hons) in Business Administration"}
      </Text>

      <View style={{ ...FlexRow, ...JustifySpaceAround, ...marginDynamic(32) }}>
        <Text
          style={{
            ...fontBasic(10, "400", Neutral.neutral_10, 1, "normal", 12),
          }}
        >
          Certificate
        </Text>
        <LineHorizontal />
      </View>

      <View
        style={{
          ...marginDynamic(32, 0, 32),
        }}
      >
        <TextItem_1
          subTitle={"Name of Graduate"}
          subText={"Joey Chan Chan Chan"}
        />

        <TextItem_1 subTitle={"Issuance Date"} subText={"Malaysia"} />

        <TextItem_1 subTitle={"Location"} subText={"Kuala Lumpur"} />

        <TextItem_1
          subTitle={"Credit"}
          subText={"Second Class Honors (Upper Division)"}
        />
      </View>

      <View style={{ ...FlexRow, ...JustifySpaceAround }}>
        <SquareButton
          label="Show QR"
          icon={Show_QR_Icon}
          onPressHandler={pushNextModalFunction}
        />
        <SquareButton
          label="View"
          icon={View_Icon}
          onPressHandler={pushNextModalFunction_1}
        />
      </View>

      <TextButtonCenter label="Decline" onPressHandler={updateModal} />
    </View>
  );
};

export default CredentialDetailModal;
