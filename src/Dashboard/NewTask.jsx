'use client';

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { Datepicker } from 'flowbite-react';





const NewTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosSecure = useAxiosSecure()

    const {user} = useAuth()

    const onSubmit = data =>{
        console.log(data);

        const taskInfo = {
            taskName: data?.taskName,
            position: data?.position,
            description: data?.description,
            deadlines: data?.deadlines,
            priority: data?.priority,
            status: data?.status,
            name: user?.displayName,
            email: user?.email,
        }

        axiosSecure.post('/create-task', taskInfo)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){

              reset();
            
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'your info has been successfully.',
                showConfirmButton: false,
                timer: 1500
            });
          
            }

          })

          .catch(error => {
            if(error){
              Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'your info not save',
                showConfirmButton: false,
                timer: 1500
            });

            }
           
          })
   
    }

   


  return (

    <div className='flex justify-center item-center'>
       

        <form className="flex lg:w-96 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-2xl font-bold text-blue-800 capitalize my-10'>Please create your Task</h1>
    <div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="taskName" value="Title" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Task Name"
          name="taskName"
          {...register("taskName", { required: true })}
        />
      </div>
    </div>

    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="description" />
      </div>
      <Textarea id="comment" placeholder="Description" name='description' {...register("description", { required: true })} rows={4} />
    </div>

    <div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Designation" value="Pls give your position" />
        </div>
        <TextInput
          id="position"
          type="text"
          placeholder="Developer"
          name="position"
          {...register("position", { required: true })}
        />
      </div>
    </div>



    <div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="deadlines" value="Deadlines" />
        </div>
        <TextInput
          id="deadlines"
          type="date"
          placeholder="Deadlines"
          name="deadlines"
          {...register("deadlines", { required: true })}
        />
      </div>
    </div>

    


    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="Priority" value="Priority" />
      </div>
      <Select id="priority" name='priority' {...register("priority", { required: true })}>
        <option>Low</option>
        <option>Moderate</option>
        <option>High</option>
      </Select>
    </div>

    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="status" value="Select Your Task" />
      </div>
      <Select id="status" name='status' {...register("status", { required: true })}>
        <option>todo</option>
        <option>ongoing</option>
        <option>completed</option>
      </Select>
    </div>
    <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default NewTask;
