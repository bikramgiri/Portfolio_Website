function sendMail(){
      let params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value
      }

      emailjs.send("service_xv16hgm", "template_n118t5c", params)
      .then(function(response) {
            alert("Email sent successfully!");
      }, function(error) {
            alert("Failed to send email.");
      });
}