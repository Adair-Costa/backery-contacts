const form = window.document.querySelector('#form');

const email = window.document.querySelector('#email');
// const userName = window.document.querySelector('#name');
const subject = window.document.querySelector('#subject');
const message = window.document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const options = {
    email: email.value,
    // // userName: userName.value,
    subject: subject.value,
    message: message.value,
  };

  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.responseText);

    if (xhr.responseText === 'success') {
      window.alert('Email sent!');

      email.value = '';
      // userName.value = '';
      subject.value = '';
      message.value = '';
    } else {
      window.alert('Something went wrong!');
    }
  };

  xhr.send(JSON.stringify(options));
});
