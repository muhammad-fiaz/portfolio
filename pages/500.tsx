
import Title500 from "./title.500";
import Custom500 from "../src/components/blocks/errors/custom500";

export default function InternalServerError() {
    return (
        <div>
            <Title500/>
            <Custom500/>
        </div>
    );
};