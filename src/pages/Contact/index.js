import React, { useState } from 'react';

import { Container } from './styles';

export default function Contact() {

    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [lockButton, setLockButton] = useState(false);

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
                        <label for="name">Nome</label>
                        <input
                            required
                            type="text"
                            value={inputName}
                            onChange={handleNameChange}
                            disabled={lockButton}
                        />
                    </div>

                    <div className="textbox">
                        <label for="mail">E-mail</label>
                        <input
                            required
                            type="email"
                            value={inputMail}
                            onChange={handleMailChange}
                            disabled={lockButton}
                        />
                    </div>

                    <div className="textbox">
                        <label for="msg">Mensagem</label>
                        <div className="textarea-container">
                            <textarea
                                required
                                maxlength={1500}
                                value={inputMessage}
                                onChange={handleMessageChange}
                                disabled={lockButton}
                            />
                            <span className="char-counter">{`${inputMessage.length} - 1500`}</span>
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
