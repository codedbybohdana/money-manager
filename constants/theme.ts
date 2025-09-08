// constants
// Що це: Константи, які використовуються по всьому додатку.
// Що зберігають: Кольори, розміри, фіксовані значення, налаштування.

import { horizontal, vertical } from "@/utils/styling";

export const colors = {
  primary: "#8cd21c",
  primaryLight: "#0ea5e9",
  primaryDark: "#0369a1",
  text: "#000",
  textLight: "#e5e5e5",
  textLighter: "#d4d4d4",
  white: "#fff",
  black: "#000",
  rose: "#ef4444",
  green: "#0ea531",
  neutral50: "#fafafa",
  neutral100: "#f5f5f5",
  neutral200: "#e5e5e5",
  neutral300: "#d4d4d4",
  neutral350: "#CCCCCC",
  neutral400: "#a3a3a3",
  neutral500: "#737373",
  neutral600: "#525252",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#171717",
};

export const spacingX = {
  _3: horizontal(3),
  _5: horizontal(5),
  _7: horizontal(7),
  _10: horizontal(10),
  _12: horizontal(12),
  _15: horizontal(15),
  _20: horizontal(20),
  _25: horizontal(25),
  _30: horizontal(30),
  _35: horizontal(35),
  _40: horizontal(40),
};

export const spacingY = {
  _5: vertical(5),
  _7: vertical(7),
  _10: vertical(10),
  _12: vertical(12),
  _15: vertical(15),
  _17: vertical(17),
  _20: vertical(20),
  _25: vertical(25),
  _30: vertical(30),
  _35: vertical(35),
  _40: vertical(40),
  _50: vertical(50),
  _60: vertical(60),
};

export const radius = {
  _4: vertical(4),
  _8: vertical(8),
  _12: vertical(12),
  _16: vertical(16),
  _20: vertical(20),
  _30: vertical(30),
};