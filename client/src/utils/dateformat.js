export const formatDateFromObjectId = (objectId) => {
  const timestamp = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  return timestamp.toLocaleDateString();
};
