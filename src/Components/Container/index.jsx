
import '../Container/container.css'

function Container(){

return(
    <section className='container'>
    <div className='apresentacao'>
  <p>
      Bem - Vindo <br/>
    <span>Unidos Somos Mais Forte</span> <br/>
 
  </p>
  <button className='btn btn-red'>
    Saiba mais sobre mim
  </button>


  
</div>
<figure>
  <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
</figure>
</section>
)


}

export default Container