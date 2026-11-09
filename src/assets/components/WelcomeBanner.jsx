function WelcomeBanner() {
    const styles = {
       
            backgroundColor: '#f5f5f5',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }
    
    return (
        <div style={styles}>
            <h1>Welcome to Our Store</h1>
            <p>Discover amazing products at great prices!</p>
        </div>
        
    )
}

export default WelcomeBanner;