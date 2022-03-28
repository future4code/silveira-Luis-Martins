import React from "react";

import { QuestionsOne } from './QuestionsOne';
import { QuestionsTwo } from './QuestionsTwo';
import { QuestionsThree } from './QuestionsThree';
import { TheEnd } from './TheEnd';


export default class Questions extends React.Component {

    state = {
        etapa: 0
    }

    button = {
        botao: 0
    }

    mudarBotao =  () => {
        this.setState({botao: this.button.botao + 1})
    }

    nextPg = () => {
        this.setState({ etapa: this.state.etapa + 1 })
    }

    mudarPagina = () => {
        console.log('Estou sendo chamada');
        switch (this.state.etapa) {
            case 1:
                return <QuestionsOne></QuestionsOne>
            case 2:
                return <QuestionsTwo></QuestionsTwo>
            case 3:
                return <QuestionsThree></QuestionsThree>
            case 4:
                return <TheEnd></TheEnd>
            default:
                return null

        }
    }

    name = () => {
        console.log('Estou sendo chamada');
        switch (this.state.etapa) {
            case 0:
                return <h4>Iniciar formulário</h4>
            case 1:
                return <h4>Ir para a próxima questão</h4>
            case 2:
                return <h4>Ir para a próxima questão</h4>
            case 3:
                return <h4>Ir para a próxima questão</h4>
            case 4:
                return <h4>Finalizar</h4>
            default:
                return null

        }
    }


    render() {


        return (

            <div className="App">

                {this.mudarPagina()}

                <button onClick={this.nextPg}>{this.name()}</button>

            </div>


        );
    }
}