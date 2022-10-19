import React, { useState } from "react";
import { View } from "react-native";

import { backgroundColorDynamic, borderRadiusDynamic, FlexOne, marginDynamic, paddingDynamic } from "../../styles";
import { Accent } from "../../styles/colors";
import CredentialCardFooter from "./CredentialCardFooter";
import { CredentialCardHeader } from "./CredentialCardHeader";
import { QRCredential } from "./QRCredential";

type TCredentialCardProps = {
  isShownLocal: boolean;
  setIsShownLocal: Function;
  showQR?: boolean;
  setShowQR?: Function;
  data?: any;
  checkCredentialType?: any;
};

export const CredentialCard: React.FC<TCredentialCardProps> = ({
  isShownLocal,
  setIsShownLocal,
  showQR,
  setShowQR,
  data,
  checkCredentialType,
}) => {
  const { credentialType } = data;

  return (
    <View
      style={{
        ...backgroundColorDynamic(Accent.accent_green_3),
        ...borderRadiusDynamic(16),
        ...paddingDynamic(24, 16, 24, 16),
        ...marginDynamic(16, 0, 16, 0),
        ...FlexOne,
      }}
    >
      <CredentialCardHeader
        isShownLocal={isShownLocal}
        setIsShownLocal={setIsShownLocal}
        data={data}
      />
      <View>
        {isShownLocal ? (
          <View>
            {showQR ? (
              <QRCredential data={data} showQR={showQR} setShowQR={setShowQR} />
            ) : (
              checkCredentialType(credentialType)
            )}
          </View>
        ) : (
          <View />
        )}
      </View>
      <View>
        {isShownLocal ? (
          <CredentialCardFooter
            showQR={showQR}
            setShowQR={setShowQR}
            data={data}
          />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default CredentialCard;
