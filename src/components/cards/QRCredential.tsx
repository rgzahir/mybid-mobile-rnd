import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { backgroundColorDynamic, borderRadiusDynamic, dimensionDynamic, FlexRow, marginDynamic, paddingDynamic, White } from "../../styles";

type TQRCredentialProps = {
  showQR?: boolean;
  setShowQR?: Function;
  data?: any;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
};

export const QRCredential: React.FC<TQRCredentialProps> = ({
  showQR,
  setShowQR,
  data,
  showVerifyModal,
  setShowVerifyModal,
}) => {
  const { qrCode } = data;

  const qrPic = () => {
    if (qrCode) {
      return (
        <View
          style={{
            // ...dimensionDynamic(150, 150),
            ...borderRadiusDynamic(16),
            ...marginDynamic(0, "auto", 0, "auto"),
            ...paddingDynamic(16, 16, 16, 16),
            ...backgroundColorDynamic(White),
          }}
        >
          <Image source={qrCode} />
        </View>
      );
    } else {
      return (
        <View
          style={{
            ...dimensionDynamic(150, 150),
            ...borderRadiusDynamic(16),
            ...marginDynamic(0, "auto", 0, "auto"),
            // ...paddingDynamic(16, 16, 16, 16),
            ...backgroundColorDynamic(White),
          }}
        />
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          ...FlexRow,
          ...marginDynamic(24, 0, 24, 0),
          ...paddingDynamic(8, 0, 8, 0),
        }}
        onPress={() => {
          setShowQR(!showQR);
        }}
        onLongPress={() => {
          setShowVerifyModal(!showVerifyModal);
          // console.log("onlongpress QR", showVerifyModal);
        }}
      >
        {qrPic()}
      </TouchableOpacity>
    </View>
  );
};

export default QRCredential;
