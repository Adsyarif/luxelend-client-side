export const upperCaseFirstCharacter = (text) => {
  try {
    if (typeof text !== "string") {
      throw new TypeError("Input must be a string");
    }
    if (!text) return text;

    const firstChar = text[0].toUpperCase();
    const restOfString = text.slice(1);
    const newUpperCaseText = firstChar + restOfString;

    return newUpperCaseText;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return null; // or you can choose to return a default value
  }
};
