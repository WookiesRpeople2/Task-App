import { useEffect } from "react";
import { useTasksContext } from "../../hooks/useTaskContext";
import { useTask } from "../../hooks/useTask";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import ModelTasks from "../../components/Workspaces/ModelTasks";

const WorkspaceView = () => {
  let { workspaceId } = useParams();
  const { user } = useAuthContext();
  const { tasks } = useTasksContext();
  const { tasksApi, isLoading, error } = useTask();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchTasks = async () => {
      await tasksApi("GET", null, "SET_TASKS", workspaceId, null);
    };
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const onSubmit = async (data) => {
    await tasksApi("POST", data, "CREATE_TASKS", workspaceId, null);
  };
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((x) => (
        <ModelTasks
          key={x._id}
          workspaceId={workspaceId}
          task_id={x._id}
          descreption={x.description}
          title={x.title}
        />
      ))}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Create a new task..."
          />
        </form>
      </div>
    </div>
  );
};

export default WorkspaceView;
