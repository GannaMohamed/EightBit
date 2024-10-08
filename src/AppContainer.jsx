import React from "react";
import DataSourceRender from "./DataSourceRender";
import { fetchData } from "./Axios";

export default function AppContainer() {
  return (
    <div>
      <DataSourceRender
        getData={() => fetchData("/api/kza/1")}
        render={(resource) => <kzaInfo kza={resource} />}
      />
    </div>
  );
}
