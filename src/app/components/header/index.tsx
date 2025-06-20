import '../../styles/header.css'
import { Linkedin, Github } from "@deemlol/next-icons";
export function Header() {
    return (
        <header>
            <nav>
                <h1>Felipe Liandro</h1>
                
                <ul>
                    <li>
                        <a href="#">Início</a>
                    </li>
                        <a href="#about">Sobre</a>

                    <li>
                        <a href="#_projects">Projetos</a>
                    </li>

                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        
                        <a href="#contact">Contact</a>
                    </li>

                    <li>
                        <a href="https://github.com/FleipeStark13">
                            <Github />
                        </a>
                    </li>

                    <li>
                        <a href="https://br.linkedin.com/in/felipe-de-jesus-alves-liandro-415890222">
                            <Linkedin />
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    )
}