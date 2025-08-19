function sendMail(){
      let params = {
            name : document.getElementById("name").value,
            email : document.getElementById("email").value,
            subject : document.getElementById("subject").value,
            message : document.getElementById("message").value
      }

      emailjs.send("service_xv16hgm", "template_n118t5c", params)
      .then(function(response) {
            alert(response.status === 200 ? "Message sent successfully!" : "Failed to send email.");
      });
}


// const form = document.forms['submit-to-google-sheet'];
// const msg = document.getElementById('msg');
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxr_UhTqfAKenkIl_sthIDfDdXWjA-LOYqJd1MzrHoHag6ddf6-AdNxTl-bAQyrAWCpGQ/exec';

// form.addEventListener('submit', e => {
//     e.preventDefault(); // prevent default form submission

//     // Prepare EmailJS params
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value
//     };

//     // Send email using EmailJS
//     emailjs.send("service_xv16hgm", "template_n118t5c", params)
//         .then(() => {
//             // Optional: send to Google Sheets as well
//             fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//                 .then(() => {
//                     msg.textContent = "Message sent successfully!";
//                     msg.classList.add("show"); // show message
//                     form.reset(); // clear form
//                     setTimeout(() => {
//                         msg.classList.remove("show"); // hide after 3 seconds
//                     }, 3000);
//                 })
//                 .catch(error => {
//                     console.error('Google Sheets Error:', error.message);
//                     msg.textContent = "Failed to send message.";
//                     msg.classList.add("show");
//                     setTimeout(() => msg.classList.remove("show"), 3000);
//                 });
//         })
//         .catch(error => {
//             console.error('EmailJS Error:', error);
//             msg.textContent = "Failed to send email.";
//             msg.classList.add("show");
//             setTimeout(() => msg.classList.remove("show"), 3000);
//         });
// });
