import React, { useState } from 'react';

import { Container } from './styles';

export default function Contact() {

    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [messageMaxLength, setMessageMaxLength] = useState(1500);
    const [lockButton, setLockButton] = useState(false);

    function updateMessageMaxLength() {
        if (inputName.length + inputMail.length > 400) {
            setMessageMaxLength(1500 - (inputName.length + inputMail.length));
        }
        else {
            setMessageMaxLength(1500);
        }
    }

    function handleKeyDown(event) {
        updateMessageMaxLength();
    }

    function handleNameChange(event) {
        setInputName(event.target.value);
    }

    function handleMailChange(event) {
        setInputMail(event.target.value);
    }

    function handleMessageChange(event) {
        setInputMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const body = {
            embeds: [
                {
                    title: inputName,
                    description: inputMessage,
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: inputMail
                    },
                    color: 261247
                }
            ],
            content: "@everyone"
            // content: `**NAME**:\n\`\`\`${inputName}\`\`\`**MAIL**:\n\`\`\`${inputMail}\`\`\`**MESSAGE**:\n\`\`\`${inputMessage}\`\`\``,
        };

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://discordapp.com/api/webhooks/643862830168145920/HcLRUH4Bh8RBj-z340Shr53-lICFl24-SGnkaZdGvvuoJQXYxmjhdOrM8Mi3D9WOD1u5");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(body));

        setLockButton(true);
    }

    return (
        <Container>
            <div className="row">
                <div className="right-content">
                    <div className="animated-container">
                        <h1>Leave your <span>message</span></h1>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/telephone.png`} alt="telephone" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <label htmlFor="name">Nome</label>
                        <input
                            required
                            type="text"
                            pattern="[a-zA-Z\s]+"
                            value={inputName}
                            onKeyDown={handleKeyDown}
                            onChange={handleNameChange}
                            disabled={lockButton}
                        />
                    </div>

                    <div className="textbox">
                        <label htmlFor="mail">E-mail</label>
                        <input
                            required
                            type="email"
                            value={inputMail}
                            onKeyDown={handleKeyDown}
                            onChange={handleMailChange}
                            disabled={lockButton}
                        />
                    </div>

                    <div className="textbox">
                        <label htmlFor="msg">Mensagem</label>
                        <div className="textarea-container">
                            <textarea
                                required
                                maxLength={messageMaxLength}
                                value={inputMessage}
                                onChange={handleMessageChange}
                                disabled={lockButton}
                            />
                            <span className="char-counter">{`${inputMessage.length} - ${messageMaxLength}`}</span>
                        </div>
                    </div>

                    <div className="submit-button">
                        <button
                            className={lockButton ? "locked-button" : "normal-button"}
                            type="submit"
                            disabled={lockButton}>
                            {lockButton ? "Mensagem enviada!" : "Enviar mensagem!"}
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
