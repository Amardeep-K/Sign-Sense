import React, { useContext, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from "react-icons/fa";
import { VideoCallContext } from "../../context/Context";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa"; // Some hand icons
import {
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdCallEnd,
  MdOutlineMessage,
  MdIosShare,
} from "react-icons/md";
import { Button, Col, Row } from "react-bootstrap";
import { Avatar } from "antd";
import { FaUserLarge, FaVolumeXmark } from "react-icons/fa6";
import { socket } from "../../config/config";
import Loading from "../Loading/Loading";
import ChatModal from "../Chat/Chat";
import "./Video.css";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import { drawHand } from "../../utilities";
import gestures from "../../Gestures/aslGestures.jsx";

const Video = () => {
  const {
    call,
    isCallAccepted,
    myVideoRef,
    partnerVideoRef,
    userStream,
    name,
    isCallEnded,
    sendMessage: sendMessageFunc,
    receivedMessage,
    chatMessages,
    setChatMessages,
    endCall,
    opponentName,
    isMyVideoActive,
    isPartnerVideoActive,
    toggleVideo,
    isMyMicActive,
    isPartnerMicActive,
    toggleMicrophone,
    toggleFullScreen,
    toggleScreenSharingMode,
  } = useContext(VideoCallContext);

  const [sendMessage, setSendMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);

  // Gesture detection states
  const canvasRef = useRef(null);
  const [emojiText, setEmojiText] = useState("");
  const [Text, setText] = useState([]);
  const [lastGesture, setLastGesture] = useState(null);

  useEffect(() => {
    const handleMessage = ({ message, senderName }) => {
      const newMessage = {
        message,
        type: "received",
        senderName,
        timestamp: Date.now(),
      };

      setChatMessages((prev) => [...prev, newMessage]);
      if (!isModalVisible) {
        setHasUnreadMessages(true);
      }
    };

    socket.on("receiveMessage", handleMessage);
    return () => socket.off("receiveMessage", handleMessage);
  }, [setChatMessages, isModalVisible]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    if (!isModalVisible) {
      setHasUnreadMessages(false);
    }
  };

  const onSearch = (message) => {
    if (message) {
      sendMessageFunc(message);
      setSendMessage("");
    }
  };
  const [isGestureActive, setIsGestureActive] = useState(false);
  const [detectedGestures, setDetectedGestures] = useState(new Set()); // Use Set to ensure unique gestures
  // === Gesture detection setup ===
  useEffect(() => {
    const runHandpose = async () => {
      const net = await handpose.load();
      console.log("Handpose model loaded");

      const detect = async () => {
        if (!isGestureActive) return;
        if (partnerVideoRef.current && partnerVideoRef.current.readyState === 4) {
          const video = partnerVideoRef.current;
          const videoWidth = video.videoWidth;
          const videoHeight = video.videoHeight;

          video.width = videoWidth;
          video.height = videoHeight;
          canvasRef.current.width = videoWidth;
          canvasRef.current.height = videoHeight;

          const hand = await net.estimateHands(video);

          if (hand.length > 0) {
            const GE = new fp.GestureEstimator(Object.values(gestures));
            const estimate = await GE.estimate(hand[0].landmarks,10);

            if (estimate.gestures.length > 0) {
              const confidence = estimate.gestures.map((prediction) => prediction.score);
              const maxIndex = confidence.indexOf(Math.max(...confidence));
              const detected = estimate.gestures[maxIndex].name;

              if (
                detected !== lastGesture &&
                estimate.gestures[maxIndex].score > 9
              ) {
                setEmojiText(detected);
                setDetectedGestures((prevGestures) => new Set(prevGestures).add(detected));
                setText((prev) => [...prev, detected]);
                setLastGesture(detected);
                console.log("Detected:", detected);
              }
            }
          }
        

          const ctx = canvasRef.current.getContext("2d");
          drawHand(hand, ctx);
        }
      };

      const interval = setInterval(detect, 200);
      return () => clearInterval(interval);
    };

    runHandpose();
  }, [myVideoRef, isGestureActive, lastGesture]);

  const combinedWord = Array.from(detectedGestures).join(" ");
  return (
    <>
      <div className="video-container">
        <Row>
          {userStream ? (
            <Col xl={isCallAccepted && 6} md={isCallAccepted && 6} sm={isCallAccepted && 12}>
              <div className="video-paper">
                <h5 className="video-name">{name || "Name"}</h5>
                <div className="video-avatar" style={{ position: "relative" }}>
                  <video
                    playsInline
                    muted
                    ref={myVideoRef}
                    onClick={toggleFullScreen}
                    autoPlay
                    className={isCallAccepted ? "video-main" : "video-small"}
                    style={{ opacity: isMyVideoActive ? 1 : 0 }}
                  />
                  
                  <Avatar
                    className={`avatar-background ${
                      isMyVideoActive ? "avatar-hidden" : "avatar-visible"
                    }`}
                    size={100}
                    icon={
                      !name && (
                        <FaUserLarge size={45} style={{ marginBottom: "8px" }} />
                      )
                    }
                  >
                    {name?.[0]?.toUpperCase()}
                  </Avatar>
                  {!isMyMicActive && <FaVolumeXmark className="mic-off-icon" size={42} />}
                </div>
              </div>
            </Col>
          ) : (
            <Loading />
          )}
          {isCallAccepted && !isCallEnded && partnerVideoRef && (
            <Col
              xl={isCallAccepted && 6}
              md={isCallAccepted && 6}
              sm={isCallAccepted && 12}
              className="pt-xl-0 pt-lg-0 pt-md-0 pt-3"
            >
              <div className="video-paper">
                <h5 className="video-name">{call.name || opponentName || "Name"}</h5>
                <div className="video-avatar">
                  <video
                    playsInline
                    ref={partnerVideoRef}
                    onClick={toggleFullScreen}
                    autoPlay
                    className="video-main"
                    style={{ opacity: isPartnerVideoActive ? 1 : 0 }}
                  />
                  <canvas
                    ref={canvasRef}
                    className="gesture-canvas"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                  />
                  {emojiText && (
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        zIndex: 11,
                      }}
                    >
                      Detected ASL: {emojiText}
                    </div>
                  )}
                  <Avatar
                    className={`avatar-background ${
                      isPartnerVideoActive ? "avatar-hidden" : "avatar-visible"
                    }`}
                    size={100}
                    icon={
                      !opponentName &&
                      !call.name && <FaUserLarge size={45} style={{ marginBottom: "8px" }} />
                    }
                  >
                    {(opponentName || call.name)?.slice(0, 1).toUpperCase()}
                  </Avatar>
                  {!isPartnerMicActive && <FaVolumeXmark className="mic-off-icon" size={42} />}
                </div>
              </div>
            </Col>
          )}
        </Row>
      </div>

      {userStream && (
        <div className="video-controls">
          <Button onClick={toggleMicrophone} className="video-control-btn">
            {isMyMicActive ? <MdMic size={25} /> : <MdMicOff size={25} />}
          </Button>
          <Button onClick={toggleVideo} className="video-control-btn">
            {isMyVideoActive ? <MdVideocam size={25} /> : <MdVideocamOff size={25} />}
          </Button>
          <Button onClick={() => setIsGestureActive((prev) => !prev)} className="video-control-btn">
            {isGestureActive ? <FaHandRock className="hand-icon" size={25} /> : <FaTimes className="cross-icon" size={25} />}
          </Button>

          {isCallAccepted && !isCallEnded && (
            <Button className="video-control-btn" onClick={toggleScreenSharingMode}>
              <MdIosShare size={23} />
            </Button>
          )}
          {isCallAccepted && !isCallEnded && (
            <Button className="video-control-btn" onClick={toggleModal}>
              <MdOutlineMessage size={22} />
              {hasUnreadMessages && <div className="notification-dot" />}
            </Button>
          )}
          {isCallAccepted && !isCallEnded && (
            <Button className="decline-call-btn" onClick={endCall}>
              <MdCallEnd size={22} />
            </Button>
          )}
        </div>
      )}
      <ChatModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        chatMessages={chatMessages}
        sendMessage={sendMessage}
        setSendMessage={setSendMessage}
        onSearch={onSearch}
        receivedMessage={receivedMessage}
      />
      {combinedWord && (
        <div style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "10px",
          zIndex: 11,
        }}>
          Combined ASL: {combinedWord}
        </div>
      )}
    </>
  );
};

export default Video;
