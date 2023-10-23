import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import { useTask } from "../../hooks/useTask";

const ModelTasks = ({ workspaceId, task_id, descreption, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { tasksApi, isLoading, error } = useTask();

  const onModelClose = () => {
    setIsOpen(false);
  };

  const onModelOpen = () => {
    setIsOpen(true);
  };

  const onDelete = async () => {
    await tasksApi("DELETE", null, "DELETE_TASKS", workspaceId, task_id);
    onModelClose();
  };

  const onSubmit = async (data) => {
    await tasksApi("PATCH", data, "UPDATE_TASKS", workspaceId, task_id);
    onModelClose();
  };

  return (
    <>
      <div onClick={onModelOpen}>
        <div className="text-sm mt-2">
          <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer">
            {title}
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={Fragment}
      >
        <Dialog className="relative z-50" open={isOpen} onClose={onModelClose}>
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-neutral-400">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Dialog.Title>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder={title}
                />
              </Dialog.Title>
              <textarea
                name="textarea"
                rows="5"
                cols="40"
                className="rounded-md px-2"
                {...register("description")}
              />
              <button>Add</button>
              <button onClick={onDelete}>Delete</button>
            </form>
            <button onClick={onModelClose}>close</button>
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModelTasks;
