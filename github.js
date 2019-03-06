class GitHub {
  constructor(){
    this.client_id = config.githubId;
    this.client_secret = config.githubSecret;
    this.repo_count = 5;
    this.repo_sort = 'created: asc';
  }

  // Get the user
  async getUser(username) {

    const profileUrl = `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const profileResponse = await fetch(profileUrl);

    return await profileResponse.json();
  }

  // Get the users repos
  async getRepos(username) {

    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const repos = await fetch(reposUrl);

    return await repos.json();
  }
}