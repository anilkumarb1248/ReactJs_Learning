import { useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type YouTubeFormValues = {
  username: string;
  email: string;
  channel: string;
};

function YouTubeForm() {
  const form = useForm<YouTubeFormValues>();
  const { register, control, handleSubmit } = form;

  renderCount++;

  const onYoutubeFormSubmit = (data: YouTubeFormValues) => {
    console.log("YouTube form submitted", data);
  };

  return (
    <div>
      <h2> YouTube Registration Form ({renderCount / 2})</h2>
      <form onSubmit={handleSubmit(onYoutubeFormSubmit)}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel: </label>
        <input type="text" id="channel" {...register("channel")} />

        <button> Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YouTubeForm;
