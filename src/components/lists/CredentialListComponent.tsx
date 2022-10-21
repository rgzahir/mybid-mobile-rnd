import React, { Fragment, FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { DummyDataArray } from "../../dummyData";
import { AlignItemCenter, borderMake, borderRadiusDynamic, dimensionDynamic, fontBasic, marginDynamic, paddingDynamic } from "../../styles";
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
        })}

        <TouchableOpacity
          style={{
            borderStyle: "dashed",
            ...AlignItemCenter,
            ...borderRadiusDynamic(32),
            ...borderMake(2, "#01396C"),
            ...dimensionDynamic("auto", "90%"),
            ...marginDynamic(16, "auto", 0, "auto"),
            ...paddingDynamic(8, 0, 16, 0),
          }}
          onPress={() => {
            console.log("Add other credentials Fx");
          }}
        >
          <Text style={{ ...fontBasic(16, "bold", "#01396C") }}>
            <Text style={{ ...fontBasic(24, "normal", "#01396C") }}>
              + {"\t"}{" "}
            </Text>
            Add Other Credentials
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Fragment>
  );
};

export default CredentialListComponent;
