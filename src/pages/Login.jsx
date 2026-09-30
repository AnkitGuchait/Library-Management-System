import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router";
import { login } from "../slices/authslice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered user from localStorage
    const savedUser = localStorage.getItem("registeredUser");

    if (!savedUser) {
      alert("Please register first");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check email and password
    if (
      formData.email === user.email &&
      formData.password === user.password
    ) {
      // Store user in Redux
      dispatch(
        login({
          name: user.name,
          email: user.email
        })
      );

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Library Login
              </h2>

              <form onSubmit={handleSubmit}>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

              {/* Register */}
              <div className="text-center mt-3">
                <span>Don't have an account? </span>

                <Link to="/register">
                  Register
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
