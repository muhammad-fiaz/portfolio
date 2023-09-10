const Custom404   = dynamic(import ( "../src/components/blocks/errors/custom404"));
import Title404 from "./title.404";
import dynamic from "next/dynamic";

export default function Notfound() {
    return (
        <div>
            <Title404/>
            <Custom404/>
        </div>
    );
};