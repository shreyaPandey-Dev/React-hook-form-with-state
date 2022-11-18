import React from "react";
import { useForm } from "react-hook-form";

import { useStateMachine } from "little-state-machine";
import updateAction from "Redux/updateAction";
import NextButton from "Components/NextButton";



const RegistrationForm = (props) => {
    const { actions, state } = useStateMachine({ updateAction });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log("data on submit-", data);
        actions.updateAction(data);
        console.log("state on submit-", state);
    }; // your form submit function which will invoke after successful validation

    console.log("initial state -", state);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="email">Email : </label>
            <input name="email" type="email"
                defaultValue={props.emailid}
                {...register("emailid", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailid && <p>This field is required</p>}
            <br></br>

            {/* mobile */}
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="mobile">Mobile : </label>
            <input name="mobile" type="mobile"
                defaultValue={props.mobile}
                {...register("mobile", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.mobile && <p>This field is required</p>}
            <br></br>

            {/* password */}
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password : </label>
            <input name="password" type="password"
                defaultValue={props.password}
                {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <p>This field is required</p>}
            <br></br>


            {/* next button */}
            <NextButton path={"/RegistrationFormStep2"}></NextButton>




        </form>
    );


};

export default RegistrationForm;