import React, {
    useState,
    useEffect,
    useRef,
} from "react";
import './SahayakAI.css'
import { BotMessageSquare, SendHorizontal } from 'lucide-react';

const SahayakAI = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hello! I'm Sahayak AI. How can I help you today?"
        }
    ]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const currentMessage = message;

        const userMessage = {
            sender: "user",
            text: currentMessage,
        };

        setMessages((prev) => [
            ...prev,
            userMessage,
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        message: currentMessage,
                    }),
                }
            );

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: data.reply,
                },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text:
                        "Something went wrong 😔",
                },
            ]);
        }

        setLoading(false);
    };
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);
    return (
        <div id="sahayak-ai">
            <div
                className="ai-button"
                onClick={() => setOpen(!open)}
            >
                <BotMessageSquare color="white" size={33} />
            </div>
            {
                open && (
                    <div className="chat-container">
                        <div className="chat-header">
                            <span>
                                <BotMessageSquare color="white" size={30} />
                                Sahayak AI
                            </span>

                            <button
                                className="close-chat"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="chat-body">
                            {messages.map((msg, index) => (

                                <div
                                    key={index}
                                    className={msg.sender}
                                >
                                    {msg.text}
                                </div>

                            ))}
                            {
                                loading && (
                                    <div className="message bot">
                                        Thinking...
                                    </div>
                                )
                            }
                        </div>

                        <div className="chat-input">
                            <input
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                                placeholder="Ask something..."
                            />

                            <button onClick={sendMessage}>
                                <SendHorizontal />
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SahayakAI
