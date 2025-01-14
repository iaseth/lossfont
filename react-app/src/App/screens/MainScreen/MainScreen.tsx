import { LossFontDigit } from "@/ui";



const ONE_TO_32 = [...Array(32).keys()];

export default function MainScreen () {
	return (
		<div>
			<main className="min-h-screen px-4 py-16">
				<section className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
					{ONE_TO_32.map(n => <LossFontDigit key={n} n={n} />)}
				</section>
			</main>
		</div>
	);
}
