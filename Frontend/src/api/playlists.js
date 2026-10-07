// import api from '../utils/axios';

// // Public playlists
// export const getPublicPlaylists = async () => {
//   const response = await api.get('/public-playlists/');
//   return response.data;
// };

// // User's playlists
// export const getUserPlaylists = async () => {
//   const response = await api.get('/playlists/');
//   return response.data;
// };

// export const getPlaylistById = async (id) => {
//   const response = await api.get(`/playlists/${id}/`);
//   return response.data;
// };

// export const createPlaylist = async (formData) => {
//   const response = await api.post('/playlists/', formData);
//   return response.data;
// };

// export const updatePlaylist = async (id, data) => {
//   const response = await api.put(`/playlists/${id}/`, data);
//   return response.data;
// };

// export const patchPlaylist = async (id, data) => {
//   const response = await api.patch(`/playlists/${id}/`, data);
//   return response.data;
// };

// export const deletePlaylist = async (id) => {
//   const response = await api.delete(`/playlists/${id}/`);
//   return response.data;
// };

// // Playlist-Song Relations
// export const getPlaylistSongs = async () => {
//   const response = await api.get('/playlist-songs/');
//   return response.data;
// };

// export const addSongToPlaylist = async (data) => {
//   const response = await api.post('/playlist-songs/', data);
//   return response.data;
// };

// export const updatePlaylistSong = async (id, data) => {
//   const response = await api.put(`/playlist-songs/${id}/`, data);
//   return response.data;
// };

// export const patchPlaylistSong = async (id, data) => {
//   const response = await api.patch(`/playlist-songs/${id}/`, data);
//   return response.data;
// };

// export const deletePlaylistSong = async (id) => {
//   const response = await api.delete(`/playlist-songs/${id}/`);
//   return response.data;
// };

// export const getPlaylistDetailsWithSongs = async (id) => {
//   const response = await api.get(`/playlist/${id}/`);
//   return response.data;
// };


import api from '../utils/axios';

// ✅ Get all public playlists
export const getPublicPlaylists = async () => {
  const response = await api.get('/public-playlists/');
  return response.data;
};

// ✅ Get current user's playlists
export const getUserPlaylists = async () => {
  const response = await api.get('/playlists/');
  return response.data;
};

// ✅ Get single playlist by ID
export const getPlaylistById = async (id) => {
  const response = await api.get(`/playlists/${id}/`);
  return response.data;
};

// ✅ Create new playlist
export const createPlaylist = async (data) => {
  const response = await api.post('/playlists/', data);
  return response.data;
};

// ✅ Update entire playlist
export const updatePlaylist = async (id, data) => {
  const response = await api.put(`/playlists/${id}/`, data);
  return response.data;
};

// ✅ Partial update (patch)
export const patchPlaylist = async (id, data) => {
  const response = await api.patch(`/playlists/${id}/`, data);
  return response.data;
};

// ✅ Delete playlist
export const deletePlaylist = async (id) => {
  const response = await api.delete(`/playlists/${id}/`);
  return response.data;
};

// ✅ Get songs in a playlist (relation list)
export const getPlaylistSongs = async () => {
  const response = await api.get('/playlist-songs/');
  return response.data;
};

// ✅ Add song to playlist
export const addSongToPlaylist = async (data) => {
  const response = await api.post('/playlist-songs/', data);
  return response.data;
};

// ✅ Update song in playlist
export const updatePlaylistSong = async (id, data) => {
  const response = await api.put(`/playlist-songs/${id}/`, data);
  return response.data;
};

// ✅ Partial update of song in playlist
export const patchPlaylistSong = async (id, data) => {
  const response = await api.patch(`/playlist-songs/${id}/`, data);
  return response.data;
};

// ✅ Remove song from playlist
export const deletePlaylistSong = async (id) => {
  const response = await api.delete(`/playlist-songs/${id}/`);
  return response.data;
};

// ✅ Extra: Get playlist details with included songs
export const getPlaylistDetailsWithSongs = async (id) => {
  const response = await api.get(`/playlist/${id}/`);
  return response.data;
};
