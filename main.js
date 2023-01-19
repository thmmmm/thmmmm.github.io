// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//  });

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

btn.addEventListener('click',signin);

function signin(e){
    e.preventDefault();
    if(username.value == "admin" && hash(password.value) == 'aea343e8432=='){
        alert('valid password')
    }
    else{
        alert('invalid password')

    }

}

