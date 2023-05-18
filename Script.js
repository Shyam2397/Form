
function Addrow(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let gender = document.getElementById('gender').value
    let option1 = document.querySelector('#option1').value
    let option2 = document.querySelector('#option2').value
    let address = document.getElementById('address').value
    let pincode = document.getElementById('pincode').value
    let state = document.getElementById('state').value
    let country = document.getElementById('country').value
    
    let table = `<tr>
                    <td>${fname}</td>
                    <td>${lname}</td>
                    <td>${gender}</td>
                    <td>${option1}</td>
                    <td>${option2}</td>
                    <td>${address}</td>
                    <td>${pincode}</td>
                    <td>${state}</td>
                    <td>${country}</td>
                 </tr>`;
    document.getElementById('show').innerHTML += table

    clearForm()

    
}

function clearForm(){
    document.getElementById('fname').value   = "";
    document.getElementById('lname').value   = "";
    document.getElementById('gender').value  = "";
    document.getElementById('option1').value = "";
    document.getElementById('option2').value = "";
    document.getElementById('address').value = "";
    document.getElementById('pincode').value = "";
    document.getElementById('state').value   = "";
    document.getElementById('country').value = "";
}


