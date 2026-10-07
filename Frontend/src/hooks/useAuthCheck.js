// // // import { useEffect, useState } from 'react';

// // // export const useAuthCheck = () => {
// // //   const [loading, setLoading] = useState(true);
// // //   const [authenticated, setAuthenticated] = useState(false);

// // //  useEffect(() => {
// // //   const verify = async () => {
// // //     const token = localStorage.getItem('accessToken');
// // //     if (!token) {
// // //       setAuthenticated(false);
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       await api.post('/auth/verify-token/', { token });
// // //       setAuthenticated(true);
// // //     } catch (error) {
// // //       setAuthenticated(false);
// // //       localStorage.removeItem("accessToken");
// // //     }
// // //     setLoading(false);
// // //   };

// // //   verify();
// // // }, []);


// // //   return { loading, authenticated };
// // // };


// // import { useEffect, useState } from 'react';
// // import api from "../utils/axios"; // Add this line

// // export const useAuthCheck = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [authenticated, setAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const verify = async () => {
// //       const token = localStorage.getItem('accessToken');
// //       if (!token) {
// //         setAuthenticated(false);
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         await api.post('/auth/verify-token/', { token }); // Backend pe verify
// //         setAuthenticated(true);
// //       } catch (error) {
// //         console.error("Token verification failed", error);
// //         setAuthenticated(false);
// //         localStorage.removeItem("accessToken");
// //         localStorage.removeItem("refreshToken");
// //       }
// //       setLoading(false);
// //     };

// //     verify();
// //   }, []);

// //   return { loading, authenticated };
// // };
// // // 


// import { useEffect, useState } from 'react';
// import api from "../utils/axios";

// export const useAuthCheck = () => {
//   const [loading, setLoading] = useState(true);
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const verify = async () => {
//       const token = localStorage.getItem('accessToken');
//       if (!token) {
//         setAuthenticated(false);
//         setLoading(false);
//         return;
//       }

//       try {
//         // ✅ Verify token with backend
//         await api.post('/auth/verify-token/', { token });
//         setAuthenticated(true);
//       } catch (error) {
//         console.error("Token verification failed:", error);
//         setAuthenticated(false);
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//       } finally {
//         setLoading(false);
//       }
//     };

//     verify();
//   }, []);

//   return { loading, authenticated };
// };
import { useEffect, useState } from 'react';
import api from "../utils/axios";

export const useAuthCheck = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        // ✅ Use profile API to check token
        await api.get('/auth/user/profile/');
        setAuthenticated(true);
      } catch (error) {
        console.error("Token verification failed:", error);
        setAuthenticated(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  return { loading, authenticated };
};
