import React from "react";
import { useForm } from "react-hook-form";

import { useStateMachine } from "little-state-machine";
import updateAction from "Redux/updateAction";
import BackButton from "Components/BackButton";
import NextButton from "Components/NextButton";



const RegistrationFormStep3 = (props) => {
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
            <h5>step 3</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* gender */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="gender">Gender : </label>
                <input name="gender" type="gender"
                    defaultValue={props.gender}
                    {...register("gender", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.gender && <p>This field is required</p>}
                <br></br>

                {/* dob */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="dob">DOB : </label>
                <input name="dob" type="dob"
                    defaultValue={props.dob}
                    {...register("dob", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.dob && <p>This field is required</p>}
                <br></br>

                {/* fatherName */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="fatherName">Father's Name : </label>
                <input name="fatherName" type="fatherName"
                    defaultValue={props.fatherName}
                    {...register("fatherName", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.fatherName && <p>This field is required</p>}
                <br></br>


                {/* back button */}
                <BackButton path={"/RegistrationFormStep2"}></BackButton>

                {/* next button */}
                <NextButton path={"/ConfirmationPage"}></NextButton>




            </form>
        </div>
    );


};

export default RegistrationFormStep3;