import Perfil from '../resources/perfil-m.jpeg'
import Planets from '../resources/planets.jpg'
import styled from 'styled-components';

const FeedP = styled.div`
  margin: 1.2em 0;
  background-color: white;
`

const FeedPro = styled.div`
  padding: 1em;
`

const ImgPro = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
`
const H3 = styled.h3`
  display: inline-block;
  vertical-align: middle;
  padding: .5em .5em;
`

const Span = styled.span`
  font-weight: normal;
  font-size: .9em;
  text-align: center;
  margin: .2em;
`

const ImgPlanets = styled.img`
  margin-right: .1em;
  height: 1.1em;
  width: 1.1em;
  vertical-align: middle;
`

const P = styled.p`
  margin: 0 .6em .6em 1em ;
`

const ImgCont = styled.img`
  width: 100%;
  display: block;
`

export default function FeedPost(props){
    return(
        <div>
        <FeedP>
          <FeedPro>
            <ImgPro src={Perfil} />
            <H3>{props.nome}<br/><Span>{props.horario}</Span><ImgPlanets src={Planets}/></H3>
          </FeedPro>

          <div>
            <P>{props.conteudo}</P>
            <ImgCont src={props.img} />
          </div>
        </FeedP>
      </div>
    )
}