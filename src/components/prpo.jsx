import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Privacy Policy</h1>
            <h2>May 6, 2025</h2>

            <h2>Information we collect</h2>
            <p>Currently, we do not directly collect any personally identifiable information from our users, such as names, email addresses, or scores within the games, as we do not have a backend system for user accounts or data storage.</p>

            <h2>Is this website safe</h2>
            <p>This website is completely safe as I am planning to present this website as my project to my college so I made sure that no unsafe or harmful material is used in the website.</p>

            <h2>If we don't track your data how are we showing you relevant ads?</h2>
            <p>This Website uses third-party advertising services, such as Google AdSense, to display advertisements. These advertising partners may collect and use certain information about your visits to this Website and other websites to provide advertisements about goods and services of interest to you.</p>
            
            <p>The information that may be collected by these third-party advertising partners includes:</p>
            <ul>
                <li><strong>Cookies:</strong> Small text files stored on your browser.</li>
                <li><strong>Device Information:</strong> Information about the device you are using to access the Website, such as device type, operating system, and browser type.</li>
                <li><strong>IP Address:</strong> Your internet protocol address.</li>
                <li><strong>Browsing Activity:</strong> Information about your interaction with this Website and other websites you visit.</li>
                <li><strong>Location Data:</strong> General location information may be inferred from your IP address.</li>
            </ul>
            
            <div style={{ marginTop: '20px' }}>
                <p>For more information about how our advertising partners collect and use your data, please refer to their respective privacy policies.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
