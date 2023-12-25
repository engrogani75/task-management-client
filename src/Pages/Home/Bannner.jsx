import { Button } from 'flowbite-react';

import '../Home/style.css'
import { Link } from 'react-router-dom';
const Bannner = () => {
    return (
        <div className="bg-[url('https://cdn.pixabay.com/photo/2017/10/11/11/43/multitasking-2840792_1280.jpg')] 
        h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center ">

         
           <Link to='/login' className='text-3xl'> <Button outline gradientDuoTone="purpleToBlue" size="xl">
            Lets Explore
          </Button>
          </Link>

    
   
        </div>
    );
};

export default Bannner;