import { motion } from 'framer-motion';
import { ListGroup } from 'flowbite-react';

const Audience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <motion.div
      className='my-5'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <h1 className='text-center font-bold text-2xl text-blue-800 mb-5'>Our Audience</h1>
      <motion.div className='flex justify-center' variants={listItemVariants}>
        <ListGroup className='capitalize text-2xl flex gap-6'> 
          <motion.li variants={listItemVariants} className='bg-blue-800 text-white px-2 py-3 border-2 rounded-2xl'>developers</motion.li>
          <motion.li variants={listItemVariants} className='bg-blue-800 text-white px-2 py-3 border-2 rounded-2xl'>corporate professionals</motion.li>
          <motion.li variants={listItemVariants} className='bg-blue-800 text-white px-2 py-3 border-2 rounded-2xl'>bankers</motion.li>
          <motion.li variants={listItemVariants} className='bg-blue-800 text-white px-2 py-3 border-2 rounded-2xl'>engineers</motion.li>
        </ListGroup>
      </motion.div>
    </motion.div>
  );
};

export default Audience;
