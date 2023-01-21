export default function LikesList(props) {
  const {
    pet: { likes },
  } = props || {};
  return likes.length >= 1 ? (
    <div className="likes relative">
      <div className="relative isolate flex -space-x-2 overflow-visible px-1 py-2 w-fit">
        {likes
          .filter((like) => like.user_image_url)
          .slice(0, 5)
          .map((like, index) => {
            let zIndex = 60 - (index + 1) * 10;
            return (
              <img
                key={index}
                className={`'relative z-${zIndex} inline-block h-7 w-7 rounded-full ring-1 ring-white`}
                src={like.user_image_url}
                alt=""
              />
            );
          })}
      </div>

      <div className="absolute -top-2 -right-4 px-2 py-1 text-[10px] font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
        {`${likes.length - 1}+`}
      </div>
    </div>
  ) : null;
}
