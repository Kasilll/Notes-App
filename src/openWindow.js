
export function openModal () {
    const openModalWindow = document.querySelector('.open-modal')
    const closeModalWindow = document.querySelector('.close-modal')
    const modalOverlay = document.querySelector('.modal-overlay')

    openModalWindow.addEventListener('click', function () {
        modalOverlay.style.display = 'block'
    })

    closeModalWindow.addEventListener('click', function () {
        modalOverlay.style.display = 'none'
    })
}