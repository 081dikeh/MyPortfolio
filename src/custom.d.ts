/// <reference types="vite/client" />

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

// Provide a loose module declaration for react-icons packages
declare module 'react-icons/*' {
  import * as React from 'react';
  const icons: { [key: string]: React.ComponentType<any> };
  export = icons;
}