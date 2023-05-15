document.addEventListener('DOMContentLoaded', () => {
  datos();
});

function datos() {
 
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
      
        if(typeof data==="object"){
          const user = data.results[0];
          const userInfo = document.getElementById('user-info');
          userInfo.innerHTML = 
          `
          <div class="container" >
                      <img id="img_container" src="${user.picture.large}" alt="Director's Photo" height= "335px"
                      width= "335px">

                      <p><span style="color: #3f3f3f; font-size: 23px;">"En <span style="color: #3f3f3f; font-size: 23px; font-weight: bold;">Óptica NANNI</span>, estamos orgullosos de ser un negocio local con una historia de ${user.dob.age} años. Dirigida por <span style="color: #3f3f3f; font-size: 23px; font-weight: bold;"> ${user.name.first} ${user.name.last}</span>, nuestra misión es proporcionar a nuestros clientes el mejor servicio personalizado en el cuidado de su visión.¡Ven a conocernos y descubre por qué somos la opción preferida en la comunidad!".</span></p>
          </div>
          `;
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

} 
