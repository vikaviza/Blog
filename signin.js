
const signIn = document.getElementById('signIn');
 
signIn.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dataObj = {
        title: e.target.elements[0].value,
        content: e.target.elements[1].value,
        img: e.target.elements[2].value,
        identification: localStorage.getItem('identification')
    }
    try {
        const submitedBlog = await fetch(`https://testapi.io/api/vikaviza/resource/blog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
    }
    .then((response) => response.json())
    .then((login) => {
        const newLogin = login.data.filter((user) => {
            if(user.username === username.value && user.password === password.value){
                return user
            }
            return  
            })
            console.log(newLogin)
            if (newLogin.lenght > 0){
                alert('error')
            }
        })
})