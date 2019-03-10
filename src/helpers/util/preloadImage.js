export default async function usePreload(src) {
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.src = src;
    img.onload = function() {
      resolve(src);
    };
    img.onerror = function() {
      reject();
    };
  });
}
