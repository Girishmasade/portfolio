import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends contact form details directly to Girish Masade via EmailJS
 * @param {Object} formData - The contact form fields
 * @param {string} formData.firstName - Sender's first name
 * @param {string} formData.lastName - Sender's last name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.phone - Sender's phone number
 * @param {string} formData.subject - Email subject
 * @param {string} formData.message - Main message content
 */
export const sendContactEmail = async (formData) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS Config Missing: Please verify VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env');
    throw new Error('Email service configuration is incomplete.');
  }

const templateParams = {
  from_name: `${formData.firstName} ${formData.lastName}`.trim(),
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.email,        // add this
  from_email: formData.email,
  reply_to: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  to_name: 'Girish Masade',
};

  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );

  return response;
};
