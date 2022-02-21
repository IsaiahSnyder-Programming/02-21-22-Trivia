import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";

class QuestionsService {
    
    async getTFQuestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=boolean')
        console.log('response data', response.data);
        let question = response.data.results.map(q => new Question(q))
        ProxyState.questions = question
    }

    async getMCQuestions() {
        const response = await axios.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple')
        console.log('response data', response.data);
        let question = response.data.results.map(q => new Question(q))
        ProxyState.questions = question
    }
    
}

export const questionsService = new QuestionsService()