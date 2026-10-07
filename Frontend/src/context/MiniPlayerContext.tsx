// // // // src/context/MiniPlayerContext.tsx
// // // import React, {
// // //   createContext,
// // //   useContext,
// // //   useState,
// // //   ReactNode,
// // //   useCallback,
// // // } from 'react';
// // // import { Track } from '../types';

// // // interface MiniPlayerContextValue {
// // //   queue: Track[];
// // //   currentIndex: number;       // position in the queue
// // //   currentTrack: Track | null; // same as queue[currentIndex]
// // //   isPlaying: boolean;
// // //   volume: number;
// // //   progress: number;

// // //   // actions
// // //   openPlayer: (track: Track, tracks?: Track[]) => void;
// // //   closePlayer: () => void;
// // //   togglePlayPause: () => void;
// // //   playNext: () => void;
// // //   playPrev: () => void;
// // //   setVolume: (v: number) => void;
// // //   setProgress: (p: number) => void;
// // // }

// // // const MiniPlayerContext = createContext<MiniPlayerContextValue | undefined>(
// // //   undefined
// // // );

// // // export const MiniPlayerProvider = ({ children }: { children: ReactNode }) => {
// // //   const [queue, setQueue] = useState<Track[]>([]);
// // //   const [currentIndex, setCurrentIndex] = useState<number>(0);
// // //   const [isPlaying, setPlaying] = useState(false);
// // //   const [volume, setVolume] = useState(40);
// // //   const [progress, setProgress] = useState(0);

// // //   // derive currentTrack
// // //   const currentTrack = queue[currentIndex] || null;

// // //   const openPlayer = useCallback(
// // //     (track: Track, tracks: Track[] = []) => {
// // //       if (tracks.length) {
// // //         // if a new queue is provided, replace it
// // //         const startIndex = tracks.findIndex((t) => t.id === track.id);
// // //         setQueue(tracks);
// // //         setCurrentIndex(startIndex >= 0 ? startIndex : 0);
// // //       } else {
// // //         // if no queue, just play this one
// // //         setQueue([track]);
// // //         setCurrentIndex(0);
// // //       }
// // //       setPlaying(true);
// // //       setProgress(0);
// // //     },
// // //     []
// // //   );

// // //   const closePlayer = useCallback(() => {
// // //     setPlaying(false);
// // //     setQueue([]);
// // //     setCurrentIndex(0);
// // //     setProgress(0);
// // //   }, []);

// // //   const togglePlayPause = useCallback(() => {
// // //     setPlaying((p) => !p);
// // //   }, []);

// // //   const playNext = useCallback(() => {
// // //     setCurrentIndex((idx) => {
// // //       const next = idx + 1;
// // //       return next < queue.length ? next : 0; // wrap around
// // //     });
// // //     setPlaying(true);
// // //     setProgress(0);
// // //   }, [queue.length]);

// // //   const playPrev = useCallback(() => {
// // //     setCurrentIndex((idx) => {
// // //       const prev = idx - 1;
// // //       return prev >= 0 ? prev : queue.length - 1; // wrap around
// // //     });
// // //     setPlaying(true);
// // //     setProgress(0);
// // //   }, [queue.length]);

// // //   return (
// // //     <MiniPlayerContext.Provider
// // //       value={{
// // //         queue,
// // //         currentIndex,
// // //         currentTrack,
// // //         isPlaying,
// // //         volume,
// // //         progress,
// // //         openPlayer,
// // //         closePlayer,
// // //         togglePlayPause,
// // //         playNext,
// // //         playPrev,
// // //         setVolume,
// // //         setProgress,
// // //       }}
// // //     >
// // //       {children}
// // //     </MiniPlayerContext.Provider>
// // //   );
// // // };

// // // export const useMiniPlayer = () => {
// // //   const ctx = useContext(MiniPlayerContext);
// // //   if (!ctx) throw new Error('useMiniPlayer must be inside MiniPlayerProvider');
// // //   return ctx;
// // // };


// // import React, {
// //   createContext,
// //   useContext,
// //   useState,
// //   ReactNode,
// //   useCallback,
// // } from 'react';
// // import { Track } from '../types';

