window.onload=()=>{
    if(sessionStorage.user){
        user=JSON.parse(sessionStorage.user);
        if(user.email){
            location.replace('/');
        }
    }
}

// form
let formBtn=document.querySelector('.submit-btn');
let loader=document.querySelector('.loader');

formBtn.addEventListener('click', ()=>{
    let fullname=document.querySelector('#name')|| null;
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    let number=document.querySelector('#number') || null;
    let tac=document.querySelector('#tc') || null;

    // form validation
    if(fullname!=null){//signup page
        if(fullname.value.length<3){
            res.json({ 'alert' :'name must be 3 letters long'});
        }else if(!email.value.length){
            res.json({ 'alert' :'enter your email'});
        }else if(password.value.length<8){
            res.json({ 'alert' :'password must be 8 letters long'});
        }else if(Number(number) || number.value.length<10){
            res.json({ 'alert' :'invalid number, please enter valid one'});
        }else if(!tac.checked){
            res.json({ 'alert' :'you must agree to our T&C'});
        }else{
            // submit form
            loader.style.display='block';
            sendData('/signup', {
                name: fullname.value,
                email:email.value,
                password: password.value,
                number: number.value,
                tac:tac.checked
            })
        }
    }else{//login
        if(!email.value.length || !password.value.length){
            showFormError('fill all the inputs');
        }else{
            loader.style.display='block';
            sendData('/login', {
                email:email.value,
                password: password.value,
            })
        }
    }
})