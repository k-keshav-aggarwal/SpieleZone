const DonateButton = () => {
    return (
        <a
            href="https://ko-fi.com/shadowveilstudioz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '16px',
                background: 'linear-gradient(to right, #ec4899, #ef4444)',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'fixed',
                bottom: '80px',
                right: '20px',
                zIndex: '1000'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
        >
            <span style={{ fontSize: '16px' }}>❤️</span>
            Donate
        </a>
    );
};

export default DonateButton;