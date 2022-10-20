import React, { useState } from "react";
import { View } from "react-native";

import { TextButtonCenter } from "../components/buttons";
import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { CredentialListComponent } from "../components/lists";
import {
  BaseModal,
  CredentialDetailModal,
  ShowCertificateModal,
  ShowQRCodeModal,
  VerifyCompletedModal,
  VerifyCredentialModal,
} from "../modals";
import { marginDynamic, paddingDynamic } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showVerifyCompleted, setShowVerifyCompleted] = useState(false);

  const showNextModal_1 = () => {
    setShowDetailModal(!showDetailModal);
    setShowQRModal(!showQRModal);
  };

  const showNextModal_2 = () => {
    setShowDetailModal(!showDetailModal);
    setShowPreview(!showPreview);
  };

  const showNextModal_3 = () => {
    setShowVerifyModal(!showVerifyModal);
    setShowVerifyCompleted(!showVerifyCompleted);
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
        pushNextModalFunction={showNextModal_3}
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

      <BaseModal
        indicator={showVerifyCompleted}
        setIndicator={setShowVerifyCompleted}
        Detail={VerifyCompletedModal}
      />

      <TextButtonCenter
        label="Show Verify Completed"
        onPressHandler={() => {
          setShowVerifyCompleted(!showVerifyCompleted);
        }}
      />
    </View>
  );
};

export default CredentialPage;
