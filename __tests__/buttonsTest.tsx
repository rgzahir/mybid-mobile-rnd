import React from "react";
import renderer from "react-test-renderer";

import {
  BackButton,
  CloseButton,
  DashedButton,
  GeneralButton,
  GeneralButton_2,
  IconSwitchButton,
  MoreDetailsButton,
  NormalIconButton,
  SquareButton,
  TextButtonCenter,
} from "../src/components/buttons";

test("BackButton renders correctly", () => {
  const tree = renderer.create(<BackButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("CloseButton renders correctly", () => {
  const tree = renderer.create(<CloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("DashedButton renders correctly", () => {
  const tree = renderer.create(<DashedButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("GeneralButton renders correctly", () => {
  const tree = renderer.create(<GeneralButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("GeneralButton_2 renders correctly", () => {
  const tree = renderer.create(<GeneralButton_2 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("IconSwitchButton renders correctly", () => {
  const tree = renderer.create(<IconSwitchButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("MoreDetailsButton renders correctly", () => {
  const tree = renderer.create(<MoreDetailsButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("NormalIconButton renders correctly", () => {
  const tree = renderer.create(<NormalIconButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("SquareButton renders correctly", () => {
  const tree = renderer.create(<SquareButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("TextButtonCenter renders correctly", () => {
  const tree = renderer.create(<TextButtonCenter />).toJSON();
  expect(tree).toMatchSnapshot();
});
