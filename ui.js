class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-2">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary mb-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success mb-2">Followers: ${user.followers}</span>
            <span class="badge badge-info mb-2">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show an alert message.
  showAlert(message, classes) {
    // Clear any existing alerts
    this.clearAlert();
    // Create div and add classes
    const div = document.createElement('div');
    div.className = classes;
    // Add the text to the alert.
    div.appendChild(document.createTextNode(message));
    // The parent element
    const container = document.querySelector('.searchContainer');
    // Element to insert the alert before
    const searchInput = document.querySelector('.search');

    container.insertBefore(div, searchInput);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear the alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear the profile after input cleared
  clearProfile() {
    this.profile.innerHTML = '';
  }

  showRepos(repos) {
    let output = '';
    console.log(repos)

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary mb-2">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary mb-2">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success mb-2">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

}