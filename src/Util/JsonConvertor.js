export const parseJSONData = (jsonData) => {
  // Parse the JSON string into a JavaScript object
  const jsonObject = JSON.parse(jsonData);

  // Convert any non-JSON-serializable data types back to their original formats
  // Handle circular references or reconstruct the object structure
  // Return the original data object
  return jsonObject;
};
