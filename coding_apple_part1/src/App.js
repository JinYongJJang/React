import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  let blogName = "ReactBlog";
  let [title, setTitle] = useState(["ㄷ파이썬 독학", "ㄱ리액트 독학", "ㄴ뷰 독학"]);
  let [like, setLike] = useState([0,1,2])
  let [modal, setModal] = useState(false)
  let [modalData, setModalData] = useState('')
  let [input, setInput] = useState('')
  let [now, setNow] = useState([String(new Date()), String(new Date()), String(new Date())])

  return (
    <div className="App">

      {/* 상단 네비게이션바 */}
      <div className='black-nav'>
        <h4>{blogName}</h4>
      </div>

      {/* 글 목록 */}
      {
        title.map(function(data, index){
          return (
            <div className="list" key={index} onClick={()=>{setModal(true); setModalData(data)}}>
              <h4>
                {data}
                <span onClick={ (e)=>{ 
                  e.stopPropagation();
                  let copy = [...like]
                  copy[index] = copy[index] + 1
                  setLike(copy)
                }}> 👍</span> {like[index]}
              </h4>
              <p>{now[index]}</p>
              <button onClick={ (e)=>{
                e.stopPropagation();

                let copy = [...title]
                copy.splice(index, 1)
                setTitle(copy)

                let likeCopy = [...like]
                likeCopy.splice(index, 1)
                setLike(likeCopy)

                let nowCopy = [...now]
                nowCopy.splice(index, 1)
                setNow(nowCopy)
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* 정렬 버튼 */}
      <div>
        <button onClick={ ()=>{ 
          let copy = [...title].sort();
          setTitle(copy)
        } }> 정렬 </button>
      </div>

      {/* 글 추가 */}
      <input onChange={(e) => {
        setInput(e.target.value)
        console.log(input)
      }}></input>
      <button onClick={ (e) => {

        if(input === ''){
          return
        }

        let copy = [...title]
        copy.push(input)
        setTitle(copy)

        let likeCopy = [...like]
        likeCopy.push(0)
        setLike(likeCopy)

        let nowCopy = [...now]
        nowCopy.push(String(new Date()))
        setNow(nowCopy)
      } }>글 발행</button>

      {/* 모달 창 */}
      {
        modal === true ? <Modal title = {title} setTitle={setTitle} modalData={modalData}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.modalData}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}


class Modal2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : "jinyong",
      age : 29
    }
  }

  render(){
    return(
      <div>
        안녕 {this.state.name}
        <button onClick={ ()=>{ this.setState({name : "king jinyong"}) } }>이름 바꾸기</button>
        {this.props.modalData}
      </div>
    )
  }
}

export default App;
