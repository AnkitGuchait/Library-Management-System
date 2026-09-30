import { useState } from "react";
import { useNavigate, Link } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create user object
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };

    // Save user in localStorage
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Registration successful");

    // Go to login page
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Library Registration
              </h2>

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
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

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Register button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Register
                </button>

              </form>

              {/* Login */}
              <div className="text-center mt-3">
                <span>Already have an account? </span>

                <Link to="/login">
                  Login
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
