import React, { useState } from "react";
import { View } from "react-native";

import { backgroundColorDynamic, borderRadiusDynamic, FlexOne, marginDynamic, paddingDynamic } from "../../styles";
import CredentialCardFooter from "./CredentialCardFooter";
import CredentialCardHeader from "./CredentialCardHeader";
import QRCredential from "./QRCredential";

type TCredentialCardProps = {
  isShownLocal: boolean;
  setIsShownLocal: Function;
  showQR?: boolean;
  setShowQR?: Function;
  data?: any;
  checkCredentialType?: any;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

export const CredentialCard: React.FC<TCredentialCardProps> = ({
  isShownLocal,
  setIsShownLocal,
  showQR,
  setShowQR,
  data,
  checkCredentialType,
  showVerifyModal,
  setShowVerifyModal,
  showDetailModal,
  setShowDetailModal,
  showQRModal,
  setShowQRModal,
}) => {
  const { credentialType } = data;

  return (
    <View
      style={{
        ...backgroundColorDynamic("#02C9A5"),
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
              <QRCredential
                data={data}
                showQR={showQR}
                setShowQR={setShowQR}
                showVerifyModal={showVerifyModal}
                setShowVerifyModal={setShowVerifyModal}
              />
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
            showDetailModal={showDetailModal}
            setShowDetailModal={setShowDetailModal}
            showQRModal={showQRModal}
            setShowQRModal={setShowQRModal}
          />
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default CredentialCard;
