import grid from '../../../assets/styles/scss/blocks/section.grid.module.scss';

interface SectionGridProps {
	gridSize?: number;
}

export default function SectionGridBG({ gridSize = 4 }: SectionGridProps) {
	function generateGrid(gridSize: number, classProp: string) {
		const grid = [];
		for (let i = 0; i < gridSize + 1; i++) {
			grid.push(<div key={`grid-line-${i}`} className={`${classProp}`} />);
		}
		return grid;
	}

	return (
		<div className={grid.block}>
			<div className={grid.Guides} aria-hidden="true">
				<div className={`${grid.Guides__container} grid-${gridSize}`}>
					{generateGrid(gridSize, grid.Guides__guide)}
					<style jsx>
						{`
              .${grid.Guides__container}.grid-${gridSize} {
                --grid-size: ${gridSize};
              }
            `}
					</style>
				</div>
			</div>
		</div>
	);
}
