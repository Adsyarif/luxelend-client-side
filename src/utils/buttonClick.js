import { useContext } from "react";
import data from "../data/categoryData.json";
import { AppContext } from "../contexts/Context";

export const selectGender = (gender) => {
  const { setUser } = useContext(AppContext);
  return setUser((prev) => ({
    ...prev,
    gender: gender,
  }));
};

export const navigateClick = () => {};
