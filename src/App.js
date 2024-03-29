import logo from './logo.svg';
import './App.css';
import {Accordion, AccordionItem, Button, Divider, Input, Textarea} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import List from './components/List';

function App() {

  const [numberTasks, setNumberTasks] = useState(0);
  const [numberChoosed, setnumberChoosed] = useState(0);

  const [Title, setTitle] = useState('');
  const [Descrip, setDescrip] = useState('');
  const [Lista, setLista] = useState([]);

  const handleClick = () => {
    
    // É SEMPRE MAIS UM AO NÚMERO DE TASKS PORQUE PRECISAMOS QUE A ULTIMA SEJA INCLUIDA!
    let numbid = [];
    numbid = Lista.map((list) => list.number);
    let RandNum = Math.floor(Math.random() * numbid.length + 1);
    setnumberChoosed(numbid[RandNum - 1]);

  }


  const handleForm = () => {

    let Task = {
      number: (numberTasks + 1),
      Title: Title,
      Description: Descrip
    }

    let storageList = JSON.parse(localStorage.getItem('Tasks')) || [];
    storageList.push(Task);
    localStorage.setItem('Tasks', JSON.stringify(storageList));
    setLista(storageList);
    setNumberTasks(storageList.length);

    setTitle('');
    setDescrip('');

  }

  useEffect(() => {
    // Fetch tasks from local storage
    const storedTasks = localStorage.getItem('Tasks');

    // If there are stored tasks, parse them; otherwise, initialize an empty array
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];

    // If parsedTasks is not an array or if it's empty, initialize it as an empty array
    if (!Array.isArray(parsedTasks) || parsedTasks.length === 0) {
      localStorage.setItem('Tasks', JSON.stringify([])); // Initialize as an empty array in local storage
      setLista([]); // Set the list as an empty array
      setNumberTasks(0); // Set the number of tasks as 0
    } else {
      // Set the list and the number of tasks
      setLista(parsedTasks);
      setNumberTasks(parsedTasks.length);
    }
}, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className='flex flex-col gap-4 my-8 items-center'>
        <h1 className='text-purple-500 font-extrabold text-3xl tracking-wide'>Task Management Randomizer</h1>
        <p className='font-medium tracking-tight'>Please insert the Tasks and then click the randomize Button to randomize it!</p>
      </div>

      <div className='flex justify-around w-full h-[40vh]'>
        <div className='ml-12 w-[60%] overflow-y-auto'>
            <List Lista={Lista} setLista={setLista} numberTasks={numberTasks} setNumberTasks={setNumberTasks} />
        </div>

      <Divider orientation='vertical'/>

        <div className='flex flex-col mr-12'>
          <h2 className='self-center font-bold text-2xl tracking-tighter'>Create a Task Please</h2>
          <div className='flex flex-col my-8 items-center gap-2'>
            <Input value={Title} onChange={(event) => {setTitle(event.target.value)}}  label="Title"   textValue="Enter title for the task" type="text" radius='m'>
              
            </Input>

            <Textarea value={Descrip} onChange={(event) => { setDescrip(event.target.value)}}  label="Description"  textValue="Enter description for the task" type="text" radius='m'>
              
            </Textarea>

            <Button onClick={handleForm} className='mt-1'>
              Add Task!
            </Button>

          </div>
        </div>


      </div>

      <Divider/>

      <div className='flex flex-col gap-8 w-full items-center'>
            <Button onClick={handleClick}>
              Randomize
            </Button>

            <h1>
              {
                numberChoosed == 0 ? <p className='font-semibold'>Carregue no Button Randomize</p> : <h1 className='font-semibold text-8xl mt-8'>{numberChoosed}</h1>
              }
            </h1>
      </div>
    </div>
  );
}

export default App;
