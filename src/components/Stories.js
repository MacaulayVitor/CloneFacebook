import ImgCode from '../resources/perfil.jpg'
import styled from 'styled-components';

const Storie = styled.div`
display:flex;
margin: 1.3em 0;
`

const StoriesCard = styled.div`
  width: 18%;
  margin:0 1% 0 1%;
  padding-top: 25%;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`

const P = styled.p`
  color: white;
  font-size: .9em;
  padding: .8em;
`

export default function Stories(){
    return(
        <Storie>
        <StoriesCard style={{backgroundImage:`url(${ImgCode})`}}>
          <P>Macaulay Vitor Fernandes</P>
        </StoriesCard>
        <StoriesCard style={{backgroundImage:`url(${ImgCode})`}}>
          <P>Perfil 1</P>
        </StoriesCard>
        <StoriesCard style={{backgroundImage:`url(${ImgCode})`}}>
          <P>Perfil 2</P>
        </StoriesCard>
        <StoriesCard style={{backgroundImage:`url(${ImgCode})`}}>
          <P>Perfil 3</P>
        </StoriesCard>
        <StoriesCard style={{backgroundImage:`url(${ImgCode})`}}>
          <P>Perfil 4</P>
        </StoriesCard>
      </Storie>
    )
}