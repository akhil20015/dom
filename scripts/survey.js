

const nameIcon = document.getElementById('name_icon');


const number = document.getElementById('number');
const password = document.getElementById('password');
const label = document.getElementById('name-label');


const submit = document.getElementById('submit');


const nameRegex = new RegExp('^[a-zA-Z ]{2,50}$');
const emailRegex = new RegExp('^[a-z0-9._-]+[@][a-z0-9.-]+[\.][a-z]{2,4}$');
const passswordRegex = new RegExp('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$','g');

// console.log(regex.test(fullname.value));


// fullname.addEventListener('input', (e)=>{
   
//    console.log(e.target.value)

//     if(regex.test(e.target.value))
//     {
//         // if(e.target.value === "")
//         // {
//         //     nameIcon.classList.remove('fa-solid', 'fa-circle-check', 'fa-xl');
//         //     nameIcon.style.alignSelf="";
//         //     nameIcon.style.color= "";
//         // }
//         // else
//         // {
//         //     nameIcon.classList.add('fa-solid', 'fa-circle-check', 'fa-xl');
//         //     nameIcon.style.alignSelf="center";
//         //     nameIcon.style.color= "rgb(6, 182, 0)";
//         // }
        
//         document.getElementById('name_icon').style.display="block";
        
        
//     }

// })

// document.getElementById('age').addEventListener("keypress", function(e){
//     if(e.key < '0' || e.key > '9')  //OTHER THAN NU
//     {
//         e.preventDefault();
//     }
// })

function validation(id){

    switch(id)
    {
        case 'fullname': validateName();
        break;
        case 'email':validateEmail();
        break;
        case 'age':validateAge();
        break;
        case 'password': validatePassword();
        break;
    }
}

const validatePassword = ()=>{
    const pass = document.getElementById('password');
    
    pass.addEventListener('input', e =>{
        const password = pass.value;
        if(!(e.target.value == ""))
        {
            if(passswordRegex.test(password))
            {
                console.log("true");
                document.getElementById('passIcon_right').style.display="block";
                document.getElementById('passIcon_wrong').style.display="none";
            }
            else
            {
              
                document.getElementById('passIcon_right').style.display="none";
                document.getElementById('passIcon_wrong').style.display="block";
            }
        }
        else
        {
            document.getElementById('passIcon_wrong').style.display="none";
            document.getElementById('passIcon_right').style.display="none";
        }
        console.log(password);
    });

};


const validateAge = ()=>{
    const age = document.getElementById('age');
    
    age.addEventListener("keypress", (e)=>{
        if(e.key < '0' || e.key > '9')  
        {
            e.preventDefault();
        }
    });

    age.addEventListener("input",(e)=>{ 
        const num = age.value;
    if(!(e.target.value == ""))
    {
        if(num<14)
        {
             document.getElementById('ageIcon_wrong').style.display="block";
             document.getElementById('ageIcon_right').style.display="none";
             
        }
        else
        {
             document.getElementById('ageIcon_right').style.display="block";
             document.getElementById('ageIcon_wrong').style.display="none";
        }
    }
    else
    {
        document.getElementById('ageIcon_wrong').style.display="none";
        document.getElementById('ageIcon_right').style.display="none";
    }
    });

};


const validateEmail = ()=>{

    const email = document.getElementById('email');
    email.addEventListener('input', (e)=>{
        if(!(e.target.value == ""))
        {
            if(emailRegex.test(e.target.value))
            {
                document.getElementById('emailIcon_right').style.display="block";
                document.getElementById('emailIcon_wrong').style.display="none";
            }
            else
            {
                document.getElementById('emailIcon_right').style.display="none";
                document.getElementById('emailIcon_wrong').style.display="block";
            }
        }
        else
        {
            document.getElementById('emailIcon_wrong').style.display="none";
            document.getElementById('emailIcon_right').style.display="none";
        }
    });

};

const validateName = ()=>{ 
    const fullname = document.getElementById('fullname');
    fullname.addEventListener('input', (e)=>{
        if(!(e.target.value == ""))
        {
            if(nameRegex.test(e.target.value))
            {
                document.getElementById('nameIcon_right').style.display="block";
                document.getElementById('nameIcon_wrong').style.display="none";
            }
            else
            {
                document.getElementById('nameIcon_right').style.display="none";
                document.getElementById('nameIcon_wrong').style.display="block";
            }
        }
        else
        {
            document.getElementById('nameIcon_wrong').style.display="none";
            document.getElementById('nameIcon_right').style.display="none";
        }
    });
};

//add validation then use this button
// submit.addEventListener("click", ()=>alert("Form Successfully submitted!!"))