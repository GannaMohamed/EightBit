import { noImage } from "./assets";

export const Image = ({ className, src, style }) => {
  const handleError = (e) => {
    e.target.onerror = null; // Prevent infinite loop in case of subsequent errors
    e.target.src = noImage; // Replace with default image when error occurs
  };

  return (
    <img
      src={src ? src : noImage}
      alt=""
      className={`${className}`}
      style={style}
      onError={handleError} // Handle error loading image
    />
  );
};
