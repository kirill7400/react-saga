export const searchSkills = async (search) => {
  const params = new URLSearchParams({ q: search });

  const response = await fetch(`http://localhost:7070/api/search?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const getServices = async () => {
  const response = await fetch(`http://localhost:7070/api/services`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export const getServiceDetails = async (id) => {
  const response = await fetch(`http://localhost:7070/api/services/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};