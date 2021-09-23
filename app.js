const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const travel = document.querySelector("#travel");
const form = document.querySelector(".input-form");
const alert = document.querySelector(".alert");
const list = document.querySelector(".table-body");
const submitBtn = document.querySelector(".submit-btn")
const table = document.querySelector(".list")
// edit option
let editDetail;
let editFlag = false;
let editID = "";

// ///////////////////////////ADD EVENT LISTENER////////////

form.addEventListener("submit", function(e){
    e.preventDefault();
    const id = new Date().getTime().toString();
    const firstNameInput = firstName.value;
    const lastNameInput = lastName.value;
    const emailInput = email.value;
    const genderInput = gender.value;
    const travelInput = travel.value;

    // console.log(firstNameInput);
    // console.log(lastNameInput);
    // console.log(emailInput);
    // console.log(genderInput);

    if(travel.checked === true){
        travelled = "Yes";
        // console.log(travelled)
    }if(travel.checked === false){
        travelled = "No";
        // console.log(travelled)
    }
    
    if( firstNameInput && lastNameInput && emailInput && genderInput!== "Male,female" && !editFlag){
         const details = document.createElement("tr");
    details.classList.add("details");
    const attr = document.createAttribute("data-id");
    attr.value =id;
    details.setAttributeNode(attr);
    details.innerHTML = ` <tr>
                    <td class="output-name"> <span class="last-name">${lastNameInput}</span> <span class="first-name">${firstNameInput}</span>  </td>
                    <td class="output-email">${emailInput}</td>
                    <td class="output-gender">${genderInput}</td>
                    <td class="output-travel">${travelled}</td>
                    <td><button type="button" class="edit-btn btn">Edit</button></td>
                    <td><button type="button" class="delete-btn btn">Delete</button></td>
                    </tr>`;
                    table.classList.add("show-table");
        list.appendChild(details);
        displyAlert("Details added successfully", "good");
        // /////////DELETE BUTTON//////////////////////
            const deleteBtn = details.querySelector(".delete-btn");
            deleteBtn.addEventListener("click", deleteDetails)
        // /////////DELETE BUTTON//////////////////////
            const editBtn = details.querySelector(".edit-btn");
            editBtn.addEventListener("click", editDetails)
            setToDefault();
            
    }else if( firstNameInput && lastNameInput && emailInput && genderInput!== "Male,female" && editFlag){
            editFirstName.innerHTML =  firstNameInput ;
            editLastName.innerHTML = lastNameInput;
            editEmail.innerHTML = emailInput;
            editGender.innerHTML =genderInput;
            editTravel.innerHTML = travelled;
            displyAlert("Record Updated", "good")
            setToDefault();

    }else if( !firstNameInput || !lastNameInput || !emailInput || genderInput === "Male,female"){
        displyAlert("Enter all input", "bad");
    }

   

})


// ////////////////////FUNCTIONS///////////////////

// Delete details
function deleteDetails(e){
    const element = e.currentTarget.parentElement.parentElement;
    list.removeChild(element);
    displyAlert("Record Deleted!!", "bad");
    setToDefault();
    if(list.children.length === 0){
    table.classList.remove("show-table");

    }
}

// Edit details
function editDetails(e){
    editFlag = true;
    const editDetail = e.currentTarget.parentElement.parentElement;

    editID = editDetail.dataset.id;

     editFirstName = e.currentTarget.parentElement.parentElement.firstElementChild.firstElementChild;

     editLastName = e.currentTarget.parentElement.parentElement.firstElementChild.lastElementChild;

     editEmail = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;

     editGender = e.currentTarget.parentElement.previousElementSibling.previousElementSibling;

     editTravel = e.currentTarget.parentElement.previousElementSibling;
     editTravel.innerHTML = travelled;

       firstName.value =editFirstName.innerHTML;
        lastName.value = editLastName.innerHTML;
        email.value = editEmail.innerHTML;
        gender.value = editGender.innerHTML;

        submitBtn.innerHTML = "update";


    //  if(editTravel.innerHTML = "Yes"){
    //      travel.checked = true;
    //     }if(editTravel.innerHTML= "No"){
    //         travel.checked = false;
    //  }

// console.log(editFirstName);
// console.log(editLastName);
// console.log(editEmail);
// console.log(editGender);
// console.log(editTravel);
// console.log(editID);
// console.log(editDetail);
}

// display alert
function displyAlert(text, action){
    alert.classList.add("show-alert");
    alert.classList.add(action);
    alert.innerHTML = text;
}

// remove alert
setInterval(function(){
    alert.classList.remove("show-alert");
    alert.classList.remove("bad");
    alert.classList.remove("good");
    alert.innerHTML = "";

},2000)

// set default

function setToDefault(){
 firstName.value = "";
lastName.value="";
email.value="";
gender.value="Male,female";
travel.checked = false;
submitBtn.innerHTML= "Submit"
editID = "";
editFlag = false;

}
