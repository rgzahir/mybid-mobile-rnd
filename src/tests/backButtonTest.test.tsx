import { render } from "@testing-library/react-native";
import React from "react";

import { BackButton } from "../components/buttons";

// const BackButton = require("../components/buttons/BackButton");

// declare type TBackButtonProps = {
//     fontColor?: string;
//     icon?: "" | any;
//     iconColor?: string;
//     label: string;
//     marginTop?: string | number;
//     message?: string;
//     onPressHandler?: any;
//   };

// describe("<BackButton />", () => {
//   it("render a basic BackButton", () => {
//     const mockFn = jest.fn();
//     render(<BackButton label="Back Button" onPressHandler={mockFn} />);
//   });

//   it("render a basic BackButton with yellow fontColor", () => {
//     const mockFn = jest.fn();
//     render(
//       <BackButton
//         label="Back Button"
//         onPressHandler={mockFn}
//         fontColor="yellow"
//       />
//     );
//   });

//   it("render a basic BackButton with 50px marginTop", () => {
//     const mockFn = jest.fn();
//     render(
//       <BackButton label="Back Button" onPressHandler={mockFn} marginTop={50} />
//     );
//   });

//   it("render a basic BackButton with a message", () => {
//     const mockFn = jest.fn();
//     render(
//       <BackButton
//         label="Back Button"
//         onPressHandler={mockFn}
//         message="Message as props"
//       />
//     );
//   });

//   it("render a basic BackButton with eye icon and yellow iconColor", () => {
//     const mockFn = jest.fn();
//     render(
//       <BackButton
//         label="Back Button"
//         onPressHandler={mockFn}
//         icon="eye"
//         iconColor="yellow"
//       />
//     );
//   });
// });

it("render a basic BackButton", () => {
  const mockFn = jest.fn();
  render(<BackButton label="Back Button" onPressHandler={mockFn} />);
});

it("render a basic BackButton with yellow fontColor", () => {
  const mockFn = jest.fn();
  render(
    <BackButton
      label="Back Button"
      onPressHandler={mockFn}
      fontColor="yellow"
    />
  );
});

it("render a basic BackButton with 50px marginTop", () => {
  const mockFn = jest.fn();
  render(
    <BackButton label="Back Button" onPressHandler={mockFn} marginTop={50} />
  );
});

it("render a basic BackButton with a message", () => {
  const mockFn = jest.fn();
  render(
    <BackButton
      label="Back Button"
      onPressHandler={mockFn}
      message="Message as props"
    />
  );
});

it("render a basic BackButton with eye icon and yellow iconColor", () => {
  const mockFn = jest.fn();
  render(
    <BackButton
      label="Back Button"
      onPressHandler={mockFn}
      icon="eye"
      iconColor="yellow"
    />
  );
});