// // interface MiniPlayerContextValue {
// //   queue: Track[];
// //   currentIndex: number;       // Position in queue
// //   currentTrack: Track | null; // Currently playing track
// //   isPlaying: boolean;
// //   volume: number;
// //   progress: number;

// //   // actions
// //   openPlayer: (track: Track, tracks?: Track[]) => void;
// //   closePlayer: () => void;
// //   togglePlayPause: () => void;
// //   playNext: () => void;
// //   playPrev: () => void;
// //   setVolume: (v: number) => void;
// //   setProgress: (p: number) => void;
// // }

// // const MiniPlayerContext = createContext<MiniPlayerContextValue | undefined>(undefined);

// // export const MiniPlayerProvider = ({ children }: { children: ReactNode }) => {
// //   const [queue, setQueue] = useState<Track[]>([]);
// //   const [currentIndex, setCurrentIndex] = useState<number>(0);
// //   const [isPlaying, setPlaying] = useState(false);
// //   const [volume, setVolume] = useState(40);
// //   const [progress, setProgress] = useState(0);

// //   const currentTrack = queue[currentIndex] || null;

// //   const openPlayer = useCallback(
// //     (track: Track, tracks: Track[] = []) => {
// //       if (tracks.length) {
// //         const startIndex = tracks.findIndex((t) => t.id === track.id);
// //         setQueue(tracks);
// //         setCurrentIndex(startIndex >= 0 ? startIndex : 0);
// //       } else {
// //         setQueue([track]);
// //         setCurrentIndex(0);
// //       }
// //       setPlaying(true);
// //       setProgress(0);
// //     },
// //     []
// //   );

// //   const closePlayer = useCallback(() => {
// //     setPlaying(false);
// //     setQueue([]);
// //     setCurrentIndex(0);
// //     setProgress(0);
// //   }, []);

// //   const togglePlayPause = useCallback(() => {
// //     setPlaying((prev) => !prev);
// //   }, []);

// //   const playNext = useCallback(() => {
// //     setCurrentIndex((idx) => {
// //       const next = idx + 1;
// //       return next < queue.length ? next : 0; // Wrap around to start
// //     });
// //     setPlaying(true);
// //     setProgress(0);
// //   }, [queue.length]);

// //   const playPrev = useCallback(() => {
// //     setCurrentIndex((idx) => {
// //       const prev = idx - 1;
// //       return prev >= 0 ? prev : queue.length - 1; // Wrap around to end
// //     });
// //     setPlaying(true);
// //     setProgress(0);
// //   }, [queue.length]);

// //   return (
// //     <MiniPlayerContext.Provider
// //       value={{
// //         queue,
// //         currentIndex,
// //         currentTrack,
// //         isPlaying,
// //         volume,
// //         progress,
// //         openPlayer,
// //         closePlayer,
// //         togglePlayPause,
// //         playNext,
// //         playPrev,
// //         setVolume,
// //         setProgress,
// //       }}
// //     >
// //       {children}
// //     </MiniPlayerContext.Provider>
// //   );
// // };

// // export const useMiniPlayer = () => {
// //   const ctx = useContext(MiniPlayerContext);
// //   if (!ctx) throw new Error('useMiniPlayer must be inside MiniPlayerProvider');
// //   return ctx;
// // };



// import React from "react";
// import {
//   IoPlay,
//   IoPause,
//   IoPlaySkipForward,
//   IoPlaySkipBack,
//   IoClose,
//   IoVolumeHigh,
// } from "react-icons/io5";
// import { useMiniPlayer } from "../context/MiniPlayerContext";

// const MiniPlayer = () => {
//   const {
//     currentTrack,
//     isPlaying,
//     togglePlayPause,
//     closePlayer,
//     playNext,
//     playPrev,
//     volume,
//     setVolume,
//     progress,
//     setProgress,
//   } = useMiniPlayer();

//   if (!currentTrack) return null;

//   return (
//     <div
//       className="fixed bottom-6 right-6 w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-50"
//       style={{
//         boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
//       }}
//     >
//       {/* Progress Bar */}
//       <div className="h-1 bg-white/20">
//         <div
//           className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>

