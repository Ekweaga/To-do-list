import React from 'react'
import {useState,useEffect} from 'react'
import { FaTrash} from "react-icons/fa"
import './todo.css'
import moon from './icon-moon.svg'
import sun from './icon-sun.svg'

const Todos = () => {
    const getlocalstorage = ()=>{
        let lists = localStorage.getItem('todos');
        if(lists){
     let  list = JSON.parse(localStorage.getItem('todos'))
      return list
               
            
        }
        else{
            return []
        }
    }
    const [todos, settodos] = useState(getlocalstorage());
  const [input, setinput] = useState([])
  const[totalitem, settotalitem] = useState(0);
  const [headerimg, setheaderimg] =useState(true)

  const toggle = ()=>{
      setheaderimg(!headerimg)
  }

 const handlechange = (e)=>{
    setinput(e.target.value)
 }
 const add = ()=>{
    let item = {
        add: input
    }
    let ok = [...todos]
    
    ok.push(item)
    settodos(ok)
     console.log(todos)
     settotalitem(totalitem + 1)
     setinput('')
 }
 const remove=(a)=> {
     let oks = todos.filter((t)=>t.add !== a.add)
     settodos(oks)
     settotalitem(totalitem - 1)
 }
 const search = (query)=>{
     let tnxs = todos.filter((item)=>{
            if(item.add.incudes(query)){
                return true;
            }
            settodos(tnxs)
     })
    
 }
 useEffect(()=>{
   localStorage.setItem('todos', JSON.stringify(todos));
 },[todos])
    return (
        <>
        <div className={headerimg ? 'cover': 'coverchange'}>
        <div>
        <div className={headerimg ? 'todoheader':'todoheaderimg'}>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><h1 style={{textAlign:'center',fontFamily:'poppins'}}> E-Todo App</h1>
              <img src={headerimg ? sun : moon} style={{marginLeft:'55px',width:'20px',height:'20px'}} onClick={toggle}/>
              </div> 
               <div  className='input'>
          <input type="text" placeholder='ADD A TO-DO'  onChange={handlechange} value={input} />
          <button  onClick={add}>ADD</button>
        </div>
        </div> 
        </div>
      
       
      
      
       
        <div className='todos'>
        { todos.length > 0 ? todos.map(
            (p)=>{
                const {add} = p
                return (
                    <div className='maintodos'>
                        {add} <FaTrash onClick={ ()=> remove(p)}/></div>
                )
            }
        ): <div  className={headerimg ? 'noevent' :' event'}>Add to your list</div>}
        </div>
        </div>
        </>
    )
}

export default Todos
