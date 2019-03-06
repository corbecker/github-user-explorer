class GitHub {
  constructor(){
    this.client_id = config.githubId;
    this.client_secret = config.githubSecret;
  }

  // Get the user
  async getUser(username) {

    const profileUrl = `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const profileResponse = await fetch(profileUrl);

    return await profileResponse.json();
  }
}