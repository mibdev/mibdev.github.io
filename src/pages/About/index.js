import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import poly from '../../assets/poly.svg';

import caio from '../../members/caio';
import samuel from '../../members/samuel';
import bruno from '../../members/bruno';

export default function About({ location }) {

    const [member, setMember] = useState(caio);

    useEffect(() => {
        if (location) {
            const path = location.pathname.toLowerCase();
            if (path.includes("samuel")) {
                setMember(samuel);
            }
            else if (path.includes("bruno")) {
                setMember(bruno);
            }
            else if (path.includes("caio")) {
                setMember(caio);
            }
            else {
                setMember(caio);
            }
        }
    }, [location]);


    return (
        <Container>
            <div className="header">
                <Link className="return-button" to="/home">
                    <img src={poly} alt="poly" />
                </Link>
            </div>
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
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                            <img className="avatar" src={member.avatar} alt={member.name} />
                        </a>
                    </div>
                    <h3 className="shadow-text">{member.role}</h3>
                    <div className="citation-content">
                        <hr className="shadow-box" />
                        <h4 className="shadow-text">“{member.citation}”</h4>
                    </div>
                </div>
            </div>
        </Container>
    );
}
