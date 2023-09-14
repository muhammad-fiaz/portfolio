// Util packages
import Icon from '../utils/icon';

// Define the props for the CopyBlock component
interface CopyBlockProps {
	containerClass: string;
	iconClass: string;
	icon: any;
	title: string;
	copy: string;
}

// This will return the copy block component
export default function CopyBlock({
									  containerClass,
									  iconClass,
									  icon, // Keep it as a string if you're using a string for the icon
									  title,
									  copy,
								  }: CopyBlockProps) {
	// Return the copy block component
	return (
		<div className={containerClass}>
      <span className={iconClass}>
        <Icon icon={icon} />
      </span>
			<h3>{title}</h3>
			<p>{copy}</p>
		</div>
	);
}
