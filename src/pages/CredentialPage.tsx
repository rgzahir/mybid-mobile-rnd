import React, { useState } from "react";
import { View } from "react-native";

import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { CredentialListComponent } from "../components/lists";
import {
  BaseModal,
  CredentialDetailModal,
  ScanningFaceIdModal,
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
  const [showVerifyingStatus, setShowVerifyingStatus] = useState(false);

  const showNextModal_1 = () => {
    setShowDetailModal(!showDetailModal);
    setShowQRModal(!showQRModal);
  };

  const showNextModal_2 = () => {
    //from detail modal to preview credential modal
    setShowDetailModal(!showDetailModal);
    setShowPreview(!showPreview);
  };

  const showNextModal_3 = () => {
    //from detail modal to verify completed modal
    setShowVerifyModal(!showVerifyModal);
    setShowVerifyingStatus(!showVerifyingStatus);
  };

  const showNextModal_4 = () => {
    setShowVerifyingStatus(!showVerifyingStatus);
    setShowVerifyCompleted(!showVerifyCompleted);
  };

  return (
    <View
      style={{
        ...paddingDynamic(0, 24, 0, 24),
        ...marginDynamic(0, 0, 88),
      }}
    >
      <AvailableCredentialHeader />
      <AvailableCredentialFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />

      <CredentialListComponent
        currentFilter={currentFilter}
        showVerifyModal={showVerifyModal}
        showQRModal={showQRModal}
        showDetailModal={showDetailModal}
        setShowVerifyModal={setShowVerifyModal}
        setShowDetailModal={setShowDetailModal}
        setShowQRModal={setShowQRModal}
      />

      <BaseModal
        Detail={VerifyCredentialModal}
        indicator={showVerifyModal}
        pushNextModalFunction={showNextModal_3}
        setIndicator={setShowVerifyModal}
      />

      <BaseModal
        Detail={CredentialDetailModal}
        indicator={showDetailModal}
        pushNextModalFunction={showNextModal_1}
        pushNextModalFunction_1={showNextModal_2}
        setIndicator={setShowDetailModal}
      />

      <BaseModal
        Detail={ShowQRCodeModal}
        indicator={showQRModal}
        setIndicator={setShowQRModal}
      />

      <BaseModal
        Detail={ShowCertificateModal}
        indicator={showPreview}
        setIndicator={setShowPreview}
      />

      <BaseModal
        Detail={VerifyCompletedModal}
        indicator={showVerifyCompleted}
        setIndicator={setShowVerifyCompleted}
      />

      <BaseModal
        Detail={ScanningFaceIdModal}
        indicator={showVerifyingStatus}
        pushNextModalFunction={showNextModal_4}
        setIndicator={setShowVerifyingStatus}
      />
    </View>
  );
};

export default CredentialPage;
