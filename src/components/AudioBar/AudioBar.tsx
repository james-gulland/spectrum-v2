import ReactPlayer from "react-player";

export const AudioBar = () => {
  return (
    <div className="border border-amber-200">
      <p>Audio Bar Component</p>
      <ReactPlayer src="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
    </div>
  );
};
