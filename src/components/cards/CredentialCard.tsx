import React, { Fragment, FunctionComponent } from "react";
import { View } from "react-native";

import { CheckIsShown } from "../../functions/CredentialCard";
import { backgroundColorDynamic, borderRadiusDynamic, FlexOne, marginDynamic, paddingDynamic } from "../../styles";
import CredentialCardFooter from "./CredentialCardFooter";
import CredentialCardHeader from "./CredentialCardHeader";
import QRCredential from "./QRCredential";

export const CredentialCard: FunctionComponent<TCredentialCardProps> = ({
  data,
  isShownLocal,
  setIsShownLocal,
  showQR,
  setShowQR,
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
        ...FlexOne,
        ...backgroundColorDynamic(CheckIsShown(isShownLocal)),
        ...borderRadiusDynamic(16),
        ...paddingDynamic(24, 16, 24, 16),
        ...marginDynamic(16, 0, 16, 0),
      }}
    >
      <CredentialCardHeader
        data={data}
        isShownLocal={isShownLocal}
        setIsShownLocal={setIsShownLocal}
      />
      <Fragment>
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
        ) : null}
      </Fragment>
      <Fragment>
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
        ) : null}
      </Fragment>
    </View>
  );
};

export default CredentialCard;
