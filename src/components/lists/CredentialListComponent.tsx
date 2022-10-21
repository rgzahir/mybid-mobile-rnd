import React, { Fragment, FunctionComponent, useState } from "react";
import { ScrollView, View } from "react-native";

import { DummyDataArray } from "../../dummyData";
import { Primary } from "../../styles";
import DashedButton from "../buttons/DashedButton";
import { CredentialCard, DataCredentialCertificate, DataCredentialPassport } from "../cards";

export const CredentialListComponent: FunctionComponent<
  TCredentialListProps
> = ({
  currentFilter,
  showVerifyModal,
  setShowVerifyModal,
  showDetailModal,
  setShowDetailModal,
  showQRModal,
  setShowQRModal,
}) => {
  return (
    <Fragment>
      <ScrollView>
        {DummyDataArray.map((item, key) => {
          const { category } = item;
          const [isShownLocal, setIsShownLocal] = useState(false);
          const [showQR, setShowQR] = useState(false);

          const checkCredentialType = (type: any) => {
            if (type === "passport") {
              return (
                <DataCredentialPassport
                  data={item}
                  showQR={showQR}
                  setShowQR={setShowQR}
                />
              );
            }

            if (type === "certificate") {
              return (
                <DataCredentialCertificate
                  data={item}
                  showQR={showQR}
                  setShowQR={setShowQR}
                />
              );
            }

            return null;
          };

          if (currentFilter === category) {
            return (
              <View>
                <CredentialCard
                  data={item}
                  isShownLocal={isShownLocal}
                  key={key}
                  showQR={showQR}
                  showVerifyModal={showVerifyModal}
                  showDetailModal={showDetailModal}
                  showQRModal={showQRModal}
                  checkCredentialType={checkCredentialType}
                  setIsShownLocal={setIsShownLocal}
                  setShowQR={setShowQR}
                  setShowVerifyModal={setShowVerifyModal}
                  setShowDetailModal={setShowDetailModal}
                  setShowQRModal={setShowQRModal}
                />
              </View>
            );
          }

          if (currentFilter === "All") {
            return (
              <View>
                <CredentialCard
                  data={item}
                  isShownLocal={isShownLocal}
                  key={key}
                  showQR={showQR}
                  showVerifyModal={showVerifyModal}
                  showDetailModal={showDetailModal}
                  showQRModal={showQRModal}
                  checkCredentialType={checkCredentialType}
                  setIsShownLocal={setIsShownLocal}
                  setShowQR={setShowQR}
                  setShowVerifyModal={setShowVerifyModal}
                  setShowDetailModal={setShowDetailModal}
                  setShowQRModal={setShowQRModal}
                />
              </View>
            );
          }

          return null;
        })}

        <DashedButton
          label="Add Other Credentials"
          onPressHandler={() => {}}
          fontColor={Primary.primary_blue}
        />
      </ScrollView>
    </Fragment>
  );
};

export default CredentialListComponent;
