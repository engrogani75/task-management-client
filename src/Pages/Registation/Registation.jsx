'use client';

import { Button, Checkbox, FileInput, Label, TextInput } from 'flowbite-react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const VITE_Image_Hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const Registation = () => {

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_Image_Hosting_key}`;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, user} = useAuth()

    const navigate = useNavigate();

    const onSubmit = async(data) =>{

        const imgData = new FormData();

        // -----imag send to ImageDB-----------
        imgData.append("image", data.image[0]);
        const response = await axios.post(image_hosting_api, imgData);
        const photoUrl = response.data.data.url;


        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            updateUserProfile(data.name, photoUrl)
                .then(() => {
                    reset();
                    navigate('/');
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'your info has been successfully.',
                      showConfirmButton: false,
                      timer: 1500
                  });
    
    
                })
                .catch(error => {
                    if(error){
                        Swal.fire({
                          position: 'top-end',
                          icon: 'warning',
                          title: 'your email in exist',
                          showConfirmButton: false,
                          timer: 1500
                      });
        
                      }
                })
        })

    }

    return (
      <div>
        <h2 className="text-center font-bold capitalize lg:mt-10 md:mt-6 mt-3 text-3xl">
          Please Log In
        </h2>

        <div className="flex justify-center items-center">
          <figure className="w-1/2">
            <img
              src="https://cdn.pixabay.com/animation/2022/12/05/15/28/15-28-43-29_512.gif"
              className="w-96"
              alt=""
            />
          </figure>

          <div className="vertical"></div>
          <div>
            <div className="w-1/2  ">
              <form
                className="flex lg:w-96 flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Name Field */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Enter your Full Name" />
                  </div>

                  <TextInput
                    id="name"
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                  />
                </div>

                {/* photo upload url */}

                <div id="fileUpload" className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload Photo" />
                  </div>
                  <FileInput
                    id="file"
                    helperText="A profile picture is useful to confirm your are logged into your account"
                    {...register("image", { required: true })}
                  />
                </div>

                {/* email Field */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Password field */}

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>

                <Button type="submit">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registation;