import React, {useState} from "react";
import { Layout } from "../components/Layout";
import axios from "axios";
import {API} from "../components/API";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const setValues = () => {
    setName("");
    setUser("");
    setPassword("");
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    const data = {
      name: name,
      user: user,
      pass: password
    }
    try{
      const res = await axios.post(`${API}/signup`, data)
      
      if(res.data.message === "User already exists"){
        toast(res.data.message, { type: "error" });
      } else{
        navigate("/login")
      }
      setValues()
    }catch(err){
      console.log(err)
    }

  }

  return (
    <>
      <Layout />

      <section class="bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <div class="space-y-4 md:space-y-6" >
                <div>
                  <label
                    for="Name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Juan Fernandez"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your user
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Juanito_Fernandez"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}

                  />
                </div>

                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  class="w-full bg-indigo-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={handleSubmit}
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 ">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    class="font-medium text-primary-600 hover:underline text-indigo-600"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
