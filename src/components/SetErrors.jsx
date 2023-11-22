import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const SetErrors = () => {
    const {handleSubmit, register, setError, formState: {errors}}=useForm({
        defaultValues:{
            firstName: "",
        }
    }
    );

    const onSubmit=(data)=>{
        console.log("data", data)
    }

    return (
    <section class="p-10 bg-slate-400">
        <form class="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("firstName")} placeholder='First Name'/>

            <button class="w-20 bg-slate-50 h7"
                type="button"
                onClick={()=>{
                    setError("firstName",{
                        type: "custom",
                        message: "something is wrong"
                    })
                }}
            >
                setErrors
            </button>

            <p class="text-white">{errors.firstName?.message}</p>
            
            <input class="w-14 bg-slate-50 h7" type="submit" value="Submit"/>
        </form>
    </section>
  );
}

export default SetErrors;
