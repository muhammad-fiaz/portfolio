import React, {ReactNode} from 'react';
import Spacing from '../utils/spacing';
import styles from '../../../assets/styles/scss/structure/container.module.scss';

interface ContainerProps {
	classProp?: string;
	spacing: string[];
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ classProp, spacing, children }) => {
	const _class = classProp ? classProp : '';

	return (
		<div className={`${styles.readingWidth} ${_class} ${Spacing(spacing)}`}>
			{children}
		</div>
	);
};

export default Container;
