import React, { useState, useEffect, useMemo } from "react";

const UserDetails = ({ user }) => {
	console.log("child");
	if (!user) {
		return <div className="user-details-container">No user selected</div>;
	}

	return (
		<div className="user-details-container">
			<h2>User Details</h2>
			<p>
				Name: {user.firstName} {user.lastName}
			</p>
			<p>Email: {user.email}</p>
		</div>
	);
};

const UserSearchComponent = () => {
	console.log("parent");
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	// Simulating an expensive function to search for users using an API call
	const searchUsers = async (term = "") => {
		if (term === "") {
			const response = await fetch(`https://dummyjson.com/users`);
			const data = await response.json();
			if (data?.users?.length > 0) {
				return data.users;
			}
		}
		if (term?.trim()) {
			const response = await fetch(
				`https://dummyjson.com/users/search?q=${encodeURIComponent(term)}`
			);
			const data = await response.json();
			if (data?.users?.length > 0) {
				return data.users;
			}
		}
	};

	// Using useMemo to memoize the result of the expensive search operation
	const memoizedSearchResults = useMemo(async () => {
		const data = await searchUsers(searchTerm);
		return data;
	}, [searchTerm]);

	// Effect to update the state with the fetched search results
	useEffect(() => {
		const fetchSearchResults = async () => {
			const results = await memoizedSearchResults;
			// console.log(results);
			setSearchResults(results);
		};

		fetchSearchResults();
	}, [memoizedSearchResults]);

	// Function to handle user selection
	const handleUserSelect = (user) => {
		setSelectedUser(user);
	};

	return (
		<div className="container">
			<input
				type="text"
				className="search-input"
				placeholder="Search users..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<UserDetails user={selectedUser} />
			<ul>
				{searchResults?.length > 0 &&
					searchResults?.map((user) => (
						<li key={user.id} onClick={() => handleUserSelect(user)}>
							<a className="pe-auto">
								{user.firstName} {user.lastName}
							</a>
						</li>
					))}
			</ul>
		</div>
	);
};

export default UserSearchComponent;
