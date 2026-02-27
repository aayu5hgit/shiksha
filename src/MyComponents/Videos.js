import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
// import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
import {
  Card,
} from "@chakra-ui/react";
import Header from "./../MyComponents/Header";
import Footer from "./../MyPages/Footer";

const Videos = () => {
  const videotitle = [
    {
      name: "Lecture Title",
      description:
        "This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.This is a sample video for testing and demo. This is called description.",
    },
  ];

  const [showModal, setShowModal] = React.useState(false);

  const videosArr = [
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/Photosynthesis.mp4?alt=media&token=21b4de4c-9057-4085-a64b-4cbb09123519",
    "https://firebasestorage.googleapis.com/v0/b/shiksha-b8390.appspot.com/o/earthquake.mp4?alt=media&token=eb918051-aabe-4631-8696-b812b4915706",
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  function about() {
    var player = { videoSrc };
    player.on("timeupdate", function () {
      var currentTime = player.currentTime();
      var duration = player.duration();

      if (currentTime / duration >= 0.5) {
        console.log("The user spent at least 50% of the video.");
      }
    });

    <VStack spacing={2} alignItems={"flex-start"} p={"6"} w={"full"}>
      {videotitle.map((item) => (
        // <Heading key={videotitle.name}>{videotitle.name}</Heading>
        <Card maxW="l">
          <Heading key={item.name}>{item.name}</Heading>
          <Text key={item.description}>{item.description}</Text>
        </Card>
      ))}
      ;
    </VStack>;
  }
  return (
    <>
      <Header />
      <Stack direction={["column", "row"]} h={"100vh"}>
        <VStack w={"full"}>
          <video
            controls
            controlsList="nodownload"
            src={videoSrc}
            key={videotitle}
            style={{
              width: "100%",
              marginTop: "0.6rem",
            }} onClick={about}
          ></video>

          {showModal ? (
            <>
              <p className="text-gray-800 hover:text-sky-400 w-auto">
                This is a sample video for testing and demo. This is called
                description.This is a sample video for testing and demo. This is
                called description.This is a sample video for testing and demo.
                This is called description.This is a sample video for testing
                and demo. This is called description.
              </p>
            </>
          ) : null}
          <button
            className="overflow-x-hidden overflow-y-hidden bg-gray-800 text-white active:bg-gray-600 font-bold uppercase text-xl px-4 py-2 shadow hover:shadow-lg outline-none rounded focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
            onDoubleClick={() => setShowModal(false)}
          >
            Lecture Description
          </button>
        </VStack>

        <VStack
          w={["full", "xl"]}
          alignItems={"stretch"}
          p="8"
          spacing={"8"}
          overflowY={"auto"}
        >
          {videosArr.map((item, index) => (
            <Button
              variant={"contained"}
              colorScheme={"blue"}
              onClick={() => setVideoSrc(item)}
            >
              Lecture {index + 1}
            </Button>
          ))}
        </VStack>
      </Stack>
      <Footer />
    </>
  );
};

export default Videos;
