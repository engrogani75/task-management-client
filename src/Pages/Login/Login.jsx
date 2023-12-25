'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = "/dashboard";
    console.log(from);

    const onSubmit = data => {
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })

        .catch(error => {
            if (error) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'your email or password did not',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        
          })
    }



    return (
       <>
       
        <div>

            <h2 className='text-center font-bold capitalize lg:mt-10 md:mt-6 mt-3 text-3xl'>Please Log In</h2>
            
<div className='flex justify-center items-center'>
   <figure className='w-1/2'>
   <img src="https://cdn.pixabay.com/animation/2022/12/05/15/28/15-28-43-29_512.gif" className="w-96" alt="" />
   </figure>

   <div className = "vertical"></div>
   <div>

  <div className='w-1/2  '>


  <form className="flex lg:w-96 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
<div>
<div className="mb-2 block">
  <Label htmlFor="email1" value="Your email" />
</div>
<TextInput id="email1" type="email" placeholder="email" name='email' {...register("email", { required: true })} />
</div>
<div>
<div className="mb-2 block">
  <Label htmlFor="password1" value="Your password" />
</div>
<TextInput id="password1" type="password" name='pass'  {...register("password", {
            required: true,
        })} />
         {errors.password?.type === 'required' && <p className="text-red-600">Password did not match</p>}
</div>
<div className="flex items-center gap-2">
<Checkbox id="remember" />
<Label htmlFor="remember">Remember me</Label>
</div>
<Button type="submit">Login</Button>
</form>
<h2>new  User! Pls  <Link to='/registation'>Registation</Link> </h2>
  </div>
   </div>
</div>
        </div>
      


</>
    );
};

export default Login;