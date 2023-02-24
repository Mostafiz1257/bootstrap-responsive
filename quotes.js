const loadQuots = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => display(data))

}

const display = chondo => {
    console.log(chondo);
    const blockQuots = document.getElementById('blockQuots')
    blockQuots.innerHTML = chondo.quote;
}

loadQuots();