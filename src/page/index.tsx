import { Link } from 'react-router-dom';
import { Container } from '../Components/styled'

const Home = () =>{
  return(
  
    <Container>
      <main>
        <div>
        <p>NOSSO TRABALHO</p>
        <h1>Projetos para Mobile e Web</h1>
        <p>Se você tem uma grande ideia inovadora e que vai transformar vidas, coloque em prática agora com a gente.</p>

        <Link to='Projects'>Conheça nossos projetos.</Link>  
        </div>
        <div>
        <ul>
        <li><span>1</span>Experiência do usuário</li>
        <li><span>2</span>Pagamentos no aplicativo</li>
        <li><span>3</span>Suporte 24hrs todos os dias</li>
        </ul>
      </div>
      </main>
    </Container>
    
  )
}
export default Home;