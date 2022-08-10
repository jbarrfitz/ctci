const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let i = Math.ceil(arr.length / 2) - 1;
  return arr.length % 2 === 0 ? (arr[i] + arr[i + 1]) / 2 : arr[i];
};
