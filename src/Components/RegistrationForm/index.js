import React from "react";
import { useForm } from "react-hook-form";

import { StateMachineProvider, createStore, useStateMachine } from "little-state-machine";
import updateAction from "Redux/updateAction";



const RegistrationForm = (props) => {
    const { actions } = useStateMachine({ updateAction });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log("data on submit-", data);
        actions.updateAction(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("emailid")); // you can watch individual input by pass the name of the input

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="email">Email : </label>
            <input name="email" type="email"
                defaultValue={props.emailid}
                {...register("emailid", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailid && <p>This field is required</p>}

            <input type="submit" />
        </form>
    );


};

export default RegistrationForm;