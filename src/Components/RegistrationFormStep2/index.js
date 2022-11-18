import React from "react";
import { useForm } from "react-hook-form";

import { useStateMachine } from "little-state-machine";
import updateAction from "Redux/updateAction";
import NextButton from "Components/NextButton";
import BackButton from "Components/BackButton";


const RegistrationFormStep2 = (props) => {
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
        <div>
            <h5>step 2</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* first name */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="firstName">first name : </label>
                <input name="firstName" type="firstName"
                    defaultValue={props.firstName}
                    {...register("firstName", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.firstName && <p>This field is required</p>}
                <br></br>

                {/* last name */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="lastName">last name: </label>
                <input name="lastName" type="lastName"
                    defaultValue={props.lastName}
                    {...register("lastName", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.lastName && <p>This field is required</p>}
                <br></br>

                {/* Address */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="address">Address : </label>
                <input name="address" type="address"
                    defaultValue={props.address}
                    {...register("address", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.address && <p>This field is required</p>}
                <br></br>


                {/* back button */}
                <BackButton path={"/"}></BackButton>

                {/* next button */}
                <NextButton path={"/RegistrationFormStep3"}></NextButton>




            </form>
        </div>

    );


};

export default RegistrationFormStep2;