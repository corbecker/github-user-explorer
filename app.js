// Search User event handling
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  // Get the username entered
  const username = e.target.value;
  const gitHub = new GitHub;

  if(username !== ''){
    gitHub.getUser(username)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // SHow Alert
        } else {
          // SHow the profile
          console.log(data)
        }
      })
      .catch(err => {
        console.log(err);
      })
  } else {
    // Clear the profile
  }
});