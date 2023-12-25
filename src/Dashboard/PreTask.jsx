import useTask from "../Hooks/useTask";


const PreTask = () => {
    const [tasks]  = useTask()
    console.log(tasks);

    return (
        <div>
            This is previoues task
        </div>
    );
};

export default PreTask;