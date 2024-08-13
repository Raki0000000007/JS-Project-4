const submit = document.querySelector('.Submit')

const display=document.querySelector('.Result')   

submit.addEventListener('click',function(){
    const userinput = parseInt(document.querySelector('#input').value)

    function passGenearator(userinput){
        let characters=`1234567890-=!@#$%^&*()-=_+QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm[]{};':",./<>?`;

        let outcome='';

        for(i=0;i<userinput;i++){
            const index=Math.floor(Math.random()*characters.length)
            outcome=outcome+characters[index]
        }
        return outcome
    }
    
    display.innerHTML=passGenearator(userinput)
})


// function generateRandomPassword(length) {
//     // Define the characters that can be used in the password
//     const charset = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+=-[]{};:\'",.<>/?';
    
//     // Initialize an empty password string
//     let password = '';
    
//     // Generate the password by selecting random characters from the charset
//     for (let i = 0; i < length; i++) {
//         const index = Math.floor(Math.random() * charset.length);
//         password += charset[index];
//     }
    
//     return password;
// }

// Example usage:
// const password = generateRandomPassword(12); // Generate a 12-character password
// console.log(password);
