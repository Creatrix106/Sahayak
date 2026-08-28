import React, {
    useState,
    useEffect,
    useRef,
} from "react";
import './SahayakAI.css'
import {
    BotMessageSquare,
    SendHorizontal,
    Mic,
    MicOff
} from "lucide-react";
import ReactMarkdown from "react-markdown";
const SahayakAI = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [listening, setListening] = useState(false);
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
                "http://localhost:8000/chat",
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
        } finally {
            setLoading(false);
        }
    };
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onresult = (event) => {
            setMessage(event.results[0][0].transcript);
        };

        recognition.onerror = (e) => {
            console.log(e.error);
            setListening(false);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognitionRef.current = recognition;


        return () => {
        recognition.abort();
    };
    }, []);

    const startListening = () => {
        if (listening) return;
        const recognition = recognitionRef.current;
        if (!recognition) {
            alert("Speech Recognition is not supported.");

            return;
        }
        recognition.start();
        
    };


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
                            onClick={() => {
                                recognitionRef.current?.stop();
                                setListening(false);
                                setOpen(false);
                            }}
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
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>

                        ))}
                        {
                            loading && (
                                <div className="message bot">
                                    Thinking...
                                </div>
                            )
                        }
                        <div ref={messagesEndRef}></div>
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
                            placeholder={
                                listening
                                    ? "🎤 Listening..."
                                    : "Ask something..."
                            }
                        />



                        <button
                            className="mic-btn"
                            onClick={startListening}
                        >
                            {
                                listening
                                    ? <MicOff />
                                    : <Mic />
                            }
                        </button>

                        <button
                            onClick={sendMessage}
                            disabled={listening}
                        >
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
