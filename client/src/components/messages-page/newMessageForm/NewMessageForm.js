import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../../styles/NewMessageForm.module.css";
import { useState, useEffect } from "react";
import { decodeJWT } from "../../../utils/decode";

const ButtonStyles = {
  width: "15%",
  height: "20%",
  marginTop: "1%",
  fontSize: "large",
  backgroundColor: "var(--main-blue)",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  color: "#4b4453",
  ":hover": {
    color: "white",
    backgroundColor: "var(--lighter-blue)",
  },
};

const NewMessageForm = (props) => {
  const [messageData, setMessageData] = useState({
    messageTo: "",
    messageHeader: "",
    messageContent: "",
  });

  const handleResetInputs = () => {
    setMessageData({
      messageTo: "",
      messageHeader: "",
      messageContent: "",
    });
  };

  const senderData = decodeJWT();
  const currentDate = new Date();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessageData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  async function sendMessage() {
    if (
      messageData.messageTo.length > 0 &&
      messageData.messageHeader.length > 0 &&
      messageData.messageContent.length > 0
    ) {
    
      try {
        const response = await fetch("http://localhost:5000/send-message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: senderData,
            receiver: messageData.messageTo,
            header: messageData.messageHeader,
            content: messageData.messageContent,
            date: currentDate,
          }),
        });

        const data = await response.json();
        handleResetInputs();
        props.getMyMessages();
        console.log(data);
      } catch (err) {
        console.error("something went wrong!", err);
      }
    }
    return;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <p className={styles["header"]}>New Message</p>
      </div>
      <div className={styles["inputs-container"]}>
        <div className={styles["double-inputs"]}>
          <label className={styles["label"]}>To:</label>
          <textarea
            className={styles["input"]}
            name="messageTo"
            value={messageData.messageTo}
            onChange={handleInputChange}
          />
          <label className={styles["label"]}>Message Header</label>
          <textarea
            className={styles["input"]}
            name="messageHeader"
            value={messageData.messageHeader}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles["single-input"]}>
          <label className={styles["label"]}>Message Content</label>
          <textarea
            className={styles["input-content"]}
            name="messageContent"
            value={messageData.messageContent}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            sx={ButtonStyles}
            onClick={sendMessage}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewMessageForm;
