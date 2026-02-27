import React from "react";
import { Link } from "react-router-dom";
import vol from "./../images/volume.png";
import profile from "./../images/profile.png";
import { useSpeechSynthesis } from "react-speech-kit";

function EnglishCatalogue() {
  const { speak } = useSpeechSynthesis();
  const eng = "English. It contains 10 story telling lectures and 5 quizes";
  return (
    <div class=" m-3	">
      {/* CARD IMAGE DIM.: 1163 x 1206 */}
      <div className="d-flex flex-wrap gap-5 pt-5 ">
        <div class="card" style={{ width: "18rem" }}>
          <img src="/eng.jpg" class="card-img-top" alt="..." />
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4 ">English</h5>
            <button onClick={() => speak({ text: eng })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">10 lessons • 5 quizes</p>
            <p class="card-text p-2">
              <img className="h-30 w-10 rounded-full" src={profile} alt="" />
              Shams Tabrez
            </p>
            <a href="videos" class="btn btn-outline-primary">
              <Link to="/videos" class="nav-link active">
                Enroll
              </Link>
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="/enggram.jpg" class="card-img-top" alt="..." />
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4 ">English Grammar</h5>
            <button onClick={() => speak({ text: eng })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">10 lessons • 5 quizes</p>
            <p class="card-text p-2">
              <img className="h-30 w-10 rounded-full" src={profile} alt="" />
              Shams Tabrez
            </p>
            <a href="videos" class="btn btn-outline-primary">
              <Link to="/videos" class="nav-link active">
                Enroll
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EnglishCatalogue;
