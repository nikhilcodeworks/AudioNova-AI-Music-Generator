// import { FaHeart, FaListUl, FaCompactDisc } from "react-icons/fa";
// import FloatingMusicNotes from "./FloatingMusicNotes";
// import MusicManagement from "../components/MusicManagement";
// import UploadSong from "../components/UploadSong";

// const libraryItems = [
//   {
//     icon: <FaHeart className="text-pink-500 text-4xl" />,
//     title: "Liked Songs",
//     description: "Your favorite tracks all in one place",
//     bg: "bg-zinc-800",
//   },
//   {
//     icon: <FaListUl className="text-green-400 text-4xl" />,
//     title: "Playlists",
//     description: "Custom and curated playlists",
//     bg: "bg-zinc-700",
//   },
//   {
//     icon: <FaCompactDisc className="text-blue-400 text-4xl" />,
//     title: "Albums",
//     description: "Saved albums from artists you love",
//     bg: "bg-zinc-600",
//   },
// ];

// const Library = () => {
//   return (
//     <div className="min-h-screen bg-[#0a0e17] text-white p-8">
//       <FloatingMusicNotes />
//       <h2 className="text-3xl font-bold mb-6">Your Library</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {libraryItems.map((item, index) => (
//           <div
//             key={index}
//             className={`rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all ${item.bg}`}
//           >
//             <div className="mb-4">{item.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-zinc-300">{item.description}</p>
//           </div>
//         ))}
//       </div>
//             <div>
//         <UploadSong showUploadModal={true}
//     setShowUploadModal={true}/>
//       </div>
//       <div>
//         <MusicManagement />
//       </div>
//     </div>
//   );
// };

// export default Library;





import { useState } from "react";
import { FaHeart, FaListUl, FaCompactDisc } from "react-icons/fa";
import FloatingMusicNotes from "./FloatingMusicNotes";
import MusicManagement from "../components/MusicManagement";
import UploadSong from "../components/UploadSong";

const libraryItems = [
  {
    icon: <FaHeart className="text-pink-500 text-4xl" />,
    title: "Liked Songs",
    description: "Your favorite tracks all in one place",
    bg: "bg-zinc-800",
  },
  {
    icon: <FaListUl className="text-green-400 text-4xl" />,
    title: "Playlists",
    description: "Custom and curated playlists",
    bg: "bg-zinc-700",
  },
  {
    icon: <FaCompactDisc className="text-blue-400 text-4xl" />,
    title: "Albums",
    description: "Saved albums from artists you love",
    bg: "bg-zinc-600",
  },
];

const Library = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white p-8 relative">
      <FloatingMusicNotes />

      <h2 className="text-3xl font-bold mb-6">Your Library</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {libraryItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all ${item.bg}`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-zinc-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
        >
          Upload New Song
        </button>
      </div>

      <MusicManagement />

      <UploadSong
        showUploadModal={showUploadModal}
        setShowUploadModal={setShowUploadModal}
      />
    </div>
  );
};

export default Library;

