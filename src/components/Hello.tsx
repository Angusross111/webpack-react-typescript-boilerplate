import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello this isnt changedin from sdfsdf {props.compiler} and {props.framework}!</h1>;