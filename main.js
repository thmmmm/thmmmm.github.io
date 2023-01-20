// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
//  });

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

btn.addEventListener('click',signin);

function signin(e){
    e.preventDefault();
    if(username.value == "admin" && password.value == "qwerty123"){
        alert('RAH{w0w_your_a_real_hacker_YnW9WpX9K}')
    }
    else{
        alert('invalid password')

    }

}

