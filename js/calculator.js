const squareInput = document.querySelector('.square-input'),
    resultText = document.querySelector('.price');
let status;

function calcResult() {
    if (status === 'simple') {
        resultText.textContent = 1.5 * squareInput.value;
    } else {
        resultText.textContent = 2 * squareInput.value;
    }
}

function getStaticData(parentSelector, calcActive) {
    document.querySelector(parentSelector).addEventListener('click', event => {
        status = event.target.getAttribute('id');
        const elements = document.querySelectorAll('.type')
        elements.forEach(elem => {
            elem.classList.remove(calcActive)
        })
        event.target.classList.add(calcActive)

        calcResult();
    });
}


getStaticData('.select-calc', 'active')

