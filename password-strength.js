const passwordInput = document.getElementById('password');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const togglePasswordBtn = document.getElementById('togglePassword');

const lengthReq = document.getElementById('lengthReq');
const uppercaseReq = document.getElementById('uppercaseReq');
const numberReq = document.getElementById('numberReq');
const symbolReq = document.getElementById('symbolReq');

function checkStrength(password) {
  let score = 0;

  // Check requirements
  const meetsLength = password.length >= 8;
  const meetsUppercase = /[A-Z]/.test(password);
  const meetsNumber = /[0-9]/.test(password);
  const meetsSymbol = /[^A-Za-z0-9]/.test(password);

  // Update requirement indicators
  lengthReq.className = meetsLength ? 'valid' : 'invalid';
  uppercaseReq.className = meetsUppercase ? 'valid' : 'invalid';
  numberReq.className = meetsNumber ? 'valid' : 'invalid';
  symbolReq.className = meetsSymbol ? 'valid' : 'invalid';

  // Scoring
  if (meetsLength) score++;
  if (meetsUppercase) score++;
  if (meetsNumber) score++;
  if (meetsSymbol) score++;

  // Visual feedback
  let strength = '';
  let color = '';
  let width = '0%';

  switch (score) {
    case 0:
    case 1:
      strength = 'Very Weak';
      color = '#ff4b47';
      width = '25%';
      break;
    case 2:
      strength = 'Weak';
      color = '#ffa500';
      width = '50%';
      break;
    case 3:
      strength = 'Medium';
      color = '#ffd600';
      width = '75%';
      break;
    case 4:
      strength = 'Strong';
      color = '#388e3c';
      width = '100%';
      break;
  }

  strengthFill.style.width = width;
  strengthFill.style.background = color;
  strengthText.textContent = password.length === 0 ? '' : strength;
}

passwordInput.addEventListener('input', (e) => {
  checkStrength(e.target.value);
});

// Toggle password visibility
togglePasswordBtn.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  if (type === 'password') {
    passwordInput.setAttribute('type', 'text');
    togglePasswordBtn.textContent = 'Hide';
  } else {
    passwordInput.setAttribute('type', 'password');
    togglePasswordBtn.textContent = 'Show';
  }
});


