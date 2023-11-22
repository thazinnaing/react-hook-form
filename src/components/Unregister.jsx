import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Unregister = () => {
    const {register, watch, handleSubmit, unregister, formState:{errors}}=useForm({
        defaultValues: {
            firstName:"",
            checkbox: true
        }
    })

    const checkbox=watch("checkbox");
    console.log("checkbox", checkbox)

    useEffect(()=>{
        if(!checkbox){
            unregister("firstName",{keepError:true});
        }
    },[checkbox, unregister])

    console.log("errors",errors)

    const onSubmit=(data)=>{
        console.log("data", data)
    }

  return (
    <section class="p-10 bg-slate-400">
        <form class="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

            { checkbox && <input class="bg-slate-300 h-10 p-2" {...register("firstName", {required: "This is required"})} placeholder='First Name'/>}
            <p>{errors?.firstName?.message}</p>

            <input class="h-5 w-5" type="checkbox" {...register("checkbox")} />
            <input class="bg-slate-200 h-10 p-2 mt-3 hover:bg-slate-600 active:bg-slate-700" type="submit" value="Submit"/>
        </form>
    </section>
    
  );
}

export default Unregister;
