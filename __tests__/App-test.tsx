// /**
//  * @format
//  */
// import "react-native";

// import React from "react";
// import renderer from "react-test-renderer";

// import App from "../App";

// // Note: test renderer must be required after react-native.
// it("renders correctly", () => {
//   renderer.create(<App />);
// });

const sum = (a: number, b: number): number => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
