import { Route, useLocation } from "react-router-dom";

// can get id from params?
export default function donorPagewithId({params}) {
    
return <div>welcome to company:{params.id}</div>
}