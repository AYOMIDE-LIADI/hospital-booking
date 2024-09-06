document.getElementById("book").addEventListener('click', function(){
    document.getElementById('form').style.display = 'block';
    document.getElementById('background').style.display = 'none';
})
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    let valid = true

    let firstform ={
        firstname:document.getElementById('firstname').value,
        lastname:document.getElementById('lastname').value,
        phonenumber:document.getElementById('phonenumber').value,
        email:document.getElementById('email').value,
        doctors: document.getElementById('doctors').value,
        checkbox1:document.getElementById('checkbox1').value,
        checkbox2:document.getElementById('checkbox2').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        comment: document.getElementById('comment').value,
    }

    if(firstform.firstname ===""){
        valid = false;
        error = true
        document.getElementById('firstname').style.borderColor = 'red';
        document.getElementById('fnerror').style.display = 'block';
        document.getElementById('fnerror').style.color = 'red';
    }else if(firstform.lastname ===""){
        valid = false;
        error = true
        document.getElementById('firstname').style.borderColor = 'black';
        document.getElementById('fnerror').style.display = 'none';
        document.getElementById('lastname').style.borderColor = 'red';
        document.getElementById('lnerror').style.display = 'block';
        document.getElementById('lnerror').style.color = 'red';
    }else if(firstform.phonenumber ===""){
        valid = false;
        error = true
        document.getElementById('lastname').style.borderColor = 'black';
        document.getElementById('lnerror').style.display = 'none';
        document.getElementById('phonenumber').style.borderColor = 'red';
        document.getElementById('numerror').style.display = 'block';
        document.getElementById('numerror').style.color = 'red';
    }else if(isNaN(firstform.phonenumber)){
        valid = false;
        error = true
        document.getElementById('phonenumber').style.borderColor = 'red';
        document.getElementById('numerror1').style.display = 'block';
        document.getElementById('numerror1').style.color = 'red';
        document.getElementById('numerror').style.display = 'none';
    }else if(firstform.email ===""){
        valid = false;
        error = true
        document.getElementById('phonenumber').style.borderColor = 'black';
        document.getElementById('numerror').style.display = 'none';
        document.getElementById('numerror1').style.display = 'none';
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('emailerror').style.display = 'block';
        document.getElementById('emailerror').style.color = 'red';
    }else if(firstform.doctors ===""){
        valid = false;
        error = true
        document.getElementById('email').style.borderColor = 'black';
        document.getElementById('emailerror').style.display = 'none';
        document.getElementById('doctors').style.borderColor = 'red';
        document.getElementById('docerror').style.display = 'block';
        document.getElementById('docerror').style.color = 'red';
    }else if(firstform.date ===""){
        valid = false;
        error = true
        document.getElementById('doctors').style.borderColor = 'black';
        document.getElementById('docerror').style.display = 'none';
        document.getElementById('date').style.borderColor = 'red';
        document.getElementById('dateerror').style.display = 'block';
        document.getElementById('dateerror').style.color = 'red';
    }else if(firstform.time ===""){
        valid = false;
        error = true
        document.getElementById('date').style.borderColor = 'black';
        document.getElementById('dateerror').style.display = 'none';
        document.getElementById('time').style.borderColor = 'red';
        document.getElementById('timeerror').style.display = 'block';
        document.getElementById('timeerror').style.color = 'red';
    }else if(firstform.comment ===""){
        valid = false;
        error = true
        document.getElementById('time').style.borderColor = 'black';
        document.getElementById('timeerror').style.display = 'none';
        document.getElementById('comment').style.borderColor = 'red';
        document.getElementById('commenterror').style.display = 'block';
        document.getElementById('commenterror').style.color = 'red';
    }
    else{
        localStorage.setItem('appointmentinDetail',JSON.stringify(firstform))
        alert('Appointment Booked')
        document.getElementById('form').style.display = 'none';
        document.getElementById('tranperent').style.display = 'block';
    }
    
})


let GetAppointmentInfo = JSON.parse(localStorage.getItem("appointmentinDetail"));
console.log(GetAppointmentInfo);

let append = document.getElementById('append');

// Ensure GetAppointmentInfo is an array before using forEach
if (typeof GetAppointmentInfo === 'object') {
   // If it's a single object, just access its properties
   console.log(GetAppointmentInfo);
   let varr = `
   <div class="flex justify-between">
       <p>First Name: ${GetAppointmentInfo.firstname}</p>
       <p>Last Name: ${GetAppointmentInfo.lastname}</p>
   </div>
   <div class="flex justify-between mt-[10px]">
       <p>Phone number: ${GetAppointmentInfo.phonenumber}</p>
       <p>Email: ${GetAppointmentInfo.email}</p>
   </div>
   <div class="mt-[20px]">
       <p class="font-bold">Appointment:</p>
       <div class="flex justify-between">
           <p>Date: ${GetAppointmentInfo.date}</p>
           <p>Time: ${GetAppointmentInfo.time}</p>
       </div>
   </div>
    <p class="font-bold mt-[20px]">Physician: <p>${GetAppointmentInfo.doctors}</p>`;
   append.innerHTML += varr;
} else {
    console.error("No valid appointment data found.");
}



