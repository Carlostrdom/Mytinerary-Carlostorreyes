import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../store/actionRegister/actionRegister";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../store/actionSignin/actionSignin";
import axios from "axios";

const RegisterLogin = () => {
  const [countrydata,setCountrydata] = useState("");

  const { loading, error, register } = useSelector((state) => state.registerStore);
  useEffect(() => {
    
    const data = async () => {
      try {
        
        const response = await axios.get("https://restfulcountries.com/api/v1/countries",{
          headers:{
            Authorization: `Bearer 8MtnnrZny8wxhjTFgscmCJmgA1Yqtl9ooiMFm2dF`
          }

        }
       )
        setCountrydata(response.data.data)
      } catch (error) {
        console.log(error);
                
      }
    }
    data()
  },[]);
  
  useEffect( ()=> { 
    if(register.user) {
      dispatch(setUser(register));
      navigate("/home");
    }
  },[register])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser({ firstName, lastName, email, password, photoUrl, country }));
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "photoUrl":
        setPhotoUrl(value);
        break;
      case "country":
        setCountry(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex p-6 items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black gap-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-teal-400">Create an Account</h2>
        <p className="text-center text-gray-400">Sign up to get started</p>

        <div className="space-y-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Photo URL:</label>
            <input
              type="text"
              name="photoUrl"
              value={photoUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter photo URL" 
              required
            />
          </div>

          {/* Country */}
          <div>
           <select className="w-full px-4 py-2 mt-1 text-sm text-gray-300 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none" onChange={(e) => setCountry(e.target.value)} >
             <option value="">Select a country</option>
             {countrydata && countrydata.length > 0 
             ? countrydata.map((country) => (
               <option key={country.name} value={country.name}>{country.name}</option>
             )): null}
           </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-sm font-semibold text-white transition-colors bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Sign Up
        </button>

  
        {error && (
          <p className="mt-2 text-center text-sm text-red-500">Registration could not be completed. Verify the data entered</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-medium text-teal-400 hover:underline"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterLogin;
