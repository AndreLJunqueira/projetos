const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const forAdicionarTarefa = document.querySelector('.app__form-add-task')

btnAdicionarTarefa.addEventListener('click', () => {
    forAdicionarTarefa.classList.toggle('hidden')
})
