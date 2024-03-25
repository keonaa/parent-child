import {useState} from "react"
import ChildTwo from "./ChildTwo";

export default function ParentTwo() {
    const [data, SetData] = useState();

    const childToParent = (childData) => {
        SetData(childData);
    }
    
    return(
        <>
            {data}
            <ChildTwo childParent={childToParent}/>
        </>
    )
}