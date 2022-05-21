// Link API GITHUB
const GITHUB_API = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


async function getUser(username){
   // Get data users from github
   const resp = await fetch(GITHUB_API + username)
   const respData = await resp.json();
   createUserCard(respData);

   getRepos(username);
}

async function getRepos(username){
   const resp = await fetch(GITHUB_API + username)
   const respData = await resp.json();
}

function createUserCard(user){
   const cardHTML = `
      <div class="card">
         <div>
            <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
         </div>
         <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
         
            <ul class="user-info">
               <li>
                  <strong>
                     Seguidores ${user.followers}
                  </strong>
               </li>
               <li>
                  <strong>
                     Seguindo ${user.following}
                  </strong>
               </li>
               <li>
                  <strong>
                    Repos ${user.public_repos}
                  </strong>
               </li>
            </ul>

            <ul class="repos" id="repos">
            
            </ul>

         </div>
      </div>
   `
   main.innerHTML = cardHTML;
}

form.addEventListener("submit", e => {
   e.preventDefault();

   const user = search.value;
   if(user) {
      getUser(user)
      search.value="";
   }
})