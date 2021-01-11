import {Notes} from "./Notes";


export function CreateNotes() {

    const form = document.querySelector('form')
    const BtnAddNote = document.querySelector('.btn-add')
    const modalOverlay = document.querySelector('.modal-overlay')

    form.addEventListener('submit', submitFormHandler)

    function submitFormHandler(event) {
        event.preventDefault()
        let noteName = document.querySelector('.note-name')
        let noteDiscription = document.querySelector('.note-discription')
        const data = JSON.stringify(new Date()).split('').splice(3,8).join('') +
            " " + new Date().getHours() + ":" + new Date().getMinutes()
        const dateUTC = new Date().toUTCString()
        const dateCreate = new Date(dateUTC)


        const id = 's' + Math.random() * (Math.random() * 1000000000000000000).toString()

        function minutesPassedrender() {
            const dateNow = new Date()
            const minutesPasse = Math.floor(((dateNow.getTime() - dateCreate.getTime())/60000))

            document.querySelectorAll('.' + id)[0].innerText = `Мин : ${minutesPasse}`
        }

        function dayPassedRender() {
            const dateNow = new Date()
            const dayPasse = Math.floor((dateNow - dateCreate) / (24*3600*1000*7))

            document.querySelectorAll('.' + id)[2].innerText = `Дней : ${dayPasse}`
        }

        function HoursPassedRender() {
            const dateNow = new Date()
            const hoursPasse = Math.floor((dateNow - dateCreate) / (1000 * 60 * 60))

            document.querySelectorAll('.' + id)[1].innerText = `Часов : ${hoursPasse}`
        }

        const notes = {
            name: noteName.value,
            noteDiscription: noteDiscription.value,
            data: data,
            dataUTC: dateCreate
        }

        BtnAddNote.disabled = true
        const note = document.createElement('div')
        note.classList = "app__Notes__container"

        note.innerHTML = `
                           <div class="app__Notes__container__row">
                               <h1 class="app__Notes__name">${noteName.value}</h1>
                               <p class="app__Notes__discription">${noteDiscription.value}</p>
                           </div>
                          <div class="app__Notes__container__Date">
                                <div class="Data-create">Дата создания : <span>${data}</span></div>
                                <div class="data-pass">сколько прошло : 
                                    <span class="pass-minutes ${id}">Мин: 0 </span>
                                    <span class="pass-hours ${id}">Часов : 0 </span>
                                    <span class="pass-day ${id}">Дней: 0</span>
                                </div>
                        </div>
                    `

        document.querySelector('.app__Notes').append(note)

        setInterval(minutesPassedrender, 59000)
        setInterval(dayPassedRender,350000000)
        setInterval(HoursPassedRender, 3500000)


        Notes.SendNoteInBD(notes).then(() => {           //Отправляем данные в Firebase
            modalOverlay.style.display = 'none'
            noteName.value = ''
            noteDiscription.value = ''
            BtnAddNote.disabled = false
        })
    }
}