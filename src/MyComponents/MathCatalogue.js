import React from "react";
import { Link } from "react-router-dom";
import vol from "./../images/volume.png";
import profile from "./../images/profile.png";
import { useSpeechSynthesis } from "react-speech-kit";

function MathCatalogue() {
  const { speak } = useSpeechSynthesis();
  const basicmath =
    "Basics of Mathemetics. It contains 12 lectures and 7 quizes";
  const simmath =
    "Simplified Mathemetics. It contains 12 lectures and 7 quizes";
  return (
    <div class=" m-3	">
      {/* CARD IMAGE DIM.: 1163 x 1206 */}
      <div className="d-flex flex-wrap gap-5 pt-5 ">
        <div class="card" style={{ width: "18rem" }}>
          <img src="/math.png" class="card-img-top" alt="..." />
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Basics of Mathemetics</h5>
            <button onClick={() => speak({ text: basicmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">12 lessons • 7 quiz</p>
            <p class="card-text p-2">
              <img
                className="h-30 w-10 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQG3tgMaLVMfug/profile-displayphoto-shrink_100_100/0/1666875030217?e=1685577600&v=beta&t=vfoT736oR7cZXkuDcl9J6ZSnJIOaJzpkaJ1D-Y6qh_0"
                alt=""
              />
              Mansi Bellani
            </p>
            <a href="videos" class="btn btn-outline-primary">
              <Link to="/videos" class="nav-link active">
                Enroll
              </Link>
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="/math.png" class="card-img-top" alt="..." />
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Simplified Mathemetics</h5>
            <button onClick={() => speak({ text: simmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">12 lessons • 7 quiz</p>
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
export default MathCatalogue;
