const rendomUSer = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => display(data))
}

const display = user => {
    console.log(user)
    const userName = document.getElementById('name')
    const userGender = document.getElementById('gender')
    const userLocation = document.getElementById('location')
    const userpic = document.getElementById('pic')
    userpic.innerHTML = user.results[0].picture.large;
    userLocation.innerHTML = user.results[0].location.city;
    userGender.innerText= user.results[0].gender;
    userName.innerText = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    // console.log(user.results[0].location)
}

rendomUSer();