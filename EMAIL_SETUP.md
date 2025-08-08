# Email Setup Instructions

## 📧 EmailJS Setup (Recommended - Free & Easy)

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail recommended)

### Step 3: Configure Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Connect your Gmail account (nileshgirissism@gmail.com)

### Step 4: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Step 5: Update Configuration
Replace the values in `src/lib/emailService.ts`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id'; // From EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // From EmailJS dashboard  
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // From EmailJS dashboard
```

### Step 6: Test the Setup
1. Run your application
2. Go to contact page
3. Fill out the form and submit
4. Check your Gmail inbox

## 🔧 Alternative: Backend API Setup

If you prefer a backend solution, create an API endpoint:

### Express.js + Nodemailer Example:
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password' // Use App Password, not regular password
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: 'nileshgirissism@gmail.com',
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});
```

## 📱 Gmail App Password Setup

1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to "App passwords"
4. Generate password for "Mail"
5. Use this password in your configuration

## ✅ What's Already Done

- ✅ Email service created (`src/lib/emailService.ts`)
- ✅ Contact form updated with email functionality
- ✅ Error handling and loading states added
- ✅ TypeScript interfaces defined
- ✅ Toast notifications for success/error

## 🚀 Quick Start

1. Install EmailJS: `npm install @emailjs/browser`
2. Set up EmailJS account and get credentials
3. Update `src/lib/emailService.ts` with your credentials
4. Test the contact form

Your contact form will now send emails directly to **nileshgirissism@gmail.com**!