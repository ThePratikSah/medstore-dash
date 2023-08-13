export function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fdata = Object.fromEntries(formData.entries());

    const response = await fetch("http://139.59.65.217:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fdata),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      console.log("Login successful");

      await fetch("http://139.59.65.217:3000/user/get-user", {
        headers: {
          "X-Access-Token": localStorage.getItem("token"),
        },
      });
    } else {
      console.log("Please check your username and password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20"
      >
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Email address</label>

            <input
              placeholder="Type here"
              type="email"
              name="email"
              className="input max-w-full"
            />
            {/* <label className="form-label">
              <span className="form-label-alt">
                Please enter a valid email.
              </span>
            </label> */}
          </div>
          <div className="form-field">
            <label className="form-label">
              <span>Password</span>
            </label>
            <div className="form-control">
              <input
                placeholder="Type here"
                type="password"
                name="password"
                className="input max-w-full"
              />
            </div>
          </div>

          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button type="submit" className="btn btn-primary w-full">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
