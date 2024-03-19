import '../assets/css/Privacy.css'; 


const Privacy = () => {
 
  const yellowTextStyle = { color: 'blue' };
  const backgroundStylos = {
    backgroundImage: "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2Vib2F0fGVufDB8fDB8fHww')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '140vh',
    width: '100vw',
    margin: 0,
  };
  return (
    <div style={backgroundStylos}>
    <div className="privacy-policy-container">
    
      <div className="privacy-policy-content">
      <center><h1>Privacy Policy</h1></center>

        <p style={yellowTextStyle}>
          Welcome to Dreamy House Boat Voyages Privacy Policy. This Privacy Policy
          describes how your personal information is collected, used, and shared
          when you visit our website.
        </p>

        <center><h2>Information We Collect</h2></center>
        <p style={yellowTextStyle}>
          We collect information that you provide directly to us, such as your
          name, email address, and phone number when you contact us or fill out
          a form on our website.
        </p>
        <center><h2>How We Use Your Information</h2></center>
        <p style={yellowTextStyle}>
          We use the information we collect to provide and improve our services,
          respond to your inquiries, and communicate with you about our
          services.
        </p>

        <center><h2>Sharing Your Information</h2></center>
        <p style={yellowTextStyle}>
          We do not sell, trade, or otherwise transfer your personal
          information to outside parties. This does not include trusted third
          parties who assist us in operating our website or servicing you, as
          long as those parties agree to keep this information confidential.
        </p>

        <center><h2>Security</h2></center>
        <p style={yellowTextStyle}>
          We implement security measures to maintain the safety of your personal
          information when you submit, or access your personal information.
        </p>

        <center><h2>Changes to This Privacy Policy</h2></center>
        <p style={yellowTextStyle}>
          We may update our Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <center><h2>Contact Us</h2></center>
        <p style={yellowTextStyle}>
          If you have any questions about this Privacy Policy, please contact
          us @houseboatvoyage.com.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Privacy;
