export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '38e13b9a-4b71-42ce-b7cb-fa3fb67ff684', // Get from web3forms.com
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to: 'nileshgirissism@gmail.com'
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email send failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};