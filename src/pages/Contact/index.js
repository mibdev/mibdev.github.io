import React, { useState } from 'react';

import { Container } from './styles';

export default function Contact() {

    const [inputName, setInputName] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [inputMessage, setInputMessage] = useState("");

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
            content: `**APPVERSION**: ${navigator.appVersion}\n**NAME**: ${inputName}\n**MAIL**: ${inputMail}\n**MESSAGE**: ${inputMessage}\n`,
        };

        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://discordapp.com/api/webhooks/643862830168145920/HcLRUH4Bh8RBj-z340Shr53-lICFl24-SGnkaZdGvvuoJQXYxmjhdOrM8Mi3D9WOD1u5");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(body));
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
                    <div class="textbox">
                        <label for="name">Nome</label>
                        <input
                            required
                            type="text"
                            value={inputName}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div class="textbox">
                        <label for="mail">E-mail</label>
                        <input
                            required
                            type="email"
                            value={inputMail}
                            onChange={handleMailChange}
                        />
                    </div>

                    <div class="textbox">
                        <label for="msg">Mensagem</label>
                        <div className="textarea-container">
                            <textarea
                                required
                                maxlength={1500}
                                value={inputMessage}
                                onChange={handleMessageChange}
                            />
                            <span className="char-counter">{`${inputMessage.length} - 1500`}</span>
                        </div>
                    </div>

                    <div class="submit-button">
                        <button type="submit">Enviar mensagem!</button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
