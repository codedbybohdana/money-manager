// utilities
// scaling functions for responsive design
// library: react-native-size-matters (modified)
// provides scale, verticalScale, and moderateScale functions
// utils
// Що це: Допоміжні функції, утиліти, які не залежать від бізнес-логіки.
// Що зберігають: Функції для форматування дат, обробки рядків, масштабування розмірів, тощо.
// Приклад: styling.ts (функції для адаптивних розмірів).


import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const horizontal = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (shortDimension / guidelineBaseWidth) * (size as number)
    )
  );

export const vertical = (size: number) =>
  Math.round(
    PixelRatio.roundToNearestPixel(
      (longDimension / guidelineBaseHeight) * (size as number)
    )
  );
