
(function login(){
  'use strict';
})();


let arrayUsers= [

         {
         	name:"yhoshua",
         	email:"yhoshua@gmail.com",
         	pass:"1234",
         	date: "",
         	sexo:"Masculino"
         },

         {

          name: "Alfonso",
          email:"alfonso@gmail.com",
          pass:"12345",
          date:"",
          sexo:"Masculino"

         },

         {
           
           name:"diego",
           email:"diego@hotmail.com",
           pass:"123456",
           date:"",
           sexo:"Masculino"

         }
       ];

//Valida si los usuarios existen
 function validateUser(){

        const user=document.getElementById('input_user');
        const pass=document.getElementById('input_pass');

        let arrayUser= getUsers();
        
       for(let i=0; i<arrayUser.length; i++){
           console.log(arrayUser[i].name );
           console.log(arrayUser[i].pass );

           user.value==arrayUser[i].name  & pass.value==arrayUser[i].pass ? window.location="principal.html": alert("usuario incorrecto");
       }
    }


//Contiene todos los usuarios
function getUsers(){

 return arrayUsers;

}



/*
-valida que los campos contengan datos
-llama a las funciones que validaran cada campo en particular
*/
function validateData(){

	const name=document.getElementById('input_name').value;
	const lastname=document.getElementById('input_lastname').value;
	const email=document.getElementById('input_email').value;
	const newPass=document.getElementById('input_new_pass').value;
	const date=document.getElementById('input_date').value;
    
    if (name=="" | lastname=="" | email=="" | newPass=="" | date=="") {
         alert("Complete todos los campos por rellenar");
    
    }else{
        
        let contador=0;
       contador+=validatePass(newPass);
       contador+=validateEmail(email);
       
       if(contador==0){

       	 createUser(name, lastname, email, newPass, date, "NON");
       	 alert("Usuario Creado");
       	    
       }
    }

}


//valida que el password tenga al menos 8 caracteres 
   function validatePass(newPass){
       let contador=0;
   	   if(newPass.length<8){
             
             alert("la contraseña debe de tener como minimo 8 caracteres");
              contador+=1;
   	   }

   	   return contador;

    }



   //Valida que el email cuente con los caracteres necesarios
   function validateEmail(email){


    let position1= email.indexOf(".com");
     let position2= email.indexOf("@");
     let contador=0;

     if (position1===-1) {

       alert("el correo electronico debe llevar .com");
       contador+=1;
     }

     if (position2===-1) {

     	alert("El correo debe llevar @");
     	 contador+=1;
     }
   
     return contador;
   } 


   function createUser(name, lastname, email, pass, date, sexo){

       arrayUsers.push({

            name: name,
            lastname: lastname,
            email: email,
            pass: pass,
            date: date,
            sexo: sexo

            }
       );

   }