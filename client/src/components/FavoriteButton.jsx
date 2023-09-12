import { useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import useUser from "../hooks/useUser.js";
import useFavoriteMovie from "../hooks/useFavoriteMovie.js";

const FavoriteButton = ({ movieId }) => {
  const { mutateFavorite } = useFavoriteMovie();
  const { user } = useUser();

  const [isFavorite, setIsFavorite] = useState(
    user.favoriteIds.includes(movieId)
  );
  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  const toggleFavorites = () => {
    mutateFavorite({ movieId, userId: user._id }).unwrap();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={toggleFavorites}
      className="
        cursor-pointer
        group/item
        w-6
        h-5
        lg:w-10
        lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
      ">
      <Icon className="text-white" size={20} />
    </div>
  );
};

export default FavoriteButton;
