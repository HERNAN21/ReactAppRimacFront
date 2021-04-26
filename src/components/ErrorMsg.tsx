import React from "react";

import { Button } from "reactstrap";

type Props = {
  show: boolean;
  reload?: () => any;
  children?: any;
};

function ErrorMsg({ show, reload, children }: Props) {
  if (!show) return null;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        flexDirection: "column"
      }}
    >
      <div>{children}</div>
      <div>
        <Button onClick={reload} color="info">
          Volver a cargar...
        </Button>
      </div>
    </div>
  );
}

export default React.memo(ErrorMsg);
