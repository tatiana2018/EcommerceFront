

export const GenerateFormDataImage = async ({ name, description, category, imageFile }) => {
  const formData = new FormData();

  formData.append('Name', name);
  formData.append('Description', description);
  formData.append('Category', category);
  formData.append('ImageFile', imageFile);

  return formData;

}