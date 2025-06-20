'use client'
import { CellText } from "app/components/cell_text"
import { useState } from "react"
import { contatos } from "./contacts";
import '../../../styles/contact.css'

export function Contact () {


    const [activeContact, setActiveContact] = useState(contatos.email);

    return (
        <div id="contact">
            <div className="container-contact">
                <CellText message="CONTACT" />
                <h1>
                    Precisa entrar em
                    <br />
                    Contato?
                </h1>
                <h2>Acesse um dos links abaixo e venha falar comigo!</h2>

                <div className="contact-label-card">

                    <a href={activeContact.link} target="_blank">
                        {activeContact.text}
                    </a>

                    <div className="contact-label-changer">
                        <ul>
                            <li className="lactived" onClick={(e) => {
                                document.querySelectorAll('.lactived').forEach(item => {
                                    item.classList.remove('lactived')
                                });

                                e.currentTarget.classList.add('lactived')

                            }}>
                                <button onClick={
                                    () => {
                                        setActiveContact(contatos.email)
                                    }}
                                    >
                                    E-mail
                                </button>
                            </li>
                            <li onClick={(e) => {
                                document.querySelectorAll('.lactived').forEach(item => {
                                    item.classList.remove('lactived')
                                });

                                e.currentTarget.classList.add('lactived')
                            }}>
                                <button onClick={
                                    () => {
                                        
                                        setActiveContact(contatos.whatsapp)
                                    }
                                }>
                                    WhatsApp
                                </button>
                            </li>
                            <li onClick={(e) => {
                                document.querySelectorAll('.lactived').forEach(item => {
                                    item.classList.remove('lactived')
                                });

                                e.currentTarget.classList.add('lactived')
                            }}>
                                <button onClick={
                                    () => {

                                        
                                        setActiveContact(contatos.linkedin)
                                    }
                                }>
                                    Linkedin
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}