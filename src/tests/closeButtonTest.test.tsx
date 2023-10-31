import { render } from "@testing-library/react-native";
import React from "react";

import { CloseButton } from "../components/buttons";

// declare type TGeneralButtonProps = {
//     backgroundColor?: string;
//     fontColor?: string;
//     icon?: "" | any;
//     label: string;
//     marginTop?: string | number;
//     message?: string;
//     onPressHandler?: any;
//   };

it("render a basic CloseButton", () => {
  const mockFn = jest.fn();
  render(<CloseButton label="Back Button" onPressHandler={mockFn} />);
});

it("render a basic CloseButton with yellow fontColor and green backgroundColor", () => {
  const mockFn = jest.fn();
  render(
    <CloseButton
      label="Back Button"
      onPressHandler={mockFn}
      fontColor="yellow"
      backgroundColor="green"
    />
  );
});

it("render a basic CloseButton with 50px marginTop", () => {
  const mockFn = jest.fn();
  render(
    <CloseButton label="Back Button" onPressHandler={mockFn} marginTop={50} />
  );
});

it("render a basic CloseButton with a message", () => {
  const mockFn = jest.fn();
  render(
    <CloseButton
      label="Back Button"
      onPressHandler={mockFn}
      message="Message as props"
    />
  );
});

it("render a basic CloseButton with eye icon ", () => {
  const mockFn = jest.fn();
  render(
    <CloseButton label="Back Button" onPressHandler={mockFn} icon="eye" />
  );
});
