import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { FaRegTrashAlt } from "react-icons/fa";
import React from 'react'

function List({ Lista, setLista, numberTasks, setNumberTasks }) {


  const handleRemove = (id) => {

    // Filtro para remover Tarefa
    let newLista = []
    newLista = Lista.filter( (Lista) => Lista.number != id );
    setLista(newLista);

    // Adicionar nova lista ao localstorage
    localStorage.setItem('Tasks', JSON.stringify(newLista));

    // diminuir uma task
    setNumberTasks(numberTasks - 1)
  }


  const TaskList = Lista.map((Task, id) => (
    <AccordionItem textValue="Task for us" key={id} title={<p className='font-semibold'><span className='mr-2 text-base text-yellow-500'>{Task.number}</span>{Task.Title}</p>}>
      <p className='font-medium tracking-wide truncate'>
        {Task.Description}
      </p>
      <div className='w-full flex justify-end p-1 cursor-pointer'>
        <FaRegTrashAlt onClick={() => {
          handleRemove(Task.number);
        }} />
      </div>
    </AccordionItem>
  ));
  
  return (
    <Accordion className='mt-2' variant="splitted" selectionMode="multiple" isCompact>
      {TaskList}
    </Accordion>
  );
}

export default List;
