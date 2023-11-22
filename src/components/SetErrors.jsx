import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SetErrors = () => {
    const {handleSubmit, register, setError, formState: {errors}}=useForm({
        defaultValues:{
            firstName: "",
            lastName: "",
        },
        criteriaMode: "all" // for multiple errors , set criteriaMode to all
    }
    );

    const onSubmit=(data)=>{
        console.log("data", data)
    }

    return (
    <section class="p-10 bg-slate-400">
        <form class="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("firstName")} placeholder='First Name'/>

            <p class="text-white">{errors.firstName?.message}</p>

            <button class="w-25 bg-blue-300 h7"
                type="button"
                onClick={()=>{
                    setError("firstName",{
                        type: "custom",
                        message: "something is wrong"
                    })
                }}
            >
                Single Error
            </button>

            <input {...register("lastName")} placeholder='Last Name'/>

            <p class="text-white">{errors.lastName?.types?.error1}</p>
            <p class="text-white">{errors.lastName?.types?.error2}</p>
            
            <button class="w-25 bg-blue-300 h7"
                type="button"
                onClick={()=>{
                    setError("lastName",{
                        types: {
                            error1: "Error message 1",
                            error2: "Error message 2",
                        }
                    })
                }}
            >
                Multiple Errors
            </button>

            <input class="w-14 bg-slate-50 h7" type="submit" value="Submit"/>
        </form>
    </section>
  );
}

export default SetErrors;
