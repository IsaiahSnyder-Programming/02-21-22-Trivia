import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawQuestions() {
    console.log('drawing Questions');
    let template = ''
    ProxyState.questions.forEach(q => template += `<h3>${q.question}</h3>`)
    document.getElementById('questions').innerHTML = template
}




export class QuestionsController {
    constructor() {
        ProxyState.on('questions', _drawQuestions)

    }

    async getTFQuestions() {
        try {
            console.log('started getQuestions');
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
            console.log('started getQuestions');
            await questionsService.getMCQuestions()
            console.log('finished getMCQuestions');   
        } catch (error) {
            console.log('There Aint No Questions Round Here');
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


    tfButton() {
        console.log('[QuestionsController] tfButton clicked');
        questionsService.tfButton()
        this.getTFQuestions()
    }

    mcButton() {
        console.log('[QuestionsController] mcButton clicked');
        questionsService.mcButton()
        this.getMCQuestions()

    }
    

}