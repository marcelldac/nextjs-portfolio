"use client";
import { Button, Text, createTheme } from "@mantine/core";

export const theme = createTheme({
  defaultRadius: "xl",
  primaryShade: 9,
  components: {
    Text: Text.extend({
      defaultProps: {
        color: "gray.3",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        variant: "filled",
        color: "white",
        bg: "green",
      },
    }),
  },
});
