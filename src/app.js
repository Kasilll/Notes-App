import './css/main.css'
import {Notes} from './Notes'
import './css/authorization.css'


const authForm = document.querySelector('.auth-form')

function authFormHandler(event) {
    event.preventDefault()
    const email = event.target.querySelector('.login__input').value
    const password = event.target.querySelector('.password__input').value


    authWithEmailAndPassword(email, password)
        .then(token => {
            if (token) {
                return Notes.GetNotesAndRender(token.idToken) // в случае успешной авторизации, происходит
                // рендер заметок
            }
        })
}

authForm.addEventListener('submit', authFormHandler)

function authWithEmailAndPassword(email, password) {   // авторизация
    const apiKey = "AIzaSyAtT_Uqg12E8EgGC8vbpH-YPWim0tpmRaU"
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: "POST",
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
}






