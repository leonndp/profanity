import '../styles/styles.css';
import axios from 'axios'
import RandomSentence from './modules/RandomSentence'

const randomSentence = new RandomSentence()

randomSentence.makeSentence()

// let format;

// const getFormat = () => {
//     return axios.get('/api/generate')
//         .then(res => {
//             return res.data[0].content
//         })
// }

// const getVerb = () => {
//     return axios.get('/api/verbs')
//         .then(res => {
//             return res.data[0].name
//         })
// }

// const makeSentence = () => {
//     getFormat()
//         .then(format => {
//             fillSentence(format)
//         })
// }

// const fillSentence = (format) => {
//     getVerb().then(verb => {
//         console.log(format.replace(':verb', verb))

//     })
// }

// makeSentence()



// axios.get('/api/verbs')
//     .then(res => console.log(res.data))

if (module.hot) {
    module.hot.accept();
}


