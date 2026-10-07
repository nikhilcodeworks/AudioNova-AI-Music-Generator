import React, { useState, useEffect } from "react";
import {
  generateAIMusic,
  getGeneratedSongs,
  deleteGeneratedSong,
} from "../api/ai";
import { Music, Trash2, Download, Pencil, Wand2 } from "lucide-react";

const AIGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const res = await getGeneratedSongs();
      setSongs(res.data);
    } catch (err) {
      console.error("Failed to fetch songs", err);
    }
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError("");

    try {
      const res = await generateAIMusic(prompt);
      console.log("Generated:", res.data);
      await fetchSongs();
      setPrompt("");
    } catch (err) {
      console.error("Generation failed", err);
      setError("Failed to generate music. Please try again.");
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this song?")) return;
    try {
      await deleteGeneratedSong(id);
      await fetchSongs();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] via-[#1a1f2e] to-[#0f1419] text-white p-8">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <Wand2 className="w-8 h-8 text-blue-500" />
        AI Music Generator
      </h1>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 max-w-xl mx-auto mb-10">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your track (e.g., calm ambient piano)"
          className="w-full p-4 rounded-lg bg-white/5 text-white border border-white/20 focus:border-blue-500 focus:outline-none resize-none"
          rows={3}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition"
        >
          {loading ? "Generating..." : "Generate Music"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{song.prompt}</h3>
                <audio controls src={song.file_url} className="mt-1 w-60" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={song.download_url}
                className="p-2 bg-green-600 rounded hover:bg-green-700 transition"
                title="Download"
              >
                <Download className="w-4 h-4 text-white" />
              </a>
              <button
                onClick={() => handleDelete(song.id)}
                className="p-2 bg-red-600 rounded hover:bg-red-700 transition"
                title="Delete"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIGenerator;
