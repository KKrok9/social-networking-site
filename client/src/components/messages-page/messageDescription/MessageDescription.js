import styles from "../../../styles/MessageDescription.module.css"

const MessageDescrpition = (props) => {
    return(
        <div className={styles["container"]}>
            <div className={styles["author-row"]}>
                From: {props.selectedMessage.author}
            </div>
            <div className={styles["receiver-row"]}>
                To: {props.selectedMessage.receiver}
            </div>
            <div className={styles["title-row"]}>
                {props.selectedMessage.header}
            </div>
            <div className={styles["content-row"]}>
                {props.selectedMessage.content}
            </div>
            <div className={styles["date-row"]}>
                Message sent: {props.selectedMessage.date}
            </div>
        </div>
        )
};
export default  MessageDescrpition ;
