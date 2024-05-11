const Title = ({ foodTitle, author }) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-2 pb-5">
      <h1 className="text-4xl text-center capitalize">{foodTitle}</h1>
      <h1 className="text-xl">{author}</h1>
    </div>
  );
};

export default Title;
