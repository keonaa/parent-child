import {useState} from "react"
import ChildOne from "./ChildOne";

export default function ParentOne() {
    const [data, setData] = useState();

    const ParentToChild = () => {
        setData("This is the data from the parent page which will be passed to the child page");
    }
    return (
        <>
            <ChildOne ParentToChild={data}/>
            <button onClick={() => ParentToChild()}>Click parent to Child</button>
        </>
    )
}