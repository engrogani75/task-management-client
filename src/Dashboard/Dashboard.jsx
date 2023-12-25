import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Dashboard = () => {
   const {user} = useAuth()
    return (

        <div>
        <h1 className='text-3xl text-center'>Welcome To Deshborad</h1>
       <div className='flex flex-col'>


            
<aside id="default-sidebar" className="md:fixed  mt-10 top-0 left-0 z-40 w-64 h-screen 
transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
<div className="h-full px-3 py-4 overflow-y-auto bg-blue-200 font-bold dark:bg-gray-800">
  <ul className="space-y-2 font-bold">






  <li>
        <NavLink to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
       
          <img src={user?.photoURL} alt="" className="w-20 rounded-full h-20"/>
        </NavLink>
     </li>


<li>
        <NavLink to='/' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
       
           <span className="ms-3">Home</span>
        </NavLink>
     </li>
     
           <li>
        <NavLink to='new-task' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
           <span className="ms-3">Create new Task</span>
        </NavLink>
     </li>

     <li>
        <NavLink to='pre-task' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
           <span className="ms-3">Previous task</span>
        </NavLink>
     </li>

     <li>
        <NavLink to='todo-list' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      
           <span className="ms-3">Todo list</span>
        </NavLink>
     </li>
        
        
     

     




  </ul>
</div>
</aside>

<div className="p-4 sm:ml-64">
<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
 


<Outlet></Outlet>

 
  
</div>
</div>

        </div>
    </div>
    );
};

export default Dashboard;