// SIGN UP CONFIRM

const signUp = document.getElementById('signUp');

signUp.addEventListener('submit', (e) =>  {
    e.preventDefault();

const email = document.getElementById('email').value;
const pw1 = document.getElementById('pw1').value;
const pw2 = document.getElementById('pw2').value;

// Check empty email field

if(email == "") {
    document.getElementById("badMsg").innerHTML = "**Įveskite el.paštą";  
    return false;  
}

//check empty password field  
if(pw1 == "") {  
    document.getElementById("badMsg").innerHTML = "**Užpildykite lauką";  
    return false;  
  }  
  
  //check empty confirm password field  
  if(pw2 == "") {  
    document.getElementById("badMsg").innerHTML = "**Užpildykite lauką";  
    return false;  
  }   
   
  //minimum password length validation  
  if(pw1.length < 8) {  
    document.getElementById("badMsg").innerHTML = "**Slaptažodis turi būti ne trumpesnis, nei 8 skaitmenų";  
    return false;  
  }  

  //maximum length of password validation  
  if(pw1.length > 15) {  
    document.getElementById("badMsg").innerHTML = "**Slaptažodis turi būti ne ilgesnis, nei 15 skaitmenų";  
    return false;  
  }  
  
  if(pw1 != pw2) {  
    document.getElementById("badMsg").innerHTML = "**Slaptažodžiai nesutampa";  
    return false;  
  } else {  
    document.getElementById("goodMsg").innerHTML = "**Paskyra sėkmingai sukurta";
    document.getElementById('home').innerHTML = `<a class="btn" href="/index.html">Į pradinį</a>`;
  }

  const formData = new FormData(signUp);

  fetch('https://testapi.io/api/vikaviza/resource/users', {
    method: 'post',
    body: formData
  }).then((res) => {
    return res.json();
  }).then(result => {
    console.log(result);
  })
})
