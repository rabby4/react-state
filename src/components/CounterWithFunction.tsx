import ChildComponents from "./ChildComponents"

type TProps = {
	count: number
	setCount: React.Dispatch<React.SetStateAction<number>>
}

const CounterWithFunction = ({ count, setCount }: TProps) => {
	return (
		<div className="border border-red-500 p-10 m-10">
			<button
				className="btn btn-primary"
				onClick={() => setCount((prev) => prev + 1)}
			>
				{count}
			</button>
			<ChildComponents count={count} />
		</div>
	)
}

export default CounterWithFunction
