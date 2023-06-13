import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to Steam App</h1>
            <p className="py-6">Consult all achievements</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">What is your SteamId ?</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => router.push('/dashboard')}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <button
      className="btn btn-primary"
      onClick={() => router.push('/dashboard')}
    >
      Log to steam
    </button>
*/
}
