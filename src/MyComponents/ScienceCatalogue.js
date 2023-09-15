import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import vol from "./../images/volume.png";
import profile from "./../images/profile.png";
import { useSpeechSynthesis } from "react-speech-kit";

function ScienceCatalogue() {
  const { speak } = useSpeechSynthesis();
  const evs = "Environmental Science-1. It contains 12 lectures and 7 quizes";
  const evs2 = "Environmental Science-2. It contains 12 lectures and 7 quizes";
  const evsprac = "Environmental Science-Practical. It contains the practice of basic science experiments";

  const cardData = [
    {
      title: "Environmental Science-1",
      imgSrc: "/evs.png",
      description: "12 lessons • 7 quiz",
      instructor: {
        name: "Aayush Talreja",
        imgSrc: "https://media.licdn.com/dms/image/C4D03AQGjVJnZjakikg/profile-displayphoto-shrink_200_200/0/1657648501282?e=1685577600&v=beta&t=GZVLCtCI6mAVh0T4uTBJODcNWased_DRS3pxg73A7Vk",
      },
      link: "/videos",
    },
    {
      title: "Environmental Science-2",
      imgSrc: "/evs.png",
      description: "12 lessons • 7 quiz",
      instructor: {
        name: "Niranjan Yeole",
        imgSrc: "https://media.licdn.com/dms/image/C4E03AQFMaAxosx5O8A/profile-displayphoto-shrink_100_100/0/1642847850390?e=1685577600&v=beta&t=LDCn4WpFeU6vUMdAP6e9nQf4Cdz4DNs6zvy52GHkwVI",
      },
      link: "/videos",
    },
    {
      title: "EVS-Practical",
      imgSrc: "/evs.png",
      description: "5 labs",
      instructor: {
        name: "Anuj Bagad",
        imgSrc: "https://media.licdn.com/dms/image/C4D03AQG7ln3Kb53VZA/profile-displayphoto-shrink_100_100/0/1641273867979?e=1685577600&v=beta&t=QRlrRpePXwAuUynmY0zhCahF2ZU4cKns6uUqbDMdIZE",
      },
      link: "/videos",
    },
  ];

  return (
    <div className="m-3">
      <div className="flex-wrap gap-5 pt-5 justify-content-center d-flex">
        {cardData.map((card, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={card.imgSrc} className="card-img-top" alt="..." />
            <div className="font-semibold text-gray-500 card-body bg-sky-200">
              <h5 className="card-title fs-4">{card.title}</h5>
              <button onMouseOver={() => speak({ text: card.description })}>
                <img src={vol} alt="volume" />
              </button>
              <p className="p-2 card-text">{card.description}</p>
              <p className="p-2 card-text">
                <img className="w-10 rounded-full h-30" src={card.instructor.imgSrc} alt="" />
                {card.instructor.name}
              </p>
              <Link to={card.link} className="justify-between btn btn-outline-primary">
                Enroll
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScienceCatalogue;
