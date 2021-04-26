import React from "react";

import ReactLoading from "react-loading";

type Props = {
  show?: boolean;
};

function Loading({ show }: Props) {
  if (!show) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
      <ReactLoading type="spin" width={64} height={64} color="#5e72e4" />
    </div>
  );
}

export default React.memo(Loading);
