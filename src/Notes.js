import {openModal} from './openWindow'
import {CreateNotes} from './CreateNotes'
import plus from './assets/plus.svg'
import cancel from './assets/cancel.svg'


export class Notes {
    static SendNoteInBD (notes) {
        return fetch('https://react-native-todoapp-827b6-default-rtdb.firebaseio.com/.json',{
            method : "POST",
            body : JSON.stringify(notes),
            headers : {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }
    static GetNotesAndRender(token) {

        return fetch(`https://react-native-todoapp-827b6-default-rtdb.firebaseio.com/.json?auth=${token}`)
            .then(response => response.json())
            .then(notes => {
                if(token){
                    RenderNotesAfterAuth(notes) // Рендер заметок полученных из бд при загрузке стр
                    openModal() // рендер модального окна
                    CreateNotes() // создание и отправка новых заметок в бд
                }
                else {
                    alert('Вы ввели не правильный логин или пароль... Чтобы войти используйте email' +
                        ' : Kosil@mail.ru, Пароль : 111111')
                }
            })
        }

}

function RenderNotesAfterAuth(notes) {
    const date = new Date()
    document.querySelector('.app').innerHTML = `
            <div class="app__container">
           <h1 class="app__container__my-notes">Мои заметки</h1>
           <img src="${plus}" class="open-modal" alt="">
           <div class="app__Notes">
                
           </div>
       </div>
   </div>
   <div class="modal-overlay">
       <form >
           <div class="modal">
                <div class="modal__container">
                    <img src="${cancel}" alt="" class="close-modal">
                    <h1 class="modal__container__text">Название</h1>
                    <input type="text" placeholder="Введите название..." class="note-name modal-input">
                    <h1 class="modal__container__text">Описание</h1>
                    <input  type="text" placeholder="Введите описание..." class="note-discription modal-input">
                    <button type="submit" class="btn-add">Добавить</button>
                </div>
            </div>
       </form>
   </div>
        `
    for(let i in notes) {
        const note = document.createElement('div')

        const dateNow = new Date()
        dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)
        const dateCreate = new Date(notes[i].dataUTC)
        dateCreate.setHours(dateCreate.getHours() + new Date().getTimezoneOffset()/60)

        const dayPass = Math.floor((dateNow - dateCreate) / (1000 * 3600 * 24))// сколько прошло дней

        const minutPass = Math.floor((dateNow.getTime() - dateCreate.getTime())/60000) // сколько прошло минут
        const hoursPass = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))//сколько прошло часов

        const id = 's' + Math.random() * (Math.random() * 1000000000000000000).toString()

        function minutesPassedrender() {
            const dateNow = new Date()
            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)
            const minutesPasse = Math.floor(((dateNow.getTime() - dateCreate.getTime())/60000))

            document.querySelectorAll('.' + id)[0].innerText = `Мин : ${minutesPasse}`
        }

        function dayPassedRender() {
            const dateNow = new Date()
            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)
            const dayPasse = Math.floor((dateNow - dateCreate) / (1000 * 3600 * 24))

            document.querySelectorAll('.' + id)[2].innerText = `Дней : ${dayPasse}`
        }

        function HoursPassedRender() {
            const dateNow = new Date()
            dateNow.setHours(dateNow.getHours() + new Date().getTimezoneOffset()/60)
            const hoursPasse = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))


            document.querySelectorAll('.' + id)[1].innerText = `Часов : ${hoursPasse}`
        }

        note.classList = "app__Notes__container"
        note.innerHTML = `
                            <div class="app__Notes__container__row">
                                <h1 class="app__Notes__name">${notes[i].name}</h1>
                                <p class="app__Notes__discription">${notes[i].noteDiscription}</p>
            
                            </div>
                            <div class="app__Notes__container__Date">
                                <div class="Data-create">Дата создания : <span>${notes[i].data}</span></div>
                                <div class="data-pass">сколько прошло 
                                    <span  class="pass-minutes ${id}">Мин:${minutPass}</span>
                                    <span  class="pass-hours ${id}">Часов : ${hoursPass}</span>
                                    <span  class="pass-day ${id}}">Дней:${dayPass}</span>
                                </div>
                            </div>
                    `
        document.querySelector('.app__Notes').append(note)

        setInterval(minutesPassedrender, 59000)
        setInterval(dayPassedRender,3500000)
        setInterval(HoursPassedRender, 3500000)
    }
}



