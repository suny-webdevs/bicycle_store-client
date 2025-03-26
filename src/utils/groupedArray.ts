const groupedArray = (array: any[], size: number) => {
  return array.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / size);
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex].push(item);
    return result;
  }, []);
};

export default groupedArray;
