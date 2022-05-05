import logo from './logo.svg';
import './App.css';
import { useState} from "react";

function App() {
  const todo =[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    }];
   const todocomplete =[];
   const todouncomplete=[];
   todo.map((d)=>{
    (d.completed)?todocomplete.push(d):todouncomplete.push(d)
    })
    const render = ((a)=>(
      
    a.map((d,index)=>(
      <div key={index} className="todolist">
        <p>ID :{d.id}</p>
        <p>Title:{d.title}</p>
        <p>Completed:{d.completed?`Done`:`Not finish`}</p>
      </div>
    ))
    ));
    const [showall, setShowall] = useState("show");
    const [showcpl, setShowcpl] = useState("hidden");
    const [showucpl, setShowucpl] = useState("hidden");
    const rdall=()=>{
      setShowall("show");
      setShowcpl("hidden");
      setShowucpl("hidden");
    }
    const rdcpl=()=>{
      setShowall("hidden");
      setShowcpl("show");
      setShowucpl("hidden");
    }
    const rducpl=()=>{
      setShowall("hidden");
      setShowcpl("hidden");
      setShowucpl("show");
    } 
    
    //bài 2
    const [inputValue, setInputValue] = useState("");
  const [passValue1, setpassValue1] = useState("");
  const [passValue2, setpassValue2] = useState("");
  const clickChange = e =>{
    setInputValue(e.target.value);
  };
  const clickP1 = e =>{
    setpassValue1(e.target.value);
  }
  const clickP2 = e =>{
    setpassValue2(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    if((inputValue=="")||(passValue1=="")||(passValue2==""))
    {alert("Yêu cầu nhập đầy đủ")}else{
    if(passValue1==passValue2){
      alert(`Welcome ${inputValue} `)
    }
    else{alert("Nhập lại pass");
    setpassValue1("");
    setpassValue2("");
  }}
  }

  return (
    <div className="App">
   {/* bài1    */}
   <h1>Bài 1</h1>
  <button onClick={rdall}>All</button>
  <button onClick={rdcpl}>Completed</button>
  <button onClick={rducpl}>Un Completed</button>
  <div className={showall} >
        {render(todo)}
  </div>
  <div className={showcpl} >
        {render(todocomplete)}
  </div>
  <div className={showucpl} >
        {render(todouncomplete)}
  </div>
  {/* bài2 */}
  <h1>Bài 2</h1>
  <form onSubmit={handleSubmit}>
      <label>UserName</label><input type="text" value={inputValue} onChange={clickChange}/>
      <label>PassWord</label><input type="password" value={passValue1} onChange={clickP1}/>
      <label>Confirm PassWord</label><input type="password" value={passValue2} onChange={clickP2}/> 
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
