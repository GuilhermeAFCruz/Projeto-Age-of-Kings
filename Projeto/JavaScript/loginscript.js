const openModalButtons = document.querySelectorAll('[data-modal-target]')

const closeModalButtons = document.querySelectorAll('[data-close-button]')

const closeModalButtons1 = document.querySelectorAll('[data-close-button1]')

const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modalcad')
        closeModal(modal)
    })
})


closeModalButtons1.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal1(modal)
    })
})

closeModalButtons1.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modalcad')
        closeModal1(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modalcad.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    
}

function closeModal1(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    
    
}