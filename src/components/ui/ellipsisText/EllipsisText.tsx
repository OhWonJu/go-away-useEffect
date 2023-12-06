import React from "react";
import cn from "clsx";

import styled from "styled-components";

interface Props {
  context: string;
  className?: string;
  lineClamp?: number;
  lineHeight?: number;
  [key: string]: any;
}

const EllipsisText: React.FC<Props> = ({
  context,
  className,
  lineClamp = 2,
  lineHeight,
  ...rest
}) => {
  const rootClassName = cn("", {}, className);

  return (
    <EllipsisA
      className={rootClassName}
      $lineClamp={lineClamp}
      $lineHeight={lineHeight}
      {...rest}
    >
      {context}
    </EllipsisA>
  );
};

export default EllipsisText;

const EllipsisA = styled.a<any>`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.$lineClamp};
  -webkit-box-orient: vertical;
  line-height: ${(props) =>
    props.$lineHeight ? props.$lineHeight : 1 * props.$lineClamp}rem;
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
`;
