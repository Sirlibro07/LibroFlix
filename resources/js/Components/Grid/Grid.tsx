import React from "react";
import GridCards, { GridCardsProps } from "./GridCards";

export interface GridProps extends GridCardsProps {}

const Grid = ({ movies }: GridProps) => {
    return (
        <section className="w-full gap-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            <GridCards movies={movies} />
        </section>
    );
};

export default Grid;
