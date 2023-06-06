import MessageDescription from "./messageDescription/MessageDescription";
import MessagesList from "./messagesList/MessagesList";
import NewMessageForm from "./newMessageForm/NewMessageForm";
import styles from "../../styles/Messages.module.css";
import { useState, useEffect } from "react";
import { decodeJWT } from "../../utils/decode";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState({});

  const handleChangeSelectedMessage = (message) =>{
    setSelectedMessage(message);
  }
  useEffect(()=>{
    console.log(selectedMessage);
  },[selectedMessage])

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(decodeJWT);
  }, []);

  async function getMyMessages(req, res) {
    if (userData && userData.email) {
      const email = userData.email.toString();
      try {
        const response = await fetch("http://localhost:5000/get-my-messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        setMessages(data.reverse());
      } catch (error) {
        console.error("something went wrong : ", error);
      }
    }
  }

  useEffect(() => {
    getMyMessages();
  }, [userData]);

  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <NewMessageForm getMyMessages={getMyMessages}></NewMessageForm>
      </div>
      <div className={styles["messages-container"]}>
        <div className={styles["messages-list-container"]}>
          <MessagesList messages={messages} handleChangeSelectedMessage={handleChangeSelectedMessage}></MessagesList>
        </div>
        <div className={styles["messages-description-container"]}>
          <MessageDescription selectedMessage={selectedMessage}></MessageDescription>
        </div>
      </div>
    </div>
  );
};
export default Messages;
