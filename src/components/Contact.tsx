import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Alert, Snackbar } from '@mui/material';

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const validate = (value: string) => !value || value.trim() === '';

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const newNameError = validate(name);
    const newEmailError = validate(email);
    const newMessageError = validate(message);

    setNameError(newNameError);
    setEmailError(newEmailError);
    setMessageError(newMessageError);

    if (newNameError || newEmailError || newMessageError) return;
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        'service_7oayogc',
        'template_csqnhs4',
        formRef.current,
        'GAIeFnLSGbIg_wvEE'
      )
      .then(
        () => {
          setSending(false);
          setName('');
          setEmail('');
          setMessage('');
          setSnackbarOpen(true);
        },
        (error: EmailJSResponseStatus) => {
          setSending(false);
          console.error('Email send failed:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id="contact" style={{ padding: '2rem' }}>
      <div className="items-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="contact_wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form ref={formRef} onSubmit={sendEmail} noValidate>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                marginBottom: 2
              }}
            >
              <TextField
                required
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'blue' },
                  '& .MuiFormLabel-root': { color: '#555' }
                }}
              />

              <TextField
                required
                name="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                fullWidth
                sx={{
                  '& .MuiInputBase-input': { color: 'blue' },
                  '& .MuiFormLabel-root': { color: '#555' }
                }}
              />
            </Box>

            <TextField
              required
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              fullWidth
              sx={{
                '& .MuiInputBase-input': { color: 'blue' },
                '& .MuiFormLabel-root': { color: '#555' },
                marginBottom: 2
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="success" sx={{ width: '100%' }} onClose={() => setSnackbarOpen(false)}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;
