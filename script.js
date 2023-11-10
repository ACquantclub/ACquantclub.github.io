function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    if (navbar.style.width === '250px') {
      navbar.style.width = '0';
      overlay.style.width = '0';
      overlay.style.display = 'none';
    } else {
      navbar.style.width = '250px';
      overlay.style.width = '100%';
      overlay.style.display = 'block';
    }
  }
  
  function closeNavbar() {
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    navbar.style.width = '0';
    overlay.style.width = '0';
    overlay.style.display = 'none';
  }
  