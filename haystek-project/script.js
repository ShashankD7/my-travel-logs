const handleClick = (element) => {
    var paragraphs = document.querySelectorAll('.left-nav p');

    paragraphs.forEach(function(para) {
        para.style.color = '#8f8297';  // Reset color
        para.style.fontWeight = 'normal';  // Reset font weight
    });

    element.style.color = 'black';
    element.style.fontWeight = 'bold';

}

function scrollToSection(sectionClass) {
    var section = document.getElementsByClassName(sectionClass)[0];
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            this.querySelector('.icon').textContent = this.querySelector('.icon').textContent === '➕' ? '➖' : '➕';
        });
    });
});



let custNo = [1, 2, 3];
let customerName = document.getElementsByClassName("customer-name");


(function() {
        for (let i=0; i<3; i++) {
            customerName[i].textContent = `Customer ${custNo[i]}`;
        }
})()


function addition () {
    if (custNo[2] < 10) {
        let j=1;
        for (let i=0; i<3; i++) {
            custNo[i] += j;
            customerName[i].textContent = `Customer ${custNo[i]}`;
            
        }
    }
}

function subtraction () {
    if (custNo[0] > 1) {
        let j=1;
        for (let i=0; i<3; i++) {
            custNo[i] -= j;
            customerName[i].textContent = `Customer ${custNo[i]}`;
        }
    }
}

function sendEmail(){
    emailjs.init("lZAK9pkx6YAXUBt-f"); // Replace with your EmailJS user ID

    document.getElementById('sendEmail').addEventListener('click', function(event) {
        event.preventDefault();
        
        var templateParams = {
            from_name: document.querySelector('[placeholder="First Name"]').value + " " + document.querySelector('[placeholder="Last Name"]').value,
            to_name: 'Recipient Name', 
            subject: document.querySelector('[placeholder="Subject"]').value,
            message: document.querySelector('[placeholder="Message"]').value,
            reply_to: document.querySelector('[placeholder="Email"]').value
        };
        
        emailjs.send('service_1ltmlhj', 'template_d105tin', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
};