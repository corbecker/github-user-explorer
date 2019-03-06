const gitHub = new GitHub;
const ui = new UI;

// Search User event handling
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
  // Get the username entered
  const username = e.target.value;

  if(username !== ''){
    gitHub.getUser(username)
      .then(data => {
        console.log(data)
        if(data.message === 'Not Found'){
          // SHow Alert
        } else {
          // SHow the profile
          ui.showProfile(data);
        }
      })
      .catch(err => {
        console.log(err);
      })
  } else {
    // Clear the profile
    ui.clearProfile();
  }
});