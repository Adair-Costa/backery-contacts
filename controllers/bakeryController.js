const nodemailer = require('nodemailer');

exports.getFile = (req, res) => {
  res.render('bakery_contacts');
};

exports.sendMail = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_USERNAME,
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('success');
    }
  });
};
