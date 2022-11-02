import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { marginDynamic } from "../../styles";

export const ButtonSliderTestGround = () => {
  const [verifyValue, setVerifyValue] = useState(false);

  const [sliderOneChanging, setSliderOneChanging] = useState(false);
  const [sliderOneValue, setSliderOneValue] = useState([0]);
  const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    useState([0, 100]);

  const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  const sliderOneValuesChange = (values: any) => setSliderOneValue(values);

  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

  const multiSliderValuesChange = (values: any) => setMultiSliderValue(values);

  const nonCollidingMultiSliderValuesChange = (values: any) =>
    setNonCollidingMultiSliderValue(values);

  const CustomMarker = () => {
    return (
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: "red",
          borderRadius: 60,
          // position: "absolute",
          // margin: -24,
          marginLeft: 24,
          // margin: 24,
        }}
      />
    );
  };

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
      }

      setSliderOneValue([0]);
      // console.log(JSON.stringify(sliderOneValue) === JSON.stringify(arr));
      // console.log(sliderOneValue);
    };

    unSubscribe();
  }, [sliderOneChanging]);

  const showSlider = () => {
    if (sliderOneValue[9] === 9 || sliderOneValue[10] === 10) {
      console.log("Value reach " + sliderOneValue);
    }

    return (
      <View>
        <MultiSlider
          values={sliderOneValue}
          sliderLength={280}
          onValuesChangeStart={sliderOneValuesChangeStart}
          onValuesChange={sliderOneValuesChange}
          onValuesChangeFinish={sliderOneValuesChangeFinish}
          selectedStyle={{
            backgroundColor: "gold",
          }}
          unselectedStyle={{
            backgroundColor: "white",
          }}
          // values={[5]}
          containerStyle={{
            height: 80,
          }}
          trackStyle={{
            height: 50,
            backgroundColor: "red",
            borderRadius: 30,
            // position: "absolute",
            ...marginDynamic(-24),
          }}
          touchDimensions={{
            height: 80,
            width: 80,
            borderRadius: 0,
            slipDisplacement: 80,
          }}
          customMarker={CustomMarker}
          // customLabel={CustomLabel}
          // sliderLength={280}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sliders</Text>
      <View style={styles.sliders}>
        <View style={styles.sliderOne}>
          <Text style={styles.text}>One Marker with callback example:</Text>
          <Text style={[styles.text, sliderOneChanging && { color: "red" }]}>
            {sliderOneValue}
          </Text>
        </View>
        {verifyValue ? null : showSlider()}

        <View style={styles.sliderOne}>
          <Text style={styles.text}>Two Markers:</Text>
          <Text style={styles.text}>{multiSliderValue[0]} </Text>
          <Text style={styles.text}>{multiSliderValue[1]}</Text>
        </View>
        <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={250}
          onValuesChange={multiSliderValuesChange}
          min={0}
          max={10}
          step={1}
          allowOverlap
          snapped
          // customLabel={CustomLabel}
        />
      </View>
      <View style={styles.sliderOne}>
        <Text style={styles.text}>
          Two Markers with minimum overlap distance:
        </Text>
        <Text style={styles.text}>{nonCollidingMultiSliderValue[0]} </Text>
        <Text style={styles.text}>{nonCollidingMultiSliderValue[1]}</Text>
      </View>
      <MultiSlider
        values={[
          nonCollidingMultiSliderValue[0],
          nonCollidingMultiSliderValue[1],
        ]}
        sliderLength={280}
        onValuesChange={nonCollidingMultiSliderValuesChange}
        min={0}
        max={100}
        step={1}
        allowOverlap={false}
        snapped
        minMarkerOverlapDistance={40}
        // customMarker={CustomMarker}
        // customLabel={CustomLabel}
      />
      <Text style={styles.text}>Native RCT Slider</Text>
      {/* <Slider style={{ width: 280 }} /> */}
      <Text style={styles.text}>Custom Marker</Text>
      <MultiSlider
        selectedStyle={{
          backgroundColor: "gold",
        }}
        unselectedStyle={{
          backgroundColor: "silver",
        }}
        values={[5]}
        containerStyle={{
          height: 40,
        }}
        trackStyle={{
          height: 10,
          backgroundColor: "red",
        }}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 40,
        }}
        // customMarker={CustomMarker}
        // customLabel={CustomLabel}
        sliderLength={280}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sliders: {
    margin: 20,
    width: 280,
  },
  text: {
    alignSelf: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
  },
  sliderOne: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ButtonSliderTestGround;
