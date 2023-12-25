import { useState } from "react";
import useTask from "../Hooks/useTask";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaRegWindowClose } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ToDoList = () => {

    


    const [tasks, refetch] = useTask()

    const todoFilter = tasks.filter(toDoList =>toDoList.status === "todo")
    const ongoingFilter = tasks.filter(toDoList =>toDoList.status === "ongoing")
    const completedFilter = tasks.filter(toDoList =>toDoList.status === "completed")
   
    const onDragEnd = () => {
        console.log('hello there');


    //     if (!result.destination) return; // Dragged outside the droppable area
    
    //     const updatedTasks = [...tasks];
    //     const [movedTask] = updatedTasks.splice(result.source.index, 1);
    //     updatedTasks.splice(result.destination.index, 0, movedTask);
    
    //     // Update the state or perform any necessary actions
    //     // (e.g., call an API to persist the new order)
    
    //     // Assuming setTasks is the function to update tasks in your useTask hook
    //     // setTasks(updatedTasks);
    //   };
    

    }


    const deleteHandle =(id) =>{
      const proced = confirm('are you sure remove this one')
      if (proced) {
        fetch(`https://task-management-server-pearl-kappa.vercel.app/create-task/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          if (data.deletedCount > 0) {
            Swal.fire({
              icon: 'warning',
              title: 'Delete',
              text: 'Dlete has been sucessfully',
            })
            refetch()
          }
        })
      }

    }

    





    return (

        <DragDropContext onDragEnd={onDragEnd}> 
        <div className="grid grid-cols-3 gap-2">
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div ref={provided?.innerRef} {...provided?.droppableProps}>
              <h2 className="text-2xl font-bold text-center border-2">ToDo List</h2>
              <div>
                {todoFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                      
                       <li key={item?.id} className="my-3 text-xl list-none
                        bg-blue-800 py-4 px-1 capitalize text-white text-center font-bold pointer flex gap-1">
                          {item?.taskName}
                          <button onClick={() =>deleteHandle(item._id)}><FaRegWindowClose /></button>
                         <Link to={`update/${item._id}`}> <button><MdEdit /></button> </Link>
                        </li>
                        
                     
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div ref={provided?.innerRef} {...provided?.droppableProps}>
              <h2 className="text-2xl font-bold text-center border-2">Ongoing</h2>
              <div>
                {ongoingFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li key={item?.id} className="my-3 text-xl list-none
                        bg-blue-800 py-4 px-1 capitalize text-white text-center font-bold pointer flex gap-1">
                          {item?.taskName}
                          <button onClick={() =>deleteHandle(item._id)}><FaRegWindowClose /></button>
                          <button><MdEdit /></button>
                        </li>
                        
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="ROOT" type="group"  >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2 className="text-2xl font-bold text-center border-2">completed</h2>
              <div>
                {completedFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li key={item?.id} className="my-3 text-xl list-none
                        bg-blue-800 py-4 px-1 capitalize text-white text-center font-bold pointer flex gap-1">
                          {item?.taskName}
                          <button onClick={() =>deleteHandle(item._id)}><FaRegWindowClose /></button>
                          <button><MdEdit /></button> 
                        </li>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            </div>
          )}
        </Droppable>
        </div>
        </DragDropContext>
    );
};

export default ToDoList;