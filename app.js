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
        if(data.message === 'Not Found'){
          // SHow Alert
          ui.clearProfile();
          ui.showAlert('User not found.', 'alert alert-danger');
        } else {
          // SHow the profile
          ui.showProfile(data);

          gitHub.getRepos(username)
            .then(data => {
              if(data.message === 'Not Found'){
                //Show an alert

              } else{
                ui.showRepos(data);
              }
            })
            .catch(err => {
              console.log(err);
            })
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