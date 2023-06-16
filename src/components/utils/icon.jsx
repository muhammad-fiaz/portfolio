// Core packages
import { useEffect, useState } from 'react'

// Font Awesome packages
const { library, config } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Load icons into
library.add(fat, fal, fas, fad, far, fab)

/**

 * * https://github.com/FortAwesome/Font-Awesome/issues/19348


 */
export default function Icon({ icon }) {

	const [ iconType, iconKey ] = icon

	const [ stateIconKey, setIconKey ] = useState('circle-notch')

	useEffect( () => setIconKey( iconKey ), [ iconKey ] )

	return (
		<FontAwesomeIcon icon={[ iconType, stateIconKey ]} />
	)
}
