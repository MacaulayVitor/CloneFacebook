import './App.css';
import Header from './components/Header';
import Stories from './components/Stories'
import FeedForm from './components/FeedForm'
import FeedPost from './components/FeedPost'
import Js from './resources/js.png'
import React from './resources/react.png'


export default function App() {
  return (
    <div>
      <Header/>
      <Stories/>
      <FeedForm/>
      <FeedPost nome='Macaulay Vitor' horario='8h' conteudo='JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código JavaScript.' img={Js}/>
      <FeedPost nome='Macaulay Vitor' horario='6h' conteudo='O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.' img={React}/>
    </div>
  );
}
