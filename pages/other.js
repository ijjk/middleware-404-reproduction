import Link from 'next/link';

export default function OtherPage() {
	return (
		<div>
			<h1>Other page</h1>

			<Link href="/">
				<a>To index page</a>
			</Link>
		</div>
	);
}

export async function getServerSideProps() {
	return {
		props: {},
	};
}
