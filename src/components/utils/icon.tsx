import React, {useEffect, useState} from 'react';
import {IconName, IconPrefix, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {fat} from '@fortawesome/pro-thin-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

// Icons
library.add(fat, fal, fas, fad, far, fab);

interface IconProps {
	icon: [IconPrefix, IconName];
}

const Icon: React.FC<IconProps> = ({ icon }) => {
	const [iconType, iconKey] = icon;
	const [stateIconKey, setIconKey] = useState<IconName>('circle-notch');

	useEffect(() => {
		setIconKey(iconKey as IconName);
	}, [iconKey]);

	return <FontAwesomeIcon icon={[iconType as IconPrefix, stateIconKey]} />;
};

export default Icon;
