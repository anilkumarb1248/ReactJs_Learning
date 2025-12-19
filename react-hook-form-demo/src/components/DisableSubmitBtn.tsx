import { useEffect } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

function DisableSubmitBtn() {
  const form = useForm<FormValues>({ mode: "onBlur" });

  //   const form = useForm<FormValues>({
  //     defaultValues: {
  //       username: "Anil",
  //       email: "",
  //       channel: "",
  //     },
  //   });
  const { register, control, handleSubmit, formState, reset, trigger } = form;

  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;

  //   const {
  //     errors,
  //     touchedFields,
  //     dirtyFields,
  //     isDirty,
  //     isValid,
  //     isSubmitting,
  //     isSubmitted,
  //     isSubmitSuccessful,
  //     submitCount,
  //   } = formState;

  //   console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });
  console.log({ touchedFields, dirtyFields, isDirty, isValid });

  const onFormSubmit = (data: FormValues) => {
    console.log("YouTube form submitted", data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form Errors", errors);
  };

  //   useEffect(() => {
  //     reset();
  //   }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <h2> Youtube Form </h2>
      <form onSubmit={handleSubmit(onFormSubmit, onError)} noValidate>
        <div className="form-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@example.com" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
                emailAvailable: async (fieldValue) => {
                  const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
                  );
                  const data = await response.json();
                  return data.length == 0 || "Email already exist";
                },
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel: </label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        {/* <button type="button" onClick={() => trigger()}> */}
        <button type="button" onClick={() => trigger(["username", "channel"])}>
          Trigger Validation
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default DisableSubmitBtn;

// {
//   /* <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button> */
// }
// {
//   /* <button disabled={!isDirty || !isValid}>Submit</button> */
// }
