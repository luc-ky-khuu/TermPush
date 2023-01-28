// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import styles from '../../app/page.module.css';
type Data = {
	name: string
};

export default function createDiv({ ...props }): JSX.Element {

	return (
		<div id={props.id} className={styles['container-div']}></div>
	)
}
