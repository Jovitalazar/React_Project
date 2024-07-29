import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh', 
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto', 
};

export default function PrivacyModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Privacy Policy</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Privacy Policy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Effective Date: 2026<br/>
            Last Updated: 2024<br/>
            1. Introduction<br/>
            Welcome to Elysain.We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [www.yourwebsite.com] or use our services.<br/>
            2. Information We Collect<br/>
            Personal Information: We may collect personal information such as your name, email address, phone number, and payment information when you create an account, make a purchase, or contact us.
            Usage Data: We collect information about your interactions with our website and services, including your IP address, browser type, pages viewed, and time spent on our site.
            Cookies and Tracking Technologies: We use cookies and similar tracking technologies to enhance your experience on our site and analyze usage patterns. You can control cookies through your browser settings.<br/>
            3. How We Use Your Information<br/>
            We use your information for various purposes, including:
            To provide, maintain, and improve our services
            To process transactions and manage your account
            To communicate with you, including sending updates, promotional materials, and customer support
            To analyze and understand usage trends and preferences
            To ensure the security and integrity of our services<br/>
            4. How We Share Your Information<br/>
            We may share your information with:
            Service Providers: Third-party vendors who perform services on our behalf, such as payment processing, data analysis, and email delivery.
            Business Transfers: In connection with a merger, acquisition, or sale of all or a portion of our business.
            Legal Requirements: To comply with legal obligations or protect our rights, privacy, safety, or property.<br/>
            5. Your Rights and Choices<br/>
            You have the following rights regarding your personal information:
            Access and Update: You can access and update your personal information through your account settings or by contacting us.
            Opt-Out: You may opt-out of receiving promotional emails by following the instructions in those emails or by contacting us.
            Delete: You may request the deletion of your personal information, subject to certain legal exceptions.<br/>
            6. Data Security<br/>
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.<br/>
            7. Children's Privacy<br/>
            Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.<br/>
            8. Changes to This Privacy Policy<br/>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.<br/>
            9. Contact Us<br/>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:<br/>
            Elysian<br/>
            Coimbatore<br/>
            elysian@gmail.com<br/>
            1800-123-456<br/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
