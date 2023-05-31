//Register Online Script

//Clear Form
const clearForm =()=>{
document.getElementById('registerForm').reset();
}

//Clear Another Feild

function resetCashDemand(){

document.getElementById('cash-amount').disabled = true; 

document.getElementById('cheque-no').disabled = false;
document.getElementById('cheque-date').disabled = false;
document.getElementById('cheque-bank-name').disabled = false;
document.getElementById('cheque-branch').disabled = false;
document.getElementById('cheque-amount').disabled = false;

document.getElementById('dd-no').disabled = true;
document.getElementById('dd-date').disabled = true;
document.getElementById('dd-bank-name').disabled = true;
document.getElementById('dd-branch').disabled = true;
document.getElementById('dd-amount').disabled = true;

document.getElementById('dd-no').value='';
document.getElementById('dd-date').value='';
document.getElementById('dd-bank-name').value='';
document.getElementById('dd-branch').value='';
document.getElementById('dd-amount').value='';
document.getElementById('cash-amount').value='';
}
function clearChequeDemand(){

document.getElementById('cash-amount').disabled = false; 

document.getElementById('cheque-no').disabled = true;
document.getElementById('cheque-date').disabled = true;
document.getElementById('cheque-bank-name').disabled = true;
document.getElementById('cheque-branch').disabled = true;
document.getElementById('cheque-amount').disabled = true;

document.getElementById('dd-no').disabled = true;
document.getElementById('dd-date').disabled = true;
document.getElementById('dd-bank-name').disabled = true;
document.getElementById('dd-branch').disabled = true;
document.getElementById('dd-amount').disabled = true;

document.getElementById('cheque-no').value='';
document.getElementById('cheque-date').value='';
document.getElementById('cheque-bank-name').value='';
document.getElementById('cheque-branch').value='';
document.getElementById('cheque-amount').value='';

document.getElementById('dd-no').value='';
document.getElementById('dd-date').value='';
document.getElementById('dd-bank-name').value='';
document.getElementById('dd-branch').value='';
document.getElementById('dd-amount').value='';
}
function clearCashCheque(){

document.getElementById('cash-amount').disabled = true; 

document.getElementById('cheque-no').disabled = true;
document.getElementById('cheque-date').disabled = true;
document.getElementById('cheque-bank-name').disabled = true;
document.getElementById('cheque-branch').disabled = true;
document.getElementById('cheque-amount').disabled = true;

document.getElementById('dd-no').disabled = false;
document.getElementById('dd-date').disabled = false;
document.getElementById('dd-bank-name').disabled = false;
document.getElementById('dd-branch').disabled = false;
document.getElementById('dd-amount').disabled = false;


document.getElementById('cheque-no').value='';
document.getElementById('cheque-date').value='';
document.getElementById('cheque-bank-name').value='';
document.getElementById('cheque-branch').value='';
document.getElementById('cheque-amount').value='';

document.getElementById('cash-amount').value='';
}

//Form Validation

