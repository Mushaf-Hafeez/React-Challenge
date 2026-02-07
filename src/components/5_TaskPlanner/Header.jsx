// importing shadcn ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

// importing icons
import { ChevronDownIcon, Plus, Trash2 } from "lucide-react";

// importing context
import { useTask } from "@/context/TaskPlanner";

// importing form
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const Header = () => {
  const [openTask, setOpenTask] = useState(false);
  const { time, date, setDate } = useTask();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  // onSubmit function
  const onSubmit = (data) => {
    console.log(data);

    // setOpenTask(false);
  };

  return (
    <header className="flex items-center justify-between py-6 px-8 md:px-16 lg:px-24 bg-stone-800">
      {/* Logo */}
      <h2 className="text-2xl font-semibold cursor-pointer text-white">
        Planner
      </h2>

      <p>{name}</p>

      {/* items */}
      <nav className="flex items-center gap-2">
        <p className="text-lg font-medium text-white">{time}</p>

        {/* date picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="data-[empty=true]:text-muted-foreground w-[160px] justify-between text-left font-normal"
            >
              {date ? format(date, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              className={"text-black"}
            />
          </PopoverContent>
        </Popover>

        {/* new task */}
        <Dialog open={openTask} onOpenChange={setOpenTask}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTrigger asChild>
              <Button
                className={
                  "flex items-center gap-2 bg-white text-black font-normal cursor-pointer hover:text-black hover:bg-white"
                }
              >
                <Plus />
                Add new task
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new task</DialogTitle>
                <div className="space-y-2">
                  <Input
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is required.",
                      },
                      maxLength: {
                        value: 25,
                        message: "Cannot contains more than 25 characters",
                      },
                    })}
                    placeholder={"Enter task title"}
                    aria-invalid={errors.title}
                  />
                  <Textarea
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is required.",
                      },
                      maxLength: {
                        value: 200,
                        message: "Cannot contains more than 200 characters",
                      },
                    })}
                    placeholder={"Enter task description here..."}
                    className={"h-52"}
                    aria-invalid={errors.description}
                  />
                  <Controller
                    name="priority"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Field is required.",
                      },
                    }}
                    render={() => (
                      <Select aria-invalid={errors.priority}>
                        <SelectTrigger className="w-full max-w-48">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="highest">Highest</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="lowest">Lowest</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  <DialogClose>
                    <Button type="submit">Add</Button>
                  </DialogClose>
                </div>
              </DialogHeader>
            </DialogContent>
          </form>
        </Dialog>

        {/* delete task */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={
                "flex items-center gap-2 bg-white text-black cursor-pointer font-normal hover:text-black hover:bg-white"
              }
            >
              <Trash2 />
              Delete all tasks
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;
