import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);
 const showNotification = (message) => {
    let granted = false;
		if (Notification.permission === 'granted') {
			granted = true;
		} else if (Notification.permission !== 'denied') {
			let permission = Notification.requestPermission();
			granted = permission === 'granted' ? true : false;
		}
    if (granted) {
        // create a new notification
        const notification = new Notification('New Message', {
          body: `Click To View More or Reply`,
          icon: 'https://stem-club-chat.netlify.app/favicon.ico'
        });

        // navigate to a URL when clicked
        notification.addEventListener('click', () => {

          window.open('https://stem-club-chat.vercel.app/', '_self');
        });
      }
}
export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/");
    }
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
      <div className="shadow">
        <ChatEngine
          height="100vh"
          projectID="889e8a88-ce27-4629-8051-3f85c29181e1"
          userName={username}
          userSecret={secret}
   onNewMessage={(data, message) => showNotification(JSON.stringify(message)).then(console.log).then(new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play())
      }
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
  );
}
