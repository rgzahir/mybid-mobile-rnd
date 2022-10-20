import React, { useState } from "react";
import { View } from "react-native";

import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { CredentialListComponent } from "../components/lists";
import { BaseModal, CredentialDetailModal, ShowCertificateModal, ShowQRCodeModal, VerifyCredentialModal } from "../modals";
import { marginDynamic, paddingDynamic } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const showNextModal_1 = () => {
    setShowDetailModal(!showDetailModal);
    setShowQRModal(!showQRModal);
  };

  const showNextModal_2 = () => {
    setShowDetailModal(!showDetailModal);
    setShowPreview(!showPreview);
  };

  return (
    <View
      style={{
        ...paddingDynamic("12%", 24, "40%", 24),
        ...marginDynamic(0, 0, 88),
      }}
    >
      <AvailableCredentialHeader />
      <AvailableCredentialFilter
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <CredentialListComponent
        currentFilter={currentFilter}
        showVerifyModal={showVerifyModal}
        setShowVerifyModal={setShowVerifyModal}
        showDetailModal={showDetailModal}
        setShowDetailModal={setShowDetailModal}
        showQRModal={showQRModal}
        setShowQRModal={setShowQRModal}
      />

      <BaseModal
        indicator={showVerifyModal}
        setIndicator={setShowVerifyModal}
        Detail={VerifyCredentialModal}
      />

      <BaseModal
        indicator={showDetailModal}
        setIndicator={setShowDetailModal}
        Detail={CredentialDetailModal}
        pushNextModalFunction={showNextModal_1}
        pushNextModalFunction_1={showNextModal_2}
      />

      <BaseModal
        indicator={showQRModal}
        setIndicator={setShowQRModal}
        Detail={ShowQRCodeModal}
      />

      <BaseModal
        indicator={showPreview}
        setIndicator={setShowPreview}
        Detail={ShowCertificateModal}
      />
    </View>
  );
};

export default CredentialPage;
