import {useEffect, useState} from "react";
import Notification from "../ui/notification";
import classes from "./contact-form.module.css";

const sendContactData = async contactDetails => {
  const response = await fetch(`/api/contact`, {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something wnt wrong");
  }
};

const ContactForm = () => {
  const [enterdEmail, setEnterdEmail] = useState("");
  const [enterdName, setEnterdName] = useState("");
  const [enterdMessage, setEnterdMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = async e => {
    e.preventDefault();
    setRequestStatus("pending");
    try {
      await sendContactData({
        email: enterdEmail,
        name: enterdName,
        message: enterdMessage,
      });
      setRequestStatus("success");
      setEnterdEmail("");
      setEnterdMessage("");
      setEnterdName("");
    } catch (error) {
      setRequestStatus("error");
      setError(error.message);
    }
  };
  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Data",
      message: "Your message in on the way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Data has sent",
      message: "message sent successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: {error},
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How an I help you</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enterdEmail}
              onChange={e => setEnterdEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              required
              value={enterdName}
              onChange={e => setEnterdName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            id="message"
            required
            rows={5}
            value={enterdMessage}
            onChange={e => setEnterdMessage(e.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          error={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
