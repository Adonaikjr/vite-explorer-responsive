import styled from 'styled-components'

export const Container = styled.div`


*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

main{
  max-width: 21rem;
  margin: 0 auto;
}


ul{/** -->Remover<--bolinhas list-style:none;*/
  list-style: none; 
  margin-top:4.5rem;

}
  a:link, a:visited, a:active {
	text-decoration: none;
  color:#090039;
	}
  a:hover {
    text-decoration: underline;
	  color: #090039;
;
	font-size:120%;
	}

  h1{
font-family: Epilogue;
font-size: 2.5rem;
font-weight: 800;
line-height: 3rem;
letter-spacing: 0rem;
text-align: left;
margin-bottom:0.90rem;
color: #090039;
  }
/**FIST-CHILD = PRIMEIRA TAG */
main p:first-child {
font-family: Epilogue;
font-size: 1rem;
font-weight: 400;
line-height: 2rem;
letter-spacing: 0rem;
text-align: left;
color:#7158EF;
text-transform: uppercase;
margin-bottom: 1rem;
}

h1 + p {
  color:rgba(10, 0, 57, 0.64);
  margin-bottom:2rem;
  line-height: 2rem;  
}


span{

font-family: Epilogue;
font-size: 4.5rem;
font-weight: 800 ;
letter-spacing: -0.12rem;
text-align: left;
 color:#090039;
 margin-right: 2rem;
}

ul li{
  width:16rem ;
font-family: Epilogue;
font-size: 1.5rem;
font-weight: 700;
line-height: 2rem;
margin-bottom: 3rem;
display:flex;
align-items: center;
}

ul li span {
  font-weight: 800;
  font-size: 4.5rem;
  line-height:5rem;
  
}

/**midia queries */

@media (min-width: 700px){



  main{
    max-width: 1020px;
    gap:8rem;
    display: flex;
    flex-wrap: wrap;
    
  }
  main > div{
    max-width: 484px;

  }

}

display: flex;
align-items: center;
flex-wrap: wrap;
`