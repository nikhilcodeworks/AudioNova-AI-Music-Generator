// import React, { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User, Check } from "lucide-react";
// import { Link } from "react-router-dom";
// import { register } from "../api/auth";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [agreeToTerms, setAgreeToTerms] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     } else if (formData.fullName.trim().length < 2) {
//       newErrors.fullName = "Name must be at least 2 characters";
//     }

//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
//       newErrors.password = "Must contain uppercase, lowercase & number";
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = "Please confirm your password";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!agreeToTerms) {
//       newErrors.terms = "Please agree to terms";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       const data = await register(formData.fullName, formData.email, formData.password);
//       console.log("Registration successful:", data);
//       alert("Registration successful! Please check your email to verify your account.");
//       // Optionally redirect to login page
//     } catch (err) {
//       console.error("Registration failed:", err);
//       if (err.response?.data) {
//         const apiErrors = err.response.data;
//         const newErrors = {};
//         if (apiErrors.email) newErrors.email = apiErrors.email[0];
//         if (apiErrors.password) newErrors.password = apiErrors.password[0];
//         setErrors(newErrors);
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Floating BG */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="relative w-full max-w-md z-10">
//         <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
//               <User className="text-white" />
//             </div>
//             <h1 className="text-3xl font-black bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">Join us</h1>
//             <p className="text-white/70">Create your account to start</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Name */}
//             <div>
//               <label className="block text-white/90 text-sm mb-1">Full Name</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 bg-white/10 rounded-xl border ${
//                     errors.fullName ? "border-red-400" : "border-white/20"
//                   } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-white/90 text-sm mb-1">Email Address</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 bg-white/10 rounded-xl border ${
//                     errors.email ? "border-red-400" : "border-white/20"
//                   } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-white/90 text-sm mb-1">Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 bg-white/10 rounded-xl border ${
//                     errors.password ? "border-red-400" : "border-white/20"
//                   } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
//                   placeholder="Create password"
//                 />
//                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>
//               {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-white/90 text-sm mb-1">Confirm Password</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 bg-white/10 rounded-xl border ${
//                     errors.confirmPassword ? "border-red-400" : "border-white/20"
//                   } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
//                   placeholder="Confirm password"
//                 />
//                 <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
//                   {showConfirmPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
//             </div>

//             {/* Terms */}
//             <div>
//               <label className="flex items-start space-x-2 text-white/70 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={agreeToTerms}
//                   onChange={(e) => setAgreeToTerms(e.target.checked)}
//                   className="accent-blue-500"
//                 />
//                 <span>I agree to Terms and Privacy Policy</span>
//               </label>
//               {errors.terms && <p className="text-red-400 text-sm mt-1">{errors.terms}</p>}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50"
//             >
//               {isLoading ? "Creating account..." : "Create account"}
//             </button>
//           </form>

//           <div className="text-center mt-6">
//             <p className="text-white/70 text-sm">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-400 hover:text-cyan-400 underline font-medium">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { register } from "../api/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Must contain uppercase, lowercase & number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeToTerms) {
      newErrors.terms = "Please agree to terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Send fullName as username (assuming backend expects username field)
      const data = await register(formData.fullName, formData.email, formData.password);
      console.log("Registration successful:", data);
      alert("Registration successful! Please check your email to verify your account.");
      // Optionally redirect to login page
    } catch (err) {
      console.error("Registration failed:", err);
      if (err.response?.data) {
        const apiErrors = err.response.data;
        const newErrors = {};
        if (apiErrors.email) newErrors.email = apiErrors.email[0];
        if (apiErrors.password) newErrors.password = apiErrors.password[0];
        if (apiErrors.username) newErrors.fullName = apiErrors.username[0];
        setErrors(newErrors);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-md z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 relative">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
              <User className="text-white" />
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">Join us</h1>
            <p className="text-white/70">Create your account to start</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-white/90 text-sm mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 rounded-xl border ${
                    errors.fullName ? "border-red-400" : "border-white/20"
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/90 text-sm mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 rounded-xl border ${
                    errors.email ? "border-red-400" : "border-white/20"
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-white/90 text-sm mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 rounded-xl border ${
                    errors.password ? "border-red-400" : "border-white/20"
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                  placeholder="Create password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white/90 text-sm mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 rounded-xl border ${
                    errors.confirmPassword ? "border-red-400" : "border-white/20"
                  } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start space-x-2 text-white/70 text-sm">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="accent-blue-500"
                />
                <span>I agree to Terms and Privacy Policy</span>
              </label>
              {errors.terms && <p className="text-red-400 text-sm mt-1">{errors.terms}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-white/70 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-cyan-400 underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
