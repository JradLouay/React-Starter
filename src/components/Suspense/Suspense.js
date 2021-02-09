import React, { Suspense } from "react";
import  Loading  from "../Loading/Loading";

export const AppSuspense = props => {
  return <Suspense fallback={<Loading />}>{props.children}</Suspense>;
};

export default AppSuspense;