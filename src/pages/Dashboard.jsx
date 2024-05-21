import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [list, setList] = useState([]);
  const URL = import.meta.env.VITE_BASE_APP_URL

  const fetchApi = async () => {
    const response = await fetch("http://192.168.100.218:8000/api/v1/games");
    const data = await response.json();
    setList(data.content);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-primary navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Gaming Portal
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
              <a
                href="discover-games.html"
                className="nav-link px-2 text-white"
              >
                Discover Games
              </a>
            </li>
            <li>
              <a href="manage-games.html" className="nav-link px-2 text-white">
                Manage Games
              </a>
            </li>
            <li>
              <a href="profile.html" className="nav-link px-2 text-white">
                User Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active bg-dark" href="#">
                Welcome, Player1
              </a>
            </li>
            <li className="nav-item">
              <a
                href="../signin.html"
                className="btn bg-white text-primary ms-4"
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className="hero py-5 bg-light">
          <div className="container text-center">
            <h1>Discover Games</h1>
          </div>
        </div>

        <div className="list-form py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="mb-3">300 Game Avaliable</h2>
              </div>

              <div className="col-lg-8">
                <div className="mb-3">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary">
                      Popularity
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      Recently Updated
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      Alphabetically
                    </button>
                  </div>

                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary">
                      ASC
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      DESC
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {list.map((item, index) => {
                const latestVersion = item.latest_version
                const data = latestVersion[latestVersion.length - 1]
                return (
                  <div className="col-md-6" key={index}>
                    <Link className="card card-default mb-3" to={`/game/${item.slug}/${data.version}`}>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-4">
                            <img src={`${URL}/${data.storage_path}/thumbnail.png`} alt="" width={150} height={150}/>
                          </div>
                          <div className="col">
                            <h5 className="mb-1">
                              {item.title}{" "}
                              <small className="text-muted">By Dev1</small>
                            </h5>
                            <div>{item.description}</div>
                            {/* <hr className="mt-1 mb-1"> */}
                            <div className="text-muted">
                              #scores submitted : 203
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
