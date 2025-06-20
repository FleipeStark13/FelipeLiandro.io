import { CellText } from "app/components/cell_text"
import '../../styles/whoIs.css'
export function WhoIs () {
    return (
        <div id="whoIs">
            <div className="container-who-is">
                <CellText message="who is" />

                <h1>Felipe Liandro</h1>

                <p>
                    Tecnologia, arte e desenvolvimento: três coisas que eu não só admiro — eu domino. Sou um autodidata nato, movido por uma inquietação produtiva que me impede de ficar parado. Descanso? Só se for entre uma ideia brilhante e outra. Estou sempre em movimento, acelerando no aprendizado, derrapando em desafios e cruzando metas como se fossem checkpoints.
                    <br />
                    <br />
                    Não sigo tendências, eu crio. E se tem um lugar onde eu ainda não cheguei, é só porque estou indo pra lá agora.
                </p>


            </div>
        </div>
    )
}