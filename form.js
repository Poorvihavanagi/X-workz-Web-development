function submitForm(){
    
    let value=true;

    let nameInput=document.formName.nameName.value
    let numberInput=document.formName.numberName.value
    let emailInput=document.formName.emailName.value
    let addressInput=document.formName.addressName.value
    let genderInput = document.formName.genderName.value;

    alert(nameInput);
    alert(numberInput);
    alert(emailInput);
    alert(addressInput);
    alert(genderInput);

    return value;
}