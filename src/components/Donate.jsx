const DonateButton = () => {
    return (
        <a
            href="https://coff.ee/shadowveilstudioz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                background: '#ffd43b',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '14px',
                border: '2px dashed #404040',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '45px',
                width: '45px',
                height: '45px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                cursor: 'pointer',
                textDecoration: 'none',
                position: 'fixed',
                bottom: '80px',
                right: '20px',
                zIndex: 1000
            }}
        >
            <span style={{fontSize: '18px', marginRight: '4px'}} role="img" aria-label="heart">❤️</span>
            Donate
        </a>
    );
};

export default DonateButton;