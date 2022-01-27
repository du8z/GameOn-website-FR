function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
var inscription = document.querySelector("#inscription");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));




// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




// (x)
window.addEventListener("load", function(){
  closeBtn.addEventListener("click", function(){
    modalbg.style.display = "none"
  });
});
  



  
let form = document.querySelector('#inscription');



 form.checkbox1.addEventListener('change', function (){
  ValidCheckbox(this);
}) 

form.email.addEventListener('change', function() {
  validEmail(this);
});

form.birthdate.addEventListener('change', function() {
  validBirthdate(this);
});

form.quantity.addEventListener('change', function() {
  validQuantity(this);
});




 form.addEventListener('submit', function(e) {
  e.preventDefault();
  
   if (validEmail(form.email) + (validBirthdate(form.birthdate) + (validQuantity(form.quantity) + (ValidCheckbox(form.checkbox1))))){
        alert("document envoyé");
        form.submit();
      
    }    
  
  
 });

 // validation de l'email
const validEmail = function(inputEmail) {
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,3}$',
    'g'
  );

    let small = inputEmail.nextElementSibling;

    if (emailRegExp.test(inputEmail.value)) {
      small.innerHTML = "adresse valide"
      small.classList.remove('label-invalide')
      small.classList.add('label-valide')
      return true;
    } else {
      small.innerHTML = 'adresse non valide'
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false;
    }

}
let nom = 'nom'

// validation du prénom et du nom
 

     function pseudo() {
  
      let small = this.nextElementSibling;
  
      if (!/[a-zA-Z]{3,15}/.test(this.value)) {
        small.innerHTML = 'le ' + (nom) + ' doit contenir plus de 2 caractères'
        small.classList.remove('label-valide')
        small.classList.add('label-invalide')
        return false;
      } else if 
        (/[0-9]/.test(this.value)) {
        small.innerHTML = 'le ' + (nom) + ' ne doit pas contenir de chiffre'
        small.classList.remove('label-valide')
        small.classList.add('label-invalide')
        return false;
        } 
        
        else if 
        (/[a-zA-Z]{3,15}/.test(this.value)) {
        small.innerHTML = 'le ' + (nom) + ' est valide'  
        small.classList.remove('label-invalide')
        small.classList.add('label-valide')  
        return true;
        }
        
        
      }  
      
       
      
       
      
      document.querySelector('#first').addEventListener('change', pseudo); 
        
      
      document.querySelector('#last').addEventListener('change', pseudo);

      
      
      
      
     
        
        












      // validation des conditions générales 
      
      
      
      const labelCheckbox = document.querySelector('#checkbox1')
      
      const ValidCheckbox = function(labelCheckbox) {
        
        let small = labelCheckbox.nextElementSibling.nextElementSibling;
        if (!labelCheckbox.checked){
          small.innerHTML = ('il faut valider la case')
          small.classList.remove('label-valide')
          small.classList.add('label-invalide')
          return false ;
        } 
        else (labelCheckbox.checked)
          small.innerHTML = ('case valide ')
          small.classList.add('label-valide')
          small.classList.remove('label-invalide')
          return true ;
        
      }
      
        
      




    // validation de la quantité de tournoi participé 

  const validQuantity = function(inputQuantity) {


    let small = inputQuantity.nextElementSibling;
  
    
    if(/[a-zA-Z]/.test(inputQuantity.value)) {
      small.innerHTML = 'la quantité ne doit contenir que des chiffres'
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false; 
    
  } else if (!/[a-zA-Z0-9]{1,25}/.test(inputQuantity.value)){
    small.innerHTML = 'quantité vide '
    small.classList.remove('label-valide')
    small.classList.add('label-invalide')
  }
  else if 
    (/[0-9]{3,15}/.test(inputQuantity.value)) {
    small.innerHTML = 'quantité maximum de 99 '
    small.classList.remove('label-valide')
    small.classList.add('label-invalide')
    return false;
   } 
      
     
  else if 
        (/[0-9]{1,2}/.test(inputQuantity.value)) {
        small.innerHTML = "quantité valide"
        small.classList.remove('label-invalide')
        small.classList.add('label-valide')
        return true;
  }
      
      
};


 // validation de la date 
 const validBirthdate = function(inputBirthdate) {
  let birthdateRegExp = new RegExp(
    "^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\\d\\d$" ,
    'g'
  );

    let small = inputBirthdate.nextElementSibling;

    if (birthdateRegExp.test(inputBirthdate.value)) {
      small.innerHTML = "date de naissance valide"
      small.classList.remove('label-invalide')
      small.classList.add('label-valide')
      return true;
    } else {
      small.innerHTML = 'la date doit etre au format jj/mm/aaaa '
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false;
    }

}







  
  












































