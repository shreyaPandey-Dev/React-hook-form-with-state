import React from "react";
import { useForm } from "react-hook-form";

import { useStateMachine } from "little-state-machine";
import updateAction from "Redux/updateAction";
import BackButton from "Components/BackButton";



const ConfirmationPage = (props) => {
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
            <h5>ConfirmationPage</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* state */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="state">State : </label>
                <input name="state" type="state"
                    defaultValue={props.state}
                    {...register("state", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.state && <p>This field is required</p>}
                <br></br>

                {/* city */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="city">City : </label>
                <input name="city" type="city"
                    defaultValue={props.city}
                    {...register("city", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.city && <p>This field is required</p>}
                <br></br>

                {/* pin code */}
                {/* include validation with required or other standard HTML validation rules */}
                <label htmlFor="pincode">Pincode : </label>
                <input name="pincode" type="pincode"
                    defaultValue={props.pincode}
                    {...register("pincode", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.pincode && <p>This field is required</p>}
                <br></br>


                {/* next button */}
                <BackButton path={"/RegistrationFormStep3"}></BackButton>



                <input type="submit" />
            </form>
        </div>
    );


};

export default ConfirmationPage;