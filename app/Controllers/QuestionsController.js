import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuestions() {
    console.log('drawing Questions');
    let template = ''

    // ProxyState.questions.filter(b => b.incorrect_answers)

    ProxyState.questions.forEach(q => template += `<h3>${q.question}</h3>`)
    document.getElementById('questions').innerHTML = template
}

function _drawAnswers() {
    console.log('drawing Answers');
    let template = ''
    // ProxyState.questions.forEach(a => a.answers)

    ProxyState.questions.forEach(a => {
        let template = ''
        for (let i = 0; i < a.answers.length; i++) {
            const answer = a.answers[i];
            template += `<button class="btn btn-dark m-2" onclick="app.questionsController.answerClick('${answer}')">${answer}</button>`
        }
        document.getElementById('answers').innerHTML = template
    })

}

//proxystate.questions@0


export class QuestionsController {
    constructor() {
        ProxyState.on('questions', _drawQuestions)
        ProxyState.on('questions', _drawAnswers)
    }

    async getTFQuestions() {
        try {
            console.log('started getTFQuestions');
            await questionsService.getTFQuestions()
            console.log('finished getTFQuestions');   
        } catch (error) {
            console.log('There Aint No Questions Round Here');
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

    async getMCQuestions() {
        try {
            console.log('started getMCQuestions');
            await questionsService.getMCQuestions()
            console.log('finished getMCQuestions');   
        } catch (error) {
            console.log('There Aint No Questions Round Here');
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


    answerClick(answer) {
        questionsService.answerClick(answer)
    }

    tfButton() {
        this.getTFQuestions()
    }

    mcButton() {
        this.getMCQuestions()
    }
    

}