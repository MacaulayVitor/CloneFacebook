import {MdVideoCameraBack} from "react-icons/md";
import {IoMdPhotos} from "react-icons/io";
import {BsEmojiLaughing} from "react-icons/bs";
import Perfil from '../resources/perfil-m.jpeg'
import styled from 'styled-components';

const Feed = styled.div`
  background-color: white;
  padding: .6em;
`

const FeedF = styled.div`
  padding: .6em;
  display: flex;
  border-bottom: 1px solid #ccc;
`

const Img = styled.img`
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
`

const Input = styled.input`
  margin-left: 2%;
  width: calc(98% - 2.5em);
  height: 3.1em;
  background-color: rgb(240, 240, 240);
  border-radius: 1.3em;
  border: 0;
  padding-left: 1.3em;
  &:focus{
    outline: 0;
    }
`

const FeedIcons = styled.div`
  padding: 1.3em 2.5em;
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const Span = styled.span`
  font-weight: bold;
  color: gray;
  margin: 0 .3em;
`

const Camera = styled(MdVideoCameraBack)`
  color: #f02b49;
`

const Galery = styled(IoMdPhotos)`
  color: #45bd62;
`

const Emoji = styled(BsEmojiLaughing)`
  color: yellow;
`

export default function FeedForm(){
    return(
        <Feed>
        <FeedF>
          <Img src={Perfil} />
          <Input type="text" placeholder='No que você está pensando?'/>
        </FeedF>
        <FeedIcons>
          <div>
            <Camera/>
            <Span>Video ao Vivo</Span>
          </div>
          <div>
            <Galery/>
            <Span>Foto/Video</Span>
          </div>
          <div>
            <Emoji/>
            <Span>Sentimento/Atividade</Span>
          </div>
        </FeedIcons>
      </Feed>
    )
}