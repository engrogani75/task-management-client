import { useState } from "react";
import useTask from "../Hooks/useTask";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



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

    return (

        <DragDropContext onDragEnd={onDragEnd}> 
        <div className="grid grid-cols-3">
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div ref={provided?.innerRef} {...provided?.droppableProps}>
              <h2>ToDo List</h2>
              <div>
                {todoFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li key={item?.id} className="my-6 text-xl list-none font-bold">
                          {item?.taskName}
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
              <h2>Ongoing</h2>
              <div>
                {ongoingFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li key={item?.id} className="my-6 text-xl list-none font-bold">
                          {item?.taskName}
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
              <h2>completed</h2>
              <div>
                {completedFilter.map((item, index) => (
                  <Draggable key={item?.id} draggableId={item?.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <li key={item?.id} className="my-6 text-xl list-none font-bold">
                          {item?.taskName}
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