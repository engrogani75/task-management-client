
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const useTask = () => {

    const axiosSecure = useAxiosSecure()

    const {refetch, data: tasks=[]} = useQuery({
       queryKey: ['tasks'],
       queryFn: async() =>{
        const res =await axiosSecure.get('/create-task')
        return res.data
       }

    })

    return [tasks, refetch]
  
};

export default useTask;