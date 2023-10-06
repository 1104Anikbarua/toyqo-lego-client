import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import login from "../Register/signup.json";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LegoContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Google from "../Google/Google";
import UseScroll from "../../../UseScroll/UseScroll";
import PageTitle from "../../PageTitle/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState({});
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const { signUpUser, updateUser, setRefresh } = useContext(LegoContext);

  const imageKey = import.meta.env.VITE_IMAGE_KEY;
  // console.log(imageKey)

  const handlePhotoChange = (event) => {
    // console.log(event.target.files[0])
    setPhoto(event.target.files[0]);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  UseScroll(location?.pathname);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleRegisterUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    if (emailError) {
      event.target.email.focus();
      return;
    } else if (passwordError) {
      event.target.password.focus();
      return;
    }

    const formData = new FormData();
    formData.append("image", photo);
    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.status === 200) {
          signUpUser(email, password)
            .then((result) => {
              const user = result.user;
              setError("");
              updateUser(name, data?.data?.url)
                .then(() => {
                  setRefresh(new Date().getTime());
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${name} is set as Display Name`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                })
                .catch(() => {
                  Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something Went Wrong",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
              navigate(from, { replace: true });
            })
            .catch((err) => {
              const errorMessage = err.message;
              setError(errorMessage);
            });
          event.target.reset();
        }
      });
  };

  const handleEmailChange = (event) => {
    const typedEmail = event.target.value;
    setEmail(typedEmail);

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(typedEmail)) {
      setEmailError("Please provide a valid email");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (event) => {
    const typedPassword = event.target.value;
    setPassword(typedPassword);

    if (typedPassword.length < 6) {
      setPasswordError("Password must be alleast 6 character long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="mt-20 w-full md:flex items-center justify-between gap-5 max-w-7xl mx-auto px-5 lg:px-0">
      <PageTitle titles={"Register"}></PageTitle>
      <Lottie className="w-full" animationData={login} loop={true}></Lottie>
      <div className="w-full bg-gray-50 rounded-md py-11">
        <h1 className="text-center font-roboto font-bold text-xl">
          Create Account
        </h1>
        <form onSubmit={handleRegisterUser} className="flex flex-col">
          <div className="flex flex-col w-full max-w-sm mx-auto">
            <label
              htmlFor="name"
              className="
                            text-lg font-roboto font-semibold mb-2"
            >
              Name
            </label>
            <input
              className="bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col w-full max-w-sm mx-auto">
            <label
              htmlFor=""
              className="
                            text-lg font-roboto font-semibold mb-2"
            >
              Photo Url
            </label>
            <label
              htmlFor="file"
              className="w-full max-w-sm bg-blue-100 py-1 rounded-md flex items-center"
            >
              <HiOutlineCloudUpload className="text-lg font-semibold mr-2 font-roboto" />
              Upload Image
            </label>
            <input
              onChange={handlePhotoChange}
              className="bg-blue-100
                            hidden outline-none rounded-md pl-1 py-1 placeholder:pl-2"
              type="file"
              name="photo"
              id="file"
            />
          </div>
          <div className="flex flex-col w-full max-w-sm mx-auto">
            <label
              htmlFor="email"
              className="
                            text-lg font-roboto font-semibold mb-2"
            >
              Email
            </label>
            <input
              onChange={handleEmailChange}
              value={email}
              className={`bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 ${
                email
                  ? emailError
                    ? "outline-red-500 text-red-500"
                    : "outline-green-600"
                  : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            {emailError && (
              <p className="font-roboto text-red-500 mt-2 w-full max-w-sm mx-auto">
                {emailError}
              </p>
            )}
          </div>
          <div className="flex flex-col w-full max-w-sm mx-auto">
            <label
              htmlFor="password"
              className="
                            text-lg font-roboto font-semibold mb-2"
            >
              Password
            </label>
            <input
              onChange={handlePasswordChange}
              value={password}
              className={`bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                ${
                                  password
                                    ? passwordError
                                      ? "outline-red-500 text-red-500"
                                      : "outline-green-600"
                                    : ""
                                }`}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            {passwordError && (
              <p className="font-roboto text-red-500 mt-2 w-full max-w-sm mx-auto">
                {passwordError}
              </p>
            )}
          </div>
          {error && (
            <p className="text-red-500 font-roboto mt-2 w-full max-w-sm mx-auto">
              {error}
            </p>
          )}
          <input
            className="bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md
                    outline-none 
                    rounded-md w-full max-w-sm mx-auto mt-5 py-1 border border-gray-100"
            type="submit"
            value="Register"
          />
          <p className="font-roboto font-medium mt-2 w-full max-w-sm mx-auto">
            Already have an account? Please{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
        <Google></Google>
      </div>
    </div>
  );
};

export default Register;
