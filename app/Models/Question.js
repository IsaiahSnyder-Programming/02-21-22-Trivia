

export class Question {
    constructor(data){
        this.question = data.question,
        this.difficulty = data.difficulty,
        this.type = data.type,
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers

        this.answers = [data.correct_answer, ...data.incorrect_answers]
    }

    get Template() {

    }
}