import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SetErrors = () => {
    const {handleSubmit, register, reset, setError, clearErrors, formState: {errors}}=useForm({
        defaultValues:{
            firstName: "",
            lastName: "",
        },
        criteriaMode: "all" // for multiple errors , set criteriaMode to all
    }
    );

    const onSubmit=(e)=>{

        console.log("data", e)
        reset({
            firstName: "",
            lastName:""
        },
        {
            keepErrors: true,
            keepDirty: true,
        })
    }

    return (
    <section class="p-10 bg-slate-400">
        <form class="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

            <input class="bg-slate-300 h-10 p-2" {...register("firstName", {required: "This is required"})} placeholder='First Name'/>

            <p class="text-red-600">{errors.firstName?.message}</p>

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

            <button class="w-25 bg-green-300 h7"
                type="button"
                onClick={()=>{
                    clearErrors("firstName")
                }}
            >
                Clear One Error
            </button>


            <input class="bg-slate-300 h-10 p-2" {...register("lastName", {required: "This is required"})} placeholder='Last Name'/>
            <p class="text-red-600">{errors.lastName?.message}</p>
            <p class="text-red-600">{errors.lastName?.types?.error1}</p>
            <p class="text-red-600">{errors.lastName?.types?.error2}</p>
            
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

            <button class="w-25 bg-green-400 h7"
                type="button"
                onClick={()=>{
                    clearErrors(["firstName","lastName"])
                }}
            >
                Clear Multiple Errors
            </button>

            <input class="bg-slate-200 h-10 p-2 mt-3 hover:bg-slate-600 active:bg-slate-700" type="submit" value="Submit"/>
        </form>
    </section>
  );
}

export default SetErrors;
