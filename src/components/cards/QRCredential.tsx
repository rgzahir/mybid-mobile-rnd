import React, { Fragment, FunctionComponent } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import {
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  marginDynamic,
  paddingDynamic,
  White,
} from "../../styles";

export const QRCredential: FunctionComponent<TQRCredentialProps> = ({
  data,
  showQR,
  setShowQR,
  showVerifyModal,
  setShowVerifyModal,
}) => {
  const { qrCode } = data;

  const qrPic = () => {
    if (qrCode) {
      return (
        <View
          style={{
            ...borderRadiusDynamic(16),
            ...backgroundColorDynamic(White),
            ...marginDynamic(0, "auto", 0, "auto"),
            ...paddingDynamic(16, 16, 16, 16),
          }}
        >
          <Image source={qrCode} />
        </View>
      );
    } else {
      return (
        <View
          style={{
            ...borderRadiusDynamic(16),
            ...backgroundColorDynamic(White),
            ...dimensionDynamic(150, 150),
            ...marginDynamic(0, "auto", 0, "auto"),
          }}
        />
      );
    }
  };

  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...FlexDirectionRow,
          ...marginDynamic(24, 0, 24, 0),
          ...paddingDynamic(8, 0, 8, 0),
        }}
        onPress={() => {
          setShowQR(!showQR);
        }}
        onLongPress={() => {
          setShowVerifyModal(!showVerifyModal);
        }}
      >
        {qrPic()}
      </TouchableOpacity>
    </Fragment>
  );
};

export default QRCredential;
