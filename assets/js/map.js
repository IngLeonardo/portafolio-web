document.addEventListener("DOMContentLoaded",(event)=>{
  
  setTimeout(()=>{
    document.querySelector("#load-iframe-map").innerHTML = 
    `
    <iframe class="contact__iframe" frameborder="0" scrolling="none" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.347377955928!2d-73.63823032448163!3d4.151920046169395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2dc1dd2cec31%3A0x3a9bab8e9b7bb055!2sCentro%20Villavicencio!5e0!3m2!1sen!2sco!4v1698367114660!5m2!1sen!2sco" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

  },900);
  
});