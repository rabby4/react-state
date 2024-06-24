// user = {name = 'something', age= 50, hobbies= ['football', 'gaming']}

import { useState } from "react"

const UserInfoWithUseState = () => {
	const [user, setUser] = useState({ name: "", age: "0", hobbies: [] })
	console.log(user)
	return (
		<div>
			<form>
				<input
					onChange={(e) => setUser({ ...user, name: e.target.value })}
					className="border border-purple-300 m-10"
					type="text"
					name="name"
					id="name"
					placeholder="name"
				/>
				<input
					onChange={(e) => setUser({ ...user, age: e.target.value })}
					className="border border-purple-300 m-10"
					type="number"
					name="age"
					id="age"
					placeholder="age"
				/>
				<input
					onBlur={(e) =>
						setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
					}
					className="border border-purple-300 m-10"
					type="text"
					name="hobbies"
					id="hobbies"
					placeholder="hobby"
				/>
				<button className="btn btn-primary" type="submit">
					submit
				</button>
			</form>
		</div>
	)
}

export default UserInfoWithUseState
