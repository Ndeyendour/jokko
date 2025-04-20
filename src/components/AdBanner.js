// components/AdBanner.js

import React from 'react';

const AdBanner = () => {
  return (
    <div style={styles.banner}>
      <p style={styles.text}>Profitez de nos offres exclusives ! Découvrez nos services à des prix réduits. <a href="/offres">Cliquez ici pour plus d'infos.</a></p>
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: '#ffcc00',  // Couleur de fond
    color: '#333',               // Couleur du texte
    textAlign: 'center',         // Centrer le texte
    padding: '10px 0',           // Espacement interne
    fontSize: '16px',            // Taille du texte
    position: 'relative',        // Positionner par rapport à la page
    zIndex: 1000,                // Pour s'assurer que la bannière est au-dessus du contenu
  },
  text: {
    margin: 0,
    fontWeight: 'bold',          // Mettre le texte en gras
  }
};

export default AdBanner;
