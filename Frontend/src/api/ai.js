import api from "../utils/axios";

// Generate music from prompt
export const generateAIMusic = (prompt) => {
  const formData = new FormData();
  formData.append("prompt", prompt);

  return api.post("/ai/generate/", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

// Get list of generated songs
export const getGeneratedSongs = () => {
  return api.get("/ai/generated-songs/");
};

// Update full song
export const updateGeneratedSong = (id, data) => {
  return api.put(`/ai/generated-songs/${id}/`, data);
};

// Partial update
export const patchGeneratedSong = (id, data) => {
  return api.patch(`/ai/generated-songs/${id}/`, data);
};

// Delete song
export const deleteGeneratedSong = (id) => {
  return api.delete(`/ai/generated-songs/${id}/`);
};