//       <div className="flex flex-col px-4 py-3">
//         {/* Track Info + Close */}
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center gap-3 overflow-hidden">
//             <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
//               <img
//                 src={currentTrack.image || "/placeholder.jpg"}
//                 alt={currentTrack.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="overflow-hidden">
//               <h4 className="text-white font-semibold text-sm truncate">
//                 {currentTrack.title}
//               </h4>
//               <p className="text-white/60 text-xs truncate">
//                 {currentTrack.artist || "Unknown Artist"}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={closePlayer}
//             className="text-white/60 hover:text-white transition-colors"
//           >
//             <IoClose className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Controls */}
//         <div className="flex items-center justify-center gap-5 mb-3">
//           <button
//             onClick={playPrev}
//             className="text-white/60 hover:text-white transition-colors"
//           >
//             <IoPlaySkipBack className="w-5 h-5" />
//           </button>

//           <button
//             onClick={togglePlayPause}
//             className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
//           >
//             {isPlaying ? (
//               <IoPause className="text-white text-xl" />
//             ) : (
//               <IoPlay className="text-white text-xl ml-0.5" />
//             )}
//           </button>

//           <button
//             onClick={playNext}
//             className="text-white/60 hover:text-white transition-colors"
//           >
//             <IoPlaySkipForward className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Volume */}
//         <div className="flex items-center gap-2">
//           <IoVolumeHigh className="text-white/60 w-4 h-4" />
//           <input
//             type="range"
//             min={0}
//             max={100}
//             value={volume}
//             onChange={(e) => setVolume(Number(e.target.value))}
//             className="flex-1 h-1 rounded-full accent-blue-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiniPlayer;


import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import { Track } from '../types';

interface MiniPlayerContextValue {
  queue: Track[];
  currentIndex: number;
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  openPlayer: (track: Track, tracks?: Track[]) => void;
  closePlayer: () => void;
  togglePlayPause: () => void;
  playNext: () => void;
  playPrev: () => void;
  setVolume: (v: number) => void;
  setProgress: (p: number) => void;
}

const MiniPlayerContext = createContext<MiniPlayerContextValue | undefined>(undefined);

export const MiniPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setPlaying] = useState(false);
  const [volume, setVolume] = useState(40);
  const [progress, setProgress] = useState(0);

  const currentTrack = queue[currentIndex] || null;

  const openPlayer = useCallback(
    (track: Track, tracks: Track[] = []) => {
      if (tracks.length) {
        const startIndex = tracks.findIndex((t) => t.id === track.id);
        setQueue(tracks);
        setCurrentIndex(startIndex >= 0 ? startIndex : 0);
      } else {
        setQueue([track]);
        setCurrentIndex(0);
      }
      setPlaying(true);
      setProgress(0);
    },
    []
  );

  const closePlayer = useCallback(() => {
    setPlaying(false);
    setQueue([]);
    setCurrentIndex(0);
    setProgress(0);
  }, []);

  const togglePlayPause = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const playNext = useCallback(() => {
    setCurrentIndex((idx) => {
      const next = idx + 1;
      return next < queue.length ? next : 0;
    });
    setPlaying(true);
    setProgress(0);
  }, [queue.length]);

  const playPrev = useCallback(() => {
    setCurrentIndex((idx) => {
      const prev = idx - 1;
      return prev >= 0 ? prev : queue.length - 1;
    });
    setPlaying(true);
    setProgress(0);
  }, [queue.length]);

  return (
    <MiniPlayerContext.Provider
      value={{
        queue,
        currentIndex,
        currentTrack,
        isPlaying,
        volume,
        progress,
        openPlayer,
        closePlayer,
        togglePlayPause,
        playNext,
        playPrev,
        setVolume,
        setProgress,
      }}
    >
      {children}
    </MiniPlayerContext.Provider>
  );
};

export const useMiniPlayer = () => {
  const ctx = useContext(MiniPlayerContext);
  if (!ctx) throw new Error('useMiniPlayer must be inside MiniPlayerProvider');
  return ctx;
};
