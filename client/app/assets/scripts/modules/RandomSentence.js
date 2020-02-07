import axios from 'axios'

export default class RandomSentence {

    getFormat = () => {
        return axios.get('/api/generate')
            .then(res => {
                return res.data[0].content
            })
    }

    getVerb = () => {
        return axios.get('/api/verbs')
            .then(res => {
                return res.data[0].name
            })
    }

    makeSentence = () => {
        this.getFormat()
            .then(format => {
                this.fillSentence(format)
            })
    }

    fillSentence = (format) => {
        this.getVerb().then(verb => {
            console.log(format.replace(':verb', verb))
        })
    }
}