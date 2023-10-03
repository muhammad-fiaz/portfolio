
import Title500 from "./title.500";
const Custom500  = dynamic(import ( "../src/components/blocks/errors/custom500"));
import dynamic from "next/dynamic";

export default function InternalServerError() {
    return (
        <div>
            <Title500/>
            <Custom500/>
        </div>
    );
};