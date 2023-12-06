import React from "react";
import cn from "clsx";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  [key: string]: any;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...rest }) => {
  const rootClassName = cn(className, {}, "__image_wrapper__ box-border");

  return (
    <div className={rootClassName} {...rest}>
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

export default Image;
