import Botao from "../Botao";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/date";

export default function Cronometro() {
    console.log('conversão: ', tempoParaSegundos('00:01:10'));

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
} 