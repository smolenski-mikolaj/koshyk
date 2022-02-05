import { useState } from "#app";

export const useUser = () => {
  return useState("user", () => {});
};