function formValidation(){
  let name = document.getElementById("name");
  let birthPlace = document.getElementById("birth-place");
  let father = document.getElementById("father-name");
  let mother = document.getElementById("mother-name");
  let resAddress = document.getElementById("residence");
  let city = document.getElementById("city");
  let state = document.getElementById("state");
  let pincode = document.getElementById("pincode");
  let phone = document.getElementById("phone");
  let fatherOccupation = document.getElementById("father-occupation");
  let gurdian = document.getElementById("gurdian");
  let nationality = document.getElementById("nationality");
  let email = document.getElementById("email").value;
		
  let atSymbolIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

//Name Validation 

if (name.value==''){
    alert("Name cannot be empty");
    return false;
  }
else if (/\d/.test(name.value)){
    alert("Please enter a valid name and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(name.value)){
    alert("Please enter a valid name and don't use special characters");
    return false;
  }
else if(name.value.length<3 || name.value.length>40 ){
    alert("Please enter a valid name [Length should be greater than 3 and less than 40]");
    return false;
}

//Birthplace Validation

else if (birthPlace.value==''){
    alert("Birthplace cannot be empty");
    return false;
  }
else if (/\d/.test(birthPlace.value)){
    alert("Please enter a valid birthplace and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(birthPlace.value)){
    alert("Please enter a valid Birth Place and don't use special characters");
    return false;
  }
else if (birthPlace.value.length<3||birthPlace.value.length>35) {
    alert("Please enter a valid birthplace [Length should be greater than 3 and less than 35]");
    return false;
  }

// Father's Name Validation

else if (father.value==''){
    alert("Father's name cannot be empty");
    return false;
  }
else if (/\d/.test(father.value)){
    alert("Please enter your father's name and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(father.value)){
    alert("Please enter your father's and don't use special characters");
    return false;
  }
else if (father.value.length<3||father.value.length>35) {
    alert("Please enter your father's name [Length should be greater than 3 and less than 35]");
    return false;
  }

//Mother's Name Validation complete

else if (mother.value==''){
    alert("Mother's name cannot be empty");
    return false;
  }
else if (/\d/.test(mother.value)){
    alert("Please enter your mother's name and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(mother.value)){
    alert("Please enter your mother's name and don't use special characters");
    return false;
  }
else if (mother.value.length<3||mother.value.length>35) {
    alert("Please enter your mother's name [Length should be greater than 3 and less than 35]");
    return false;
  }

//Residence Address Validation complete

else if (resAddress.value==''){
    alert("Residence address cannot be empty");
    return false;
  }
else if (/[^a-zA-Z0-9\s,.]/.test(resAddress.value)){
    alert("Please enter your residence address and don't use special characters");
    return false;
  }
else if (resAddress.value.length<5||resAddress.value.length>100) {
    alert("Please enter your residence address [Length Should be greater than 5 and less than 100]");
    return false;
  }

//City Validation

else if (city.value==''){
    alert("City cannot be empty");
    return false;
  }
else if (/\d/.test(city.value)){
    alert("Please enter a valid city and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(city.value)){
    alert("Please enter a valid city and don't use special characters");
    return false;
  }
else if (city.value.length<3||city.value.length>35) {
    alert("Please enter a valid City [Length should be greater than 3 and less than 35]");
    return false;
  }

//State Validation

else if (state.value==''){
    alert("State cannot be empty");
    return false;
  }
else if (/\d/.test(state.value)){
    alert("Please enter a valid state and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(state.value)){
    alert("Please enter a valid state and don't use special characters");
    return false;
  }
else if (state.value.length<3||state.value.length>35) {
    alert("Please enter a valid state [Length should be greater than 3 and less than 35]");
    return false;
  }

//Pincode Validation

else if (pincode.value=='') {
    alert("Pincode cannot be empty");
    return false;
  }
else if (/[^0-9]/.test(pincode.value)){
    alert("Please enter a valid pincode don't use characters or special characters");
    return false;
  }
else if (pincode.value.length<6||pincode.value.length>6) {
    alert("Please enter a valid pincode, your pincode is "+pincode.value.length+" digits");
    return false;
  }

//Phone Number Validation complete

else if (phone.value=='') {
    alert("Phone number cannot be empty");
    return false;
  }
else if (/[^0-9]/.test(phone.value)){
    alert("Please enter a valid phone number don't use characters or special characters");
    return false;
  }
else if (phone.value.length<10||phone.value.length>10) {
    alert("Please enter a valid phone number, your phone number is "+phone.value.length+" digits");
    return false;
  }

//Email Validation

else if (email.length<1) {
    alert("Email cannot be empty");
    return false;
  }
else if(atSymbolIndex === -1 || dotIndex === -1 || dotIndex < atSymbolIndex + 2 || dotIndex + 1 >= email.length) {
    alert("Please enter a valid email e.g.- example@example.com");
    return false;
 } 

//Father Occupation Validation

else if (fatherOccupation.value==''){
    alert("Father's occupation cannot be empty");
    return false;
  }
else if (/\d/.test(fatherOccupation.value)){
    alert("Please enter your father's occupation and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(fatherOccupation.value)){
    alert("Please enter your father's occupation and don't use special characters");
    return false;
  }
else if (fatherOccupation.value.length<3||fatherOccupation.value.length>35) {
    alert("Please enter your father's occupation [Length should be greater than 3 and less than 35]");
    return false;
  }

//Guirdien Name Validation

else if (gurdian.value==''){
    alert("Guardian's name cannot be empty");
    return false;
  }
else if (/\d/.test(gurdian.value)){
    alert("Please enter your guardian's name and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(gurdian.value)){
    alert("Please enter your guardian's name and don't use special characters");
    return false;
  }
else if (gurdian.value.length<3||gurdian.value.length>35) {
    alert("Please enter your guardian's name [Length should be greater than 3 and less than 35]");
    return false;
  }

//Nationality Validation

else if (nationality.value==''){
    alert("Nationality cannot be empty");
    return false;
  }
else if (/\d/.test(nationality.value)){
    alert("Please enter your nationality and don't use numbers");
    return false;
  }
else if (/[^a-zA-Z\s]/.test(nationality.value)){
    alert("Please enter your nationality and don't use special characters");
    return false;
  }
else if (nationality.value.length<3||nationality.value.length>35) {
    alert("Please enter your nationality [Length should be greater than 3 and less than 35]");
    return false;
  }

//Validation Complete Submit Form

else{
alert("The form has been successfully submitted");
return true;
}
}

//PhotoGallery Script

console.log("script is running");

let currentIndex = 0;
const ImageSource2 = [  "images/stage.gif",  "images/drama_4.gif",  "images/drama_3.gif",  "images/dance.gif",  "images/drama2.gif",  "images/boy.gif",  "images/lab_3.gif",  "images/lab_6.gif",  "images/pricipal.gif"];
const TitleSource2 = [  "ANNUAL FUNCTION",  "ANNUAL FUNCTION",  "ANNUAL FUNCTION",  "ANNUAL FUNCTION",  "ANNUAL FUNCTION",  "ANNUAL FUNCTION",  "BIOLOGY LAB",  "PHYSICS LAB",  "RECTOR"];

const previewBox = document.getElementsByClassName("preview-box")[0];

function openDiv(e) {
previewBox.classList.add("show");
currentIndex = e;
const imgElement = document.getElementsByClassName("image-box")[0].getElementsByTagName("img")[0];
imgElement.src = ImageSource2[currentIndex];
const captionElement = document.getElementsByClassName("caption-img")[0].querySelector("#caption-img-p");
captionElement.innerHTML = TitleSource2[currentIndex];

const prevButton = document.getElementsByClassName("prev")[0];
const nextButton = document.getElementsByClassName("next")[0];

if (currentIndex === 0) {
prevButton.style.display = "none";
} else {
prevButton.style.display = "block";
}
if (currentIndex === ImageSource2.length - 1) {
nextButton.style.display = "none";
}else{
nextButton.style.display = "block";
}
}
function nextImage(){
if (currentIndex < ImageSource2.length - 1){
currentIndex++;
const imgElement = document.getElementsByClassName("image-box")[0].getElementsByTagName("img")[0];
imgElement.src = ImageSource2[currentIndex];
const captionElement = document.getElementsByClassName("caption-img")[0].querySelector("#caption-img-p");
captionElement.innerHTML = TitleSource2[currentIndex];
}
const prevButton = document.getElementsByClassName("prev")[0];
const nextButton = document.getElementsByClassName("next")[0];

if (currentIndex === 0){
prevButton.style.display = "none";
} else {
prevButton.style.display = "block";
}

if (currentIndex === ImageSource2.length - 1){
nextButton.style.display = "none";
} else {
nextButton.style.display = "block";
}
}
function prevImage(){
if (currentIndex > 0){
currentIndex--;
const imgElement = document.getElementsByClassName("image-box")[0].getElementsByTagName("img")[0];
imgElement.src = ImageSource2[currentIndex];
const captionElement = document.getElementsByClassName("caption-img")[0].querySelector("#caption-img-p");
captionElement.innerHTML = TitleSource2[currentIndex];
}

const prevButton = document.getElementsByClassName("prev")[0];
const nextButton = document.getElementsByClassName("next")[0];

if (currentIndex === 0){
prevButton.style.display = "none";
} else {
prevButton.style.display = "block";
}

if (currentIndex === ImageSource2.length - 1){
nextButton.style.display = "none";
} else {
nextButton.style.display = "block";
}
}

function closeDiv() {
previewBox.classList.remove("show");
}

document.onkeyup = function(event){
if (event.keyCode === 27){
closeDiv();
}}
