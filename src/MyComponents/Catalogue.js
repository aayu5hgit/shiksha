import React from "react";
import {Link} from "react-router-dom"
import vol from './../images/volume.png' 
import profile from './../images/profile.png' 
import { useSpeechSynthesis } from "react-speech-kit";

function Catalogue() {
  const { speak } = useSpeechSynthesis()
  const evs = 'Environmental Science-1. It contains 12 lectures and 7 quizes'
  const evs2 = 'Environmental Science-2. It contains 12 lectures and 7 quizes'
  const evsprac = 'Environmental Science-Practical. It contains the practice of basic science experiments'
  const basicmath = 'Basics of Mathemetics. It contains 12 lectures and 7 quizes'
  const simmath = 'Simplified Mathemetics. It contains 12 lectures and 7 quizes'
  const eng = 'English. It contains 10 story telling lectures and 5 quizes'
  return (
    <div class=" m-3	">

      {/* <h5 class="text-black d-flex justify-content-start p-2 fs-4">Course Catalogue</h5> */}
      {/* <nav class="navbar bg-body-tertiary"> */}
  {/* <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
      <select class="form-select mx-3" aria-label="Default select example">
      <option selected>Type of Course</option>
      <option value="1">Pre-primary</option>
      <option value="2">Primary</option>
      <option value="3">Practical</option>
      </select>
    </form>
  </div> */}
{/* </nav> */}

      {/* CARD IMAGE DIM.: 1163 x 1206 */}
      <div className="d-flex flex-wrap gap-5 pt-5 ">
        <div className="card" style={{ width: "18rem" }}>
          <img src="/evs.png" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Environmental Science-1</h5>
            <button onClick={() => speak({ text: evs })}>
        <img src={vol} alt="volume"></img>
        </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src='https://media.licdn.com/dms/image/C4D03AQGjVJnZjakikg/profile-displayphoto-shrink_200_200/0/1657648501282?e=1685577600&v=beta&t=GZVLCtCI6mAVh0T4uTBJODcNWased_DRS3pxg73A7Vk' alt="" />
            Aayush Talreja
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active ">Enroll</Link>
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
        <img src="/evs.png" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Environmental Science-2</h5><button onClick={() => speak({ text: evs2 })}>
        <img src={vol} alt="volume"></img>
        </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src='https://media.licdn.com/dms/image/C4E03AQFMaAxosx5O8A/profile-displayphoto-shrink_100_100/0/1642847850390?e=1685577600&v=beta&t=LDCn4WpFeU6vUMdAP6e9nQf4Cdz4DNs6zvy52GHkwVI' alt="" />
            Niranjan Yeole
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
        <img src="/evs.png" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">EVS-Practical</h5>
            <button onClick={() => speak({ text: evsprac })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            5 labs
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src='https://media.licdn.com/dms/image/C4D03AQG7ln3Kb53VZA/profile-displayphoto-shrink_100_100/0/1641273867979?e=1685577600&v=beta&t=QRlrRpePXwAuUynmY0zhCahF2ZU4cKns6uUqbDMdIZE' alt="" />
            Anuj Bagad
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
        <img src="/math.png" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Basics of Mathemetics</h5>
            <button onClick={() => speak({ text: basicmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src='https://media.licdn.com/dms/image/D4D03AQG3tgMaLVMfug/profile-displayphoto-shrink_100_100/0/1666875030217?e=1685577600&v=beta&t=vfoT736oR7cZXkuDcl9J6ZSnJIOaJzpkaJ1D-Y6qh_0' alt="" />
            Mansi Bellani
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>
        
        <div class="card" style={{ width: "18rem" }}>
        <img src="/math.png" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4">Simplified Mathemetics</h5>
            <button onClick={() => speak({ text: simmath })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            12 lessons • 7 quiz
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src={profile} alt="" />
            Shams Tabrez
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
        <img src="/eng.jpg" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4 ">English</h5>
            <button onClick={() => speak({ text: eng })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            10 lessons • 5 quizes
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src={profile} alt="" />
            Shams Tabrez
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
        <img src="/enggram.jpg" class="card-img-top" alt="..."/>
          <div className="card-body text-gray-500 font-semibold bg-sky-200 ">
            <h5 class="card-title fs-4 ">English Grammar</h5>
            <button onClick={() => speak({ text: eng })}>
              <img src={vol} alt="volume"></img>
            </button>
            <p class="card-text p-2">
            10 lessons • 5 quizes
            </p>
            <p class="card-text p-2">
            <img className="h-30 w-10 rounded-full" src={profile} alt="" />
            Shams Tabrez
            </p>
            <a href="videos" class="btn btn-outline-primary">
            <Link to="/videos" class="nav-link active">Enroll</Link>
            </a>
          </div>
        </div>
              {/* <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="/evs.png" className='h-80' alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}
export default Catalogue;
