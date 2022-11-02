import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import { BaseModal, ScanCredentialPageModal } from "../modals";
import { marginDynamic } from "../styles";

export const ScanCredentialPage = () => {
  const [showScanModal, setShowScanModal] = useState(true);
  const checkNav = useNavigation();
  const closeModalThenGoToDiscover = () => {
    checkNav.navigate("Discover");
    setShowScanModal(false);
  };

  useEffect(() => {
    const unSubscribe = (): void => {
      if (showScanModal) {
        return;
      } else return setShowScanModal(!showScanModal);
    };
    unSubscribe();
  }, [showScanModal]);

  return (
    <View style={{ ...marginDynamic("auto", "auto", "auto", "auto") }}>
      <BaseModal
        Detail={ScanCredentialPageModal}
        indicator={showScanModal}
        setIndicator={setShowScanModal}
        pushNextModalFunction={closeModalThenGoToDiscover}
      />
    </View>
  );
};

export default ScanCredentialPage;
