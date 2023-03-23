import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="hero min-h-screen snap-center bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Rejoins nous !</h1>
          <p className="py-6 pt-10">
            Connectez vous avez Discord pour accéder à vos stats.
          </p>
          <p className="py-6">Vous devez rentrer votre steam ID.</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input-bordered input"
              />
              <label className="label">
                <a href="#" className="link-hover label-text-alt link">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
