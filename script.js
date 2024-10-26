const app = $('#app');

let currentUser = null;

// Function to handle login

function handleLogin(userRole) {

  currentUser = userRole;

  renderDashboard();

}

// Function to render dashboard based on user role

function renderDashboard() {

  app.empty(); // Clear the app

  if (!currentUser) {

    app.append(`

      <form id="loginForm">

        <h2>Login</h2>

        <input type="text" id="username" placeholder="Username" required />

        <input type="password" id="password" placeholder="Password" required />

        <button type="submit">Login</button>

      </form>

    `);

    $('#loginForm').on('submit', function (e) {

      e.preventDefault();

      const username = $('#username').val();

      const password = $('#password').val();

      

      if (username === 'parent' && password === 'parentpass') {

        handleLogin('parent');

      } else if (username === 'student' && password === 'studentpass') {

        handleLogin('student');

      } else if (username === 'teacher' && password === 'teacherpass') {

        handleLogin('teacher');

      } else {

        alert('Invalid username or password');

      }

    });

  } else {

    switch (currentUser) {

      case 'parent':

        app.append(`

          <h2>Parent Dashboard</h2>

          <button id="logout">Logout</button>

          <h3>Fees Info</h3>

          <p>Paid Fees: 500,000 UGX</p>

          <p>Balance: 200,000 UGX</p>

          <a href="https://your-github-url.com/student-performance" target="_blank">Student Performance</a>

        `);

        break;

      case 'student':

        app.append(`

          <h2>Student Dashboard</h2>

          <button id="logout">Logout</button>

          <h3>Notes</h3>

          <button id="toggleNotes">Toggle Notes</button>

          <div id="notes" style="display: none;">

            <h3>A Level</h3>

            <ul>

              <li><a href="https://your-url.com/a-level-biology" target="_blank">Biology</a></li>

              <li><a href="https://your-url.com/a-level-chemistry" target="_blank">Chemistry</a></li>

              <li><a href="https://your-url.com/a-level-math" target="_blank">Math</a></li>

              <li><a href="https://your-url.com/a-level-physics" target="_blank">Physics</a></li>

            </ul>

            <h3>O Level</h3>

            <ul>

              <li><a href="https://your-url.com/o-level-biology" target="_blank">Biology</a></li>

              <li><a href="https://your-url.com/o-level-chemistry" target="_blank">Chemistry</a></li>

              <li><a href="https://your-url.com/o-level-math" target="_blank">Math</a></li>

              <li><a href="https://your-url.com/o-level-physics" target="_blank">Physics</a></li>

            </ul>

          </div>

          <a href="https://whereby.com/your-room" target="_blank">Video Chat</a>

        `);

        $('#toggleNotes').on('click', function() {

          $('#notes').toggle();

        });

        break;

      case 'teacher':

        app.append(`

          <h2>Teacher Dashboard</h2>

          <button id="logout">Logout</button>

          <h3>Upload Marks</h3>

          <a href="https://your-url.com/upload-marks" target="_blank">Upload Marks</a>

          <h3>Upload Notes</h3>

          <a href="https://your-url.com/upload-notes" target="_blank">Upload Notes</a>

          <h3>Upload Assignments</h3>

          <a href="https://your-url.com/upload-assignments" target="_blank">Upload Assignments</a>

        `);

        break;

    }

    $('#logout').on('click', function () {

      currentUser = null;

      renderDashboard();

    });

  }

}

// Initialize the app

renderDashboard();