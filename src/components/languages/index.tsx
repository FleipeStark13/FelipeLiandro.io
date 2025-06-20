import { LANGS_LIST } from "./langs";
import { CellText } from "components/cell_text";
import Image from "next/image";

import '../../styles/languages.css'

import { Linkedin, Github, Code } from "@deemlol/next-icons";

type LangItem = {
  label: string;
  langs: string[];
  description: string;
  image_link: string;
};

export function Languages () {
    return (
        <div id="languages">
            <CellText message="LANGUAGES" />
            <h2>Linguagens que utilizo</h2>

            <ul className="lang-card-list">
                {
                LANGS_LIST.map((lang: LangItem, index: number) => {
                    return (
                        <li key={index} className="lang-card">
                            <div className="lang-card-head">
                                <figure>
                                    <Image
                                        src={lang.image_link}
                                        alt="Something"
                                        width={100}
                                        height={100}
                                        className="image"    
                                    />
                                </figure>

                                <div className="lang-card-label">
                                    <p>
                                        <Code size={15}></Code>
                                        {lang.label}
                                    </p>
                                </div>
                            </div>

                            <div className="lang-card-body">
                                <ul>
                                    {
                                        lang.langs.map((lang_name: string, index: number) => {
                                            return (
                                                <li key={index} className="lang-card-name">
                                                    <p>
                                                        {lang_name}
                                                    </p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <p className="description">
                                    {lang.description}
                                </p>
                            </div>

                            <a href="https://github.com/FleipeStark13?tab=repositories" target="_blank">
                                <button>
                                    VER PROJETOS
                                </button>
                            </a>

                            <ul className="lang-card-social-media">
                                <li>
                                    <a href="https://br.linkedin.com/in/felipe-de-jesus-alves-liandro-415890222" target="_blank">
                                        <Linkedin />                                   
                                    </a>
                                </li>

                                <li>
                                    <a href="https://github.com/FleipeStark13" target="_blank">
                                        <Github />
                                    </a>
                                </li>
                            </ul>

                        </li>
                    )
                })
                }
            </ul>

        </div>
    )
}