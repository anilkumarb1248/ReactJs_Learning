// import { useForm, useFieldArray, type FieldErrors } from "react-hook-form";

// import { DevTool } from "@hookform/devtools";
// import { useEffect } from "react";

// let renderCount = 0;

// type YouTubeFormValues = {
//   username: string;
//   email: string;
//   channel: string;
//   social: {
//     twitter: string;
//     facebook: string;
//   };
//   phoneNumbers: string[];
//   phNumbers: {
//     number: string;
//   }[];
//   age: number;
//   dob: Date;
// };

// function YouTubeForm() {
//   const form = useForm<YouTubeFormValues>({
//     defaultValues: {
//       username: "Anil Kumar",
//       email: "anil@gmail.com",
//       channel: "Fun React",
//       social: {
//         twitter: "twitter",
//         facebook: "facebook",
//       },
//       phoneNumbers: ["12345", "67890"],
//       phNumbers: [{ number: "987654321" }],
//       // age: 0, // if we assign default value, th required validation is not happenning.
//       dob: new Date(),
//     },
//     // defaultValues: async () => {
//     //   const response = await fetch(
//     //     "https://jsonplaceholder.typicode.com/users/1"
//     //   );
//     //   const data = await response.json();
//     //   //console.log(data);
//     //   return {
//     //     username: data.username,
//     //     email: data.email,
//     //     channel: "",
//     //   };
//     // },
//   });

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState,
//     watch,
//     getValues,
//     setValue,
//   } = form;

//   const { errors, touchedFields, dirtyFields, isDirty } = formState;

//   // console.log({ touchedFields, dirtyFields, isDirty });

//   // const watchUserName = watch("username");
//   // const watchUserName = watch(["username", "email"]);
//   // const watchForm = watch();

//   // useEffect(() => {
//   //   const watchSubscription = watch((value) => {
//   //     console.log(value);
//   //   });
//   //   return () => {
//   //     watchSubscription.unsubscribe();
//   //   };
//   // }, [watch]);

//   const handleGetValues = () => {
//     // const values = getValues(); // All Form values
//     // const values = getValues("username"); // Single form value
//     // const values = getValues("social.facebook"); // Nested Value
//     const values = getValues(["username", "channel"]); // Multiple Values
//     console.log(values);
//   };

//   const handleSetValue = () => {
//     setValue("username", "", {
//       shouldValidate: true,
//       shouldDirty: true,
//       shouldTouch: true,
//     });
//   };

//   const { fields, append, remove } = useFieldArray({
//     name: "phNumbers",
//     control,
//   });

//   renderCount++;

//   const onYoutubeFormSubmit = (data: YouTubeFormValues) => {
//     console.log("YouTube form submitted", data);
//   };

//   const onError = (errors: FieldErrors<YouTubeFormValues>) => {
//     console.log("Form Errors", errors);
//   };

//   return (
//     <div>
//       <h2> YouTube Registration Form ({renderCount / 2})</h2>
//       {/* <h2> YouTube Registration Form</h2> */}
//       {/* <p>Watching Value: {watchUserName} </p> */}
//       {/* <p>Watching Value: {JSON.stringify(watchForm)} </p> */}
//       <form onSubmit={handleSubmit(onYoutubeFormSubmit, onError)} noValidate>
//         <div className="form-control">
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             disabled
//             {...register("username", {
//               required: { value: true, message: "Username is required" },
//             })}
//           />
//           <p className="error">{errors.username?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="email">Email: </label>
//           <input
//             type="email"
//             id="email"
//             {...register("email", {
//               required: {
//                 value: true,
//                 message: "Email is required",
//               },
//               pattern: {
//                 value:
//                   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: "Invalid email format",
//               },
//               // validate: (fieldValue) => {
//               //   // Return true if it's NOT the reserved email, or return the error message if it IS
//               //   return (
//               //     fieldValue !== "admin@example.com" ||
//               //     "Enter a different email address"
//               //   );
//               // },
//               validate: {
//                 notAdmin: (fieldValue) => {
//                   return (
//                     fieldValue !== "admin@example.com" ||
//                     "Enter a different email address"
//                   );
//                 },
//                 notBlackListed: (fieldValue) => {
//                   return (
//                     !fieldValue.endsWith("baddomain.com") ||
//                     "This domain is not supported"
//                   );
//                 },
//               },
//             })}
//           />
//           <p className="error">{errors.email?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="channel">Channel: </label>
//           <input
//             type="text"
//             id="channel"
//             {...register("channel", {
//               required: { value: true, message: "Channel is required" },
//             })}
//           />
//           <p className="error">{errors.channel?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="twitter">Twitter: </label>
//           <input
//             type="text"
//             id="twitter"
//             {...register("social.twitter", {
//               disabled: watch("channel") == "",
//               required: { value: true, message: "Twitter account is required" },
//             })}
//           />
//           <p className="error">{errors.social?.twitter?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebook">Facebook: </label>
//           <input
//             type="text"
//             id="facebook"
//             {...register("social.facebook", {
//               required: {
//                 value: true,
//                 message: "Facebook account is required",
//               },
//             })}
//           />
//           <p className="error">{errors.social?.facebook?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="primaryPhone">Primary Phone: </label>
//           <input
//             type="text"
//             id="primaryPhone"
//             {...register("phoneNumbers.0", {
//               required: { value: true, message: "Primary email is required" },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[0]?.message}</p>
//         </div>
//         <div className="form-control">
//           <label htmlFor="secondaryPhone">Secondary Phone: </label>
//           <input
//             type="text"
//             id="secondaryPhone"
//             {...register("phoneNumbers.1", {
//               required: { value: true, message: "Secondary email is required" },
//             })}
//           />
//           <p className="error">{errors.phoneNumbers?.[1]?.message}</p>
//         </div>

//         <div>
//           <label> List of Phone Numbers </label>
//           <div>
//             {fields.map((field, index) => {
//               return (
//                 <div className="form-control" key={field.id}>
//                   <input
//                     type="text"
//                     {...register(`phNumbers.${index}.number` as const)}
//                   />
//                   {index > 0 && (
//                     <button
//                       type="button"
//                       onClick={() => {
//                         remove(index);
//                       }}
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>
//               );
//             })}
//             <button type="button" onClick={() => append({ number: "" })}>
//               Add Phone Number
//             </button>
//           </div>
//         </div>

//         <div className="form-control">
//           <label htmlFor="age">Age: </label>
//           <input
//             type="number"
//             id="age"
//             {...register("age", {
//               valueAsNumber: true,
//               required: { value: true, message: "Age is required" },
//             })}
//           />
//           <p className="error">{errors.age?.message}</p>
//         </div>

//         <div className="form-control">
//           <label htmlFor="dob">DOB: </label>
//           <input
//             type="date"
//             id="dob"
//             {...register("dob", {
//               valueAsDate: true,
//               required: { value: true, message: "DOB is required" },
//             })}
//           />
//           <p className="error">{errors.dob?.message}</p>
//         </div>

//         <button disabled={!isDirty}> Submit</button>
//         <button type="button" onClick={handleGetValues}>
//           Get Values
//         </button>

//         <button type="button" onClick={handleSetValue}>
//           Set Value
//         </button>
//       </form>
//       <DevTool control={control} />
//     </div>
//   );
// }

// export default YouTubeForm;
