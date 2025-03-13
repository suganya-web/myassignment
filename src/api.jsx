

const api = {
  getFormData: async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    return response.json();
  },
  saveFormData: async (data) => {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  },
};

export default api;
