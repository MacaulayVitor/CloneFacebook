import {FaFacebook, FaSearch, FaAlignJustify, FaFacebookMessenger} from "react-icons/fa"
import {AiFillCaretDown, AiFillBell} from "react-icons/ai";
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 10px 0;
  display: flex;
`

const HeaderLeft = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
`

const HeaderRight = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
`

const IconFace = styled(FaFacebook)`
  color: #4287f5;
  font-size: 2.5em;
  margin: 0 10px;
`

const Search = styled.div`
  background-color: rgb(230, 230, 230);
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  text-align: center;
  line-height: 2.5em;
`

const IconSearch = styled(FaSearch)`
  color: gray;
  font-size: .9em;
`

const Menu = styled.div`
  cursor: pointer;
  margin-left: 1em;
  position: relative;
  padding: .5em .7em;
`

const IconMenu = styled(FaAlignJustify)`
  color: gray;
  font-size: 1.6em;
`

const Plus = styled.div`
  width: 2.5em;
  height: 2.5em;
  display: inline-block;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  text-align: center;
  line-height: 2.5em;
  margin: .3em;
  font-weight: bolder;
  cursor: pointer;
`

const Messenger = styled.div`
  width: 2.5em;
  height: 2.5em;
  display: inline-block;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  text-align: center;
  line-height: 2.7em;
  margin: .3em;
  cursor: pointer;
`

const Not = styled.div`
  width: 2.5em;
  height: 2.5em;
  display: inline-block;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  text-align: center;
  line-height: 2.7em;
  margin: .3em;
  cursor: pointer;
`

const Set = styled.div`
  width: 2.5em;
  height: 2.5em;
  display: inline-block;
  border-radius: 50%;
  background-color: rgb(230, 230, 230);
  text-align: center;
  line-height: 2.9em;
  margin: .3em;
  cursor: pointer;
`

export default function Header(){
    return(
        <Container>
        <HeaderLeft>
          <div>
            <IconFace/>
          </div>
          <Search>
            <IconSearch/>
          </Search>
          <Menu>
            <IconMenu/>
          </Menu>
        </HeaderLeft>
        <HeaderRight>
          <Plus>
            +
          </Plus>
          <Messenger>
            <FaFacebookMessenger/>
          </Messenger>
          <Not>
            <AiFillBell/>
          </Not>
          <Set>
            <AiFillCaretDown/>
          </Set>
        </HeaderRight>
      </Container>
    )
}