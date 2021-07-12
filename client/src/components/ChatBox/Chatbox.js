import React, { useEffect, useRef, useState, useContext } from 'react';
import socketIOClient from 'socket.io-client';
import { Context } from "../../context/Context";
import "./Chatbox.css"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CloseIcon from '@material-ui/icons/Close';
// import SmsIcon from '@material-ui/icons/Sms';
import { Avatar } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';


const ENDPOINT =
    window.location.host.indexOf('localhost') >= 0
        ? 'http://127.0.0.1:5000'
        : window.location.host;

export default function ChatBox(props, post) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, dispatch } = useContext(Context);
    const { userInfo } = props;
    const [socket, setSocket] = useState(null);
    const uiMessagesRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [messageBody, setMessageBody] = useState('');

    const [messages, setMessages] = useState([
        { icon: TwitterIcon,  name: 'Twitter', body: 'Enter your comment' },
    ]);

    useEffect(() => {
        if (uiMessagesRef.current) {
            uiMessagesRef.current.scrollBy({
                top: uiMessagesRef.current.clientHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
        if (socket) {
            socket.emit('onLogin', {
                userId: user._id,
                username,
                email,
                password,

            });
            socket.on('message', (data) => {
                setMessages([...messages, { body: data.body, name: data.name }]);
            });
        }
    }, [messages, isOpen, socket]);

    const supportHandler = () => {
        setIsOpen(true);
        console.log(ENDPOINT);
        const sk = socketIOClient(ENDPOINT);
        setSocket(sk);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!messageBody.trim()) {
            alert('Error. Please type message.');
        } else {

            setMessages([...messages, { body: messageBody, name: "User" }]);
            setMessageBody('');
            setTimeout(() => {
                socket.emit('onMessage', {
                    body: messageBody,
                    userId: user._id,
                });
            }, 1000);
        }
    };
    const closeHandler = () => {
        setIsOpen(false);
    };
    return (
        <div className="chatbox">
            {!isOpen ? (
                            <ChatBubbleOutlineIcon type="button" onClick={supportHandler}fontSize="small"
                           />
            ) : (
                <div className="card card-body">
                    <div className="row">
                            {/* <strong>Exit </strong> */}
                        <button type="button" onClick={closeHandler}>
                                < CloseIcon fontSize="small"/>
                            </button>
                        </div>
                        <ul ref={uiMessagesRef}>
                            {messages.map((msg, index) => (
                        <p key={index}>
                                    <ChatBubbleOutlineIcon type="button" onClick={supportHandler} fontSize="small"
                                    />

                                <strong className="message">{`${msg.name}: `}</strong> {msg.body}
                            </p>
                        ))}
                    </ul>
                        <div>

                            <form onSubmit={submitHandler} className="row">

                                <input

                                value={messageBody}
                                onChange={(e) => setMessageBody(e.target.value)}
                                type="text"
                                placeholder="type message......."
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
