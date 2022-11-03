import React, { FunctionComponent, useEffect } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

import { FlexOne, marginDynamic, Neutral, paddingDynamic } from "../styles";

export const ScanningFaceIdModal: FunctionComponent<TBaseModalProps> = ({
  indicator,
  pushNextModalFunction,
  setIndicator,
}) => {
  useEffect(() => {
    const unSubscribe = () => {
      console.log("useEffect run : ", indicator, setIndicator);
      const myTimeout = () => setTimeout(pushNextModalFunction, 5000);

      myTimeout();
    };

    unSubscribe();
  }, []);

  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          ...FlexOne,
          backgroundColor: Neutral.neutral_1,
          //   opacity: 0.4,
          ...paddingDynamic(48, 16, 0, 16),
        }}
      >
        <Text
          style={{
            ...marginDynamic("auto", "auto", "auto", "auto"),
          }}
        >
          Scanning ...
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ScanningFaceIdModal;
