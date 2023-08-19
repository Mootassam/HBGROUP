import React from "react";

export default function LazyComponent(opts) {
  const LazyComponent = React.lazy(opts?.loader);

  return (props) => (
    <React.Suspense fallback={<h1> Loading ...</h1>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
}
