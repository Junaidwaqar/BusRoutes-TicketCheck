// 1. Registration Form Validation
function validateRegistrationForm() {
  const form = document.getElementById('registrationForm');
  const fields = ['fullname', 'phone', 'email', 'email2', 'cnic', 'username', 'dob', 'password', 'password2'];
  for (let field of fields) {
      if (!form[field].value.trim()) {
          alert('Please fill all fields.');
          return false;
      }
  }
  if (form['email'].value !== form['email2'].value) {
      alert('Emails do not match.');
      return false;
  }
  if (form['password'].value !== form['password2'].value) {
      alert('Passwords do not match.');
      return false;
  }
  return true;
}

// 2. Login Form Validation
function validateLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form['email'].value.trim() && !form['username'].value.trim()) {
      alert('Enter email or username.');
      return false;
  }
  if (!form['password'].value.trim()) {
      alert('Enter your password.');
      return false;
  }
  return true;
}

// 3. Search Bus Routes
function searchRoutes() {
  const input = document.getElementById('routeSearch').value.toLowerCase();
  const rows = document.querySelectorAll('#routesTable tbody tr');
  rows.forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(input) ? '' : 'none';
  });
}

// 4. Check Ticket Availability
function checkTicketAvailability(busNumber) {
  const rows = document.querySelectorAll('#ticketTable tbody tr');
  rows.forEach(row => {
      if (!busNumber) {
          row.style.display = '';
      } else {
          row.style.display = row.cells[0].innerText === busNumber ? '' : 'none';
      }
  });
}

// 5. Show/Hide Contact Info by City
function showContact(city) {
  document.querySelectorAll('.contact-info').forEach(div => div.style.display = 'none');
  const target = document.getElementById(city + '-contact');
  if (target) target.style.display = 'block';
}

// 6. Toggle Menu (Mobile Responsive)
function toggleMenu() {
  const menu = document.getElementById('mainMenu');
  menu.classList.toggle('open');
}

// 7. Display Current Date on Homepage
function displayCurrentDate() {
  const el = document.getElementById('currentDate');
  if (el) el.innerText = new Date().toLocaleDateString();
}

// 8. Scroll to Top Button
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// 9. Limit Input to Numbers (e.g., CNIC, Phone)
function allowOnlyNumbers(event) {
  if (event.key < '0' || event.key > '9') event.preventDefault();
}

// 10. Show/Hide Password
function togglePassword(id) {
  const input = document.getElementById(id);
  if (input) input.type = input.type === 'password' ? 'text' : 'password';
}
