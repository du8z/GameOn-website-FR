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
window.addEventListener('load', function () {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
})





// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}




// fonctionnement de la (x)

  closeBtn.addEventListener("click", function(){
    modalbg.style.display = "none"
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



// validation de la totalité des champs 

 form.addEventListener('submit', function(e) {
  e.preventDefault();
  
   if ((validUser(inputFirst, 'prénom')) &&
    (validUser(inputLast, 'nom')) && 
    (validEmail(form.email)) && 
    (validBirthdate(form.birthdate)) && 
    (validQuantity(form.quantity)) &&
    (validLocation(inputLocation)) && 
    (ValidCheckbox(form.checkbox1))){

   
        alert("document envoyé");
        form.submit();
   
    }    
  
  
   });


// validation du prénom et du nom
 

      
const validUser = function(input , nom ){

  let small = input.nextElementSibling;
  if (!/[a-zA-Z]{3,15}/.test(input.value)){
  small.innerHTML = 'le ' + nom + ' doit contenir plus de 2 caractères'
  small.classList.remove('label-valide')
  small.classList.add('label-invalide')
  return false ;
} else if 
    (/[0-9]/.test(input.value)) {
      small.innerHTML = 'le ' + nom + ' ne doit pas contenir de chiffre'
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false;
  } else if 
  (/[a-zA-Z]{3,15}/.test(input.value)) {
     small.innerHTML = 'le ' + nom + ' est valide'  
    small.classList.remove('label-invalide')
    small.classList.add('label-valide')  
    return true;
    }
}




inputFirst = document.getElementById('first');
inputLast = document.getElementById('last');


inputFirst.addEventListener('change', function (){
  validUser (inputFirst, 'prenom')
});


inputLast.addEventListener('change', function(){
  validUser (inputLast, 'nom')
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
    }  
      small.innerHTML = 'adresse non valide'
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false;
    

}



     
        
        












      // validation des conditions générales 
      
      
      
      const labelCheckbox = document.querySelector('#checkbox1')
      
      const ValidCheckbox = function(labelCheckbox) {
        
        let small = document.getElementById('checkbox-text2');
        if (!labelCheckbox.checked){
          small.innerHTML = ('Vous devez vérifier que vous acceptez les termes et conditions.')
          small.classList.remove('label-valide')
          small.classList.add('label-invalide')
          return false ;
        } 
          small.innerHTML = ('conditions accepté ')
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
    }  
      small.innerHTML = 'la date doit etre au format jj/mm/aaaa'
      small.classList.remove('label-valide')
      small.classList.add('label-invalide')
      return false;
    

}

// validation de radio 

inputLocation = document.querySelectorAll('.checkbox-valid')

 function validLocation(){
  
  let small = document.getElementById('checkbox-text');
  for (var i = 0 ; i < inputLocation.length; i++)
  if (inputLocation[i].checked) {
    small.innerHTML = 'localisation validé'
    small.classList.remove('label-invalide')
    small.classList.add('label-valide')
    return true 
  }  
    small.innerHTML = 'veuillez selectionner une localisation'
    small.classList.remove('label-valide')
    small.classList.add('label-invalide')
    return false 
  
}







  
  












