document.getElementById("close").addEventListener('click', function(){
    document.getElementById('tranperent').style.display = 'none';
    document.getElementById('background').style.display = 'block';
})

document.getElementById("emergencyBtn").addEventListener('click', function(){
    document.getElementById('form2').style.display = 'block';
    document.getElementById('background').style.display = 'none';
})

document.getElementById("form2").addEventListener('submit', function(e){
    e.preventDefault()

    let valid = true

    let emergencyInfo = {
        nameOne:document.getElementById('nameOne').value,
        nameTwo:document.getElementById('nameTwo').value,
        callNum:document.getElementById('callNum').value,
        emailholder:document.getElementById('emailholder').value,
        complain:document.getElementById('complain').value,
    }

    if(emergencyInfo.nameOne ===""){
        valid = false;
        error = true
        document.getElementById('nameOne').style.borderColor = 'red';
        document.getElementById('fnerrorEmg').style.display = 'block';
        document.getElementById('fnerrorEmg').style.color = 'red';
    }else if(emergencyInfo.nameTwo ===""){
        valid = false;
        error = true
        document.getElementById('nameOne').style.borderColor = 'black';
        document.getElementById('fnerrorEmg').style.display = 'none';
        document.getElementById('nameTwo').style.borderColor = 'red';
        document.getElementById('lnerrorEmg').style.display = 'block';
        document.getElementById('lnerrorEmg').style.color = 'red';
    }else if(emergencyInfo.callNum ===""){
        valid = false;
        error = true
        document.getElementById('nameTwo').style.borderColor = 'black';
        document.getElementById('lnerrorEmg').style.display = 'none';
        document.getElementById('callNum').style.borderColor = 'red';
        document.getElementById('callerrorEmg').style.display = 'block';
        document.getElementById('callerrorEmg').style.color = 'red';
    }
    else if(isNaN(emergencyInfo.callNum)){
        valid = false;
        error = true
        document.getElementById('nameTwo').style.borderColor = 'black';
        document.getElementById('lnerrorEmg').style.display = 'none';
        document.getElementById('callNum').style.borderColor = 'red';
        document.getElementById('callerrorEmg').style.display = 'none';
        document.getElementById('callerrorEmg2').style.display = 'block';
        document.getElementById('callerrorEmg2').style.color = 'red';
    }else if(emergencyInfo.emailholder ===""){
        valid = false;
        error = true
        document.getElementById('callNum').style.borderColor = 'black';
        document.getElementById('callerrorEmg2').style.display = 'none';
        document.getElementById('callerrorEmg').style.display = 'none';
        document.getElementById('emailholder').style.borderColor = 'red';
        document.getElementById('emailerrorEmg').style.display = 'block';
        document.getElementById('emailerrorEmg').style.color = 'red';
    }else if(emergencyInfo.complain ===""){
        valid = false;
        error = true
        document.getElementById('emailholder').style.borderColor = 'black';
        document.getElementById('emailerrorEmg').style.display = 'none';
        document.getElementById('complain').style.borderColor = 'red';
        document.getElementById('texterrorEmg').style.display = 'block';
        document.getElementById('texterrorEmg').style.color = 'red';
    }
    else{
        localStorage.setItem('emergencydetails', JSON.stringify(emergencyInfo))
        alert('Information Recieved')
        document.getElementById('form2').style.display = 'none';
        document.getElementById('tranperent2').style.display = 'block';
    }
}) 
    let replace = document.getElementById('replace')

    let emergencyInfo = JSON.parse(localStorage.getItem('emergencydetails'));
    if (typeof emergencyInfo === 'object'){
        let place = `
        <div class="flex justify-between ">
                <p>First Name:  ${emergencyInfo.nameOne} </p>
                <p>Last Name: ${emergencyInfo.nameTwo} </p>
            </div>`
        replace.innerHTML += place    
    }
    else{
        console.log('no info gotten');   
    }


document.getElementById("close2").addEventListener('click', function(){
    document.getElementById('tranperent2').style.display = 'none';
    document.getElementById('background').style.display = 'block';
})

let prescription = document.getElementById('prescription');
let posibleAilment = document.getElementById('posibleAilment');
let symptoms = document.getElementById('complain').value.toLowerCase(); // Make the input case insensitive

if (symptoms === "cold" || symptoms === "fatigue" || symptoms === "headache") {
    let illness = `You have malaria`;
    let pres = `Primaquine`;

    posibleAilment.textContent = illness; // Replace innerHTML with textContent to avoid multiple appends
    prescription.textContent = pres;
} else {
    console.log('words don\'t match');
}




