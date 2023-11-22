import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const {register, handleSubmit, watch, resetField, formState:{errors}}=useForm({
      defaultValues: {
        firstName:"",
        lastName: ""
      }
    });

    console.log(watch())

    const onSubmit=(data)=>{
        console.log("data", data);
    }

  return (
    <section class="p-10 bg-slate-400">
      <form class="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

      <input class="bg-slate-300 h-10 p-2" {...register("firstName", {required:"This is required"})} placeholder='First name'/> 
      <p>{errors?.firstName?.message}</p>

      <input class="bg-slate-300 h-10 p-2" {...register("lastName", {required: "This is required", minLength: {value:4, message:"min-length is 4"}})} placeholder='Last name'/>
      <p>{errors?.lastName?.message}</p>

      <select class="bg-slate-300 h-10 p-2" {...register("category", {required:"This is required"})}>
        <option value="">Select category ...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      <p>{errors?.category?.message}</p>

      <button class="w-25 bg-green-400 h7"
              type="button"
              onClick={()=>{
                  resetField("firstName");
              }}
          >
              ResetFeild firstName
      </button>

      <button class="w-25 bg-green-400 h7"
              type="button"
              onClick={()=>{
                  resetField("lastName");
              }}
          >
              ResetFeild lastName
      </button>

      <input class="bg-slate-200 h-10 p-2 mt-3 hover:bg-slate-600 active:bg-slate-700" type="submit" value="Submit"/>

      </form>

    </section>
    
  );
}

export default RegisterForm;
