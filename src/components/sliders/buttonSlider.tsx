import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  FlexDirectionRow,
  marginDynamic,
  Primary,
} from "../../styles";
import { CustomMarker, TextButtonCenter } from "../buttons";

export const ButtonSlider: FunctionComponent<IButtonSliderProps> = ({
  onCompletedHandler,
}) => {
  const [verifyValue, setVerifyValue] = useState(false);
  const [sliderOneChanging, setSliderOneChanging] = useState(false);
  const [sliderOneValue, setSliderOneValue] = useState([0]);

  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);
  const sliderOneValuesChange = (values: any) => setSliderOneValue(values);
  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  useEffect(() => {
    const unSubscribe = () => {
      const ARR_1 = [9];
      const ARR_2 = [10];
      if (
        JSON.stringify(sliderOneValue) === JSON.stringify(ARR_1) ||
        JSON.stringify(sliderOneValue) === JSON.stringify(ARR_2)
      ) {
        console.log("Condition fulfilled !");
        setVerifyValue((prev) => !prev);
        onCompletedHandler();
      }

      setSliderOneValue([0]);
    };

    unSubscribe();
  }, [sliderOneChanging]);

  const showSlider = () => {
    return (
      <View
        style={{
          backgroundColor: Accent.accent_green_1,
          borderWidth: 4,
          borderRadius: 80,
          width: "80%",
          ...FlexDirectionRow,
          ...AlignItemCenter,
          padding: 16,
        }}
      >
        <TextButtonCenter label="Swipe to Accept" onPressHandler={() => {}} />

        <View
          style={{
            position: "absolute",
            ...marginDynamic(0, "auto", 0, "auto"),
          }}
        >
          <MultiSlider
            values={sliderOneValue}
            sliderLength={245}
            onValuesChangeStart={sliderOneValuesChangeStart}
            onValuesChange={sliderOneValuesChange}
            onValuesChangeFinish={sliderOneValuesChangeFinish}
            selectedStyle={{
              backgroundColor: Primary.primary_blue,
            }}
            unselectedStyle={{
              backgroundColor: Accent.accent_green_1,
              opacity: 0,
            }}
            containerStyle={{
              height: 80,
            }}
            trackStyle={{
              height: 60,
              backgroundColor: Accent.accent_green_1,
              borderRadius: 30,
              ...marginDynamic(0, 0, 0, 0),
            }}
            touchDimensions={{
              height: 80,
              width: 80,
              borderRadius: 0,
              slipDisplacement: 80,
            }}
            customMarker={CustomMarker}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ ...marginDynamic(0, "auto", 0, "auto") }}>
      {verifyValue ? null : showSlider()}
    </View>
  );
};

export default ButtonSlider;
