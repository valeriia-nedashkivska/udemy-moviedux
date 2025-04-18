import React from 'react';
import '../styles.css';

export default function Footer() {
  const currentYaar = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">© {currentYaar} Moviedux, All rights reserved.</p>
    </footer>
  );
}
