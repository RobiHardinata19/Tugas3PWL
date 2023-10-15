/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <div className="bg-srBlack w-[260px] h-[200px] p-5 flex justify-center items-center">
        <div className="wrap flex flex-col text-center">
          <div className="title text-[24px] font-bold">{props.title}</div>
          <div className="title text-[15px]">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
