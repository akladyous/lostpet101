export const setFormData = (onboardingData) => {
  const formData = new FormData();
  for (let key in onboardingData[0]) {
    formData.append(key, onboardingData[0][key]);
  }
  for (let key in onboardingData[1]) {
    formData.append(`pet_attributes[${key}]`, onboardingData[1][key]);
  }
  return { formData: formData };
};
export const getFormData = (formData) => {
  for (let val of formData.entries()) {
    console.log(val[0] + ', ' + val[1]);
  }
};
