import Button from "./Button";

const ButtonList = () => {
  const tags = [
    "All",
  "Frontend Basics",
  "Algorithms",
  "Machine Learning",
  "Job Prep",
  "Audio Talks",
  "Startup Life",
  "Confidence Boost",
  "Live Events",
  "History"
  ];

  return (
    <div className=" space-x-6 mt-4 flex justify-center ">
      {tags.map((tagName)=> <Button tag={tagName} key={tagName} />)}
    </div>
  );
};

export default ButtonList;
