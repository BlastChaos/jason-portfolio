import * as React from "react";

export const ArrowUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3c.2652 0 .5196.10536.7071.29289l7 7a.99989.99989 0 0 1-1.4142 1.41421L13 6.41421V20a1 1 0 1 1-2 0V6.41421l-5.29289 5.29289a.99989.99989 0 0 1-1.41422-1.41421l7-7C11.4804 3.10536 11.7348 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
