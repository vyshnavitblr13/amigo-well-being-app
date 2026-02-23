const http = require('http');

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Amigo Wellbeing - Login</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #0a0e27 0%, #16213e 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
    }

    /* Blinking stars background */
    .stars {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      animation: blink 3s infinite;
    }

    @keyframes blink {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 1;
      }
    }

    /* Login container */
    .login-container {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 40px;
      width: 100%;
      max-width: 400px;
      z-index: 10;
    }

    .login-container h1 {
      text-align: center;
      color: white;
      margin-bottom: 10px;
      font-size: 28px;
    }

    .login-container p {
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 30px;
      font-size: 14px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      color: white;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: bold;
    }

    .form-group input {
      width: 100%;
      padding: 12px 15px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .form-group input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    .form-group input:focus {
      outline: none;
      border-color: #4fc3f7;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 10px rgba(79, 195, 247, 0.3);
    }

    .remember-me {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      font-size: 13px;
    }

    .remember-me input {
      margin-right: 8px;
      cursor: pointer;
    }

    .remember-me label {
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      margin: 0;
    }

    .login-btn {
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #4fc3f7, #29b6f6);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 15px;
    }

    .login-btn:hover {
      background: linear-gradient(135deg, #29b6f6, #039be5);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(79, 195, 247, 0.4);
    }

    .signup-link {
      text-align: center;
      color: rgba(255, 255, 255, 0.7);
      font-size: 13px;
    }

    .signup-link a {
      color: #4fc3f7;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .signup-link a:hover {
      color: #81d4fa;
    }
  </style>
</head>
<body>
  <!-- Blinking stars background -->
  <div class="stars" id="starContainer"></div>

  <!-- Login form -->
  <div class="login-container">
    <h1>Amigo</h1>
    <p>Wellbeing for Everyone</p>

    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
      </div>

      <div class="remember-me">
        <input type="checkbox" id="remember" name="remember">
        <label for="remember">Remember me</label>
      </div>

      <button type="submit" class="login-btn">Login</button>
    </form>

    <div class="signup-link">
      Don't have an account? <a href="#">Sign up here</a>
    </div>
  </div>

  <script>
    // Generate random stars
    function generateStars() {
      const starContainer = document.getElementById('starContainer');
      const starCount = 100;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starContainer.appendChild(star);
      }
    }

    // Generate stars on page load
    window.addEventListener('load', generateStars);
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlTemplate);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});