


interface LossFontDigitProps {
	n: number
}

export default function LossFontDigit ({
	n
}: LossFontDigitProps) {
	const binary = Number(n).toString(2).padStart(5, '0');

	return (
		<section className="LossFontDigit relative w-24 h-24 bg-zinc-950">
			<div className="bar w-full absolute top-0 left-0" hidden={binary[0] === '0'}></div>
			<div className="bar w-full absolute top-1/2 left-0 -translate-y-1/2" hidden={binary[1] === '0'}></div>
			<div className="bar w-full absolute bottom-0 left-0" hidden={binary[2] === '0'}></div>

			<div className="bar h-full absolute top-0 left-0" hidden={binary[3] === '0'}></div>
			<div className="bar h-full absolute top-0 right-0" hidden={binary[4] === '0'}></div>
		</section>
	);
}
