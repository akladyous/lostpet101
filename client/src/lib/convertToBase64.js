export const convertToBase64 = (file, callback) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const base64 = fileReader.result;
      if (callback && typeof callback === 'function') {
        callback(base64);
      }
      resolve(base64);
    };

    fileReader.onerror = (error) => reject(error);
  });
};
