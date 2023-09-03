import Custom404 from "../src/components/blocks/errors/custom404";
import Title404 from "./title.404";

export default function Notfound() {
    return (
        <div>
            <Title404/>
            <Custom404/>
        </div>
    );
};