import { useState } from "react"
import "./App.css"
import UserInfoWithUseState from "./components/UserInfoWithUseState"
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer"
function App() {
	const [count, setCount] = useState(0)
	return (
		<div className=" border border-purple-500 p-10 m-10">
			<UserInfoWithUseReducer />
		</div>
	)
}

export default App
