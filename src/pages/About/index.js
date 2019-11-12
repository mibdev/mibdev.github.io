import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import caio from '../../members/caio';
import samuel from '../../members/samuel';
import bruno from '../../members/bruno';

export default function About({ location }) {

    const [member, setMember] = useState(caio);

    useEffect(() => {
        if (location) {
            const path = location.pathname.toLowerCase();
            if (path.includes("samuel")) {
                setMember(caio);
            }
            else if (path.includes("bruno")) {
                setMember(caio);
            }
            else {
                setMember(caio);
            }
        }
    }, [location]);


    return (
        <Container>
            <div className="content">
                <div className="left-content">
                    <h2>Meet</h2>
                    <h1>{member.name}</h1>
                    <hr />
                    <div className="skills-list">
                        {member.skills.map((skill, id) => (
                            <span key={id}>{skill}</span>
                        ))}
                    </div>
                    <h5>{member.description}</h5>
                </div>

                <div className="right-content">
                    <div className="mirrored-img">
                        <img className="avatar" src={member.avatar} alt={member.name} />
                    </div>
                </div>
            </div>
        </Container>
    );
}
