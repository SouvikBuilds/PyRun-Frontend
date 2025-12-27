export const formatOutput = (output) => {
  if (!output) return "";
  return output.toString().trim();
};

export const formatError = (error) => {
  if (!error) return "";
  return error.toString().trim();
};

export const downloadFile = (content, filename) => {
  const element = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};
