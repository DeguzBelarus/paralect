export const areObjectsEqual = (object1: object, object2: object): boolean => {
  try {
    if (JSON.stringify(object1) !== JSON.stringify(object2)) return false;
    return true;
  } catch (error) {
    console.error(error);
  }
};
