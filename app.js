const formData = {};

//clearing all steps 
document.addEventListener('DOMContentLoaded', function () {
  function hideAllSteps() {
    document.getElementById('loginpage').style.display = 'none';
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'none';
  }

  //showing only steps with your id
  function showStepById(id) {
    hideAllSteps();
    document.getElementById(id).style.display = 'block';//here you are showiung only step with your id
  }

  //login
  document.getElementById('loginBtn').onclick = function () {
    const user = document.getElementById('loginuser').value;
    const pass = document.getElementById('loginpassword').value;
    showStepById('step1')
    if (user && pass) {
      showStepById('step1');
    } else {
      // alert("Enter login credentials");
    }
  };
  //here step1 to step2
  document.getElementById('nextToStep2').onclick = function () {
    formData.username = document.getElementById('username').value;
    formData.contact = document.getElementById('contact_no').value;
    formData.dob = document.getElementById('dob').value;
    formData.address = document.getElementById('address').value;
    formData.profileImg = document.getElementById('profileimg').files[0];
    // let uname=document.getElementById('username');
    console.log(username.placeholder)
    if(username.value!=''){
      showStepById('step2');

      // alert('enter correct name without space');
      
    }else{
      alert('enter correct value');
    }

    
    
    
    


    showStepById('step2');
  };
  //back to step1
  document.getElementById('backToStep1').onclick = function () {
    showStepById('step1');
  };
    //step2 to step3
  document.getElementById('nextToStep3').onclick = function () {
    formData.familyDetails = document.getElementById('family').value;
    formData.emergencyContact = document.getElementById('emergency_no').value;
    showStepById('step3');
  };
  //back to step2
  document.getElementById('backToStep2').onclick = function () {
    showStepById('step2');
  };
  //submit page 
  document.getElementById('submitbtn').onclick = function () {
    formData.occupation = document.getElementById('occupation').value;
    formData.experience = document.getElementById('experience').value;
    formData.graduation = document.getElementById('graduation').value;
    formData.documents = document.getElementById('documents').files;
    console.log("Collected Form Data:", formData);
    alert("Form submitted successfully!");
  };

  showStepById('loginpage');
});