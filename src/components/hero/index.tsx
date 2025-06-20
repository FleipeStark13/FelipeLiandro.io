import { Link } from "@deemlol/next-icons"
import Image from "next/image"
import profile from '../../../public/imgs/felipeLiandro.jpeg'
import '../../styles/hero.css'
export function Hero () {

    return (
        <div id="hero" className="main-hero">
            <div className="flex-hero">
                <div className="left-side-hero">
                    <h3>
                        <span>Olá, 👋🏻,</span> <br />
                        bem-vindo <br />
                        eu sou,    
                    </h3>

                    <h1>
                        Felipe
                        <br />
                        Liandro
                    </h1>

                    <button>
                        <a href="#who_is">
                            QUEM É FELIPE LIANDRO
                            <Link size={24} color="#262626" />
                        </a>
                    </button>

                </div>
                <div className="right-side-hero">
                    <figure>
                        <Image
                            id="image-hero"
                            src={profile}
                            alt="Imagem de perifl de FElipe Liandro" />
                    </figure>

                    <div className="special_skills">
                        <ul>
                            <li>
                                <p>🧑🏻‍💻 Programador,</p>
                            </li>
                            <li>
                                <p className="font-semibold">🧑🏻‍🎨 Designer e</p>
                            </li>
                            <li>
                                <p className="font-extrabold">🫅🏻 Muito mais!</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}