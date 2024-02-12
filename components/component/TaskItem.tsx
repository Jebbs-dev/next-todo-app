import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import TaskOptions from "./TaskOptions";



interface TaskItemProps {
  data: Record<string, any>;
  toggleCheckbox: (taskId: string) => void;
  isEditable: boolean;
  // setUpdateTitle: React.Dispatch<React.SetStateAction<string>>
  deleteTask: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  data,
  toggleCheckbox,
  isEditable,
  deleteTask
}) => {

  return (
    <React.Fragment>
      <AnimatePresence>
        <div className="relative" id={`id`}>
          <motion.div
            initial={{ opacity: 0, backgroundColor: "transparent" }}
            animate={data.status}
            variants={{
              checked: {
                opacity: [0, 1, 0],
                backgroundColor: "#4b5563",
              },
              // unchecked: {
              //   opacity: [0, 1, 0],
              //   backgroundColor: "#4b5563",
              // },
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeIn",
            }}
            className="absolute inset-0 rounded-lg"
            id="some"
          ></motion.div>
          <motion.div className="relative flex flex-row p-2 space-x-5 justify-between rounded-lg hover:rounded-lg">
            <label
              htmlFor="myCheckbox"
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="myCheckbox"
                className={`w-5 h-5 rounded-lg hover:scale-110 focus:bg-transparent`}
                hidden
              />

              <motion.div
                animate={data.status}
                variants={{
                  checked: {
                    scale: [1, 1.15, 1],
                  },
                  unchecked: {
                    scale: [1, 1.15, 1],
                  },
                }}
                transition={{
                  duration: 0.5,
                  type: "tween",
                  ease: "easeIn",
                }}
                className="w-5 h-5 border border-gray-300 rounded-md flex items-center justify-center focus-within:border-blue-500"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleCheckbox(data.id);
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                >
                  <motion.path
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={data.status}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      type: "tween",
                      ease: "easeOut",
                    }}
                    variants={{
                      checked: {
                        opacity: 1,
                        pathLength: 1,
                      },
                      unchecked: {
                        opacity: 0,
                        pathLength: 0,
                      },
                    }}
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></motion.path>
                </svg>
              </motion.div>
              <motion.span
                initial={{ opacity: 1 }}
                animate={data.status}
                variants={{
                  checked: {
                    opacity: 0.5,
                    textDecoration: "line-through",
                  },
                  unchecked: {
                    opacity: 1,
                    textDecoration: "none",
                  },
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`text-white ml-5 text-lg`}
              >
                <div
                  contentEditable={isEditable}
                  // onInput={(event)=>{
                  //   setUpdateTitle((event.target as HTMLElement).innerText)
                  // }}
                  className="border-none focus:border-0 focus:outline-0"
                >
                  {data?.title}
                </div>
              </motion.span>
            </label>
            <TaskOptions deleteTask={deleteTask} id={data.id} />
          </motion.div>
        </div>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default TaskItem;
