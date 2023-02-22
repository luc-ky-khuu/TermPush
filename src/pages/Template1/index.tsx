import React, { useEffect, useState } from 'react';
import T1NavBar from '../../components/Template1/T1Navbar';
import { INavProps } from '@/interface/T1Navbar.interface';
export default function Template1(): JSX.Element {
	let [backgroundColor, updateBackgroundColor] = useState<String>('#18181b');
	let [props, updateProps] = useState<INavProps>({
		backgroundColor: '#18181b',
		updateBackgroundColor: updateBackgroundColor,
	})

	useEffect(() => {
		updateProps({...props, backgroundColor: backgroundColor})
	}, [backgroundColor])


	return (
		<>
			<div className='fixed bottom-0 '>
				test
			</div>
			<div>
				{T1NavBar(props)}
			</div>
		</>
	)
}
