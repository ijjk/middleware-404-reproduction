import Link from 'next/link';

export default function IndexPage() {
	return (
		<div>
			<h1>Index page</h1>

			<Link href="/other">
				<a>To other page</a>
			</Link>
		</div>
	);
}

export async function getServerSideProps() {
	return {
		props: {},
	};
}
