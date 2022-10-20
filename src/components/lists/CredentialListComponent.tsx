import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { DummyDataArray } from "../../dummyData";
import { AlignItemCenter, borderMake, borderRadiusDynamic, dimensionDynamic, fontBasic, marginDynamic, paddingDynamic } from "../../styles";
import { CredentialCard, DataCredentialCertificate, DataCredentialPassport } from "../cards";

type TCredentialListProps = {
  currentFilter: string;
  showVerifyModal: boolean;
  setShowVerifyModal: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

export const CredentialListComponent: React.FC<TCredentialListProps> = ({
  currentFilter,
  showVerifyModal,
  setShowVerifyModal,
  showDetailModal,
  setShowDetailModal,
  showQRModal,
  setShowQRModal,
}) => {
  return (
    <View>
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
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  showQR={showQR}
                  setShowQR={setShowQR}
                  data={item}
                  checkCredentialType={checkCredentialType}
                  showVerifyModal={showVerifyModal}
                  setShowVerifyModal={setShowVerifyModal}
                  showDetailModal={showDetailModal}
                  setShowDetailModal={setShowDetailModal}
                  showQRModal={showQRModal}
                  setShowQRModal={setShowQRModal}
                />
              </View>
            );
          }

          if (currentFilter === "All") {
            return (
              <View>
                <CredentialCard
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  showQR={showQR}
                  setShowQR={setShowQR}
                  data={item}
                  checkCredentialType={checkCredentialType}
                  showVerifyModal={showVerifyModal}
                  setShowVerifyModal={setShowVerifyModal}
                  showDetailModal={showDetailModal}
                  setShowDetailModal={setShowDetailModal}
                  showQRModal={showQRModal}
                  setShowQRModal={setShowQRModal}
                />
              </View>
            );
          }
        })}

        <TouchableOpacity
          style={{
            ...marginDynamic(16, "auto", 0, "auto"),
            ...borderRadiusDynamic(32),
            ...borderMake(2, "#01396C"),
            borderStyle: "dashed",
            ...dimensionDynamic("auto", "90%"),
            ...paddingDynamic(8, 0, 16, 0),
            ...AlignItemCenter,
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
    </View>
  );
};

export default CredentialListComponent;
