/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
		getUser(id: $id) {
			id
			name
			email
			orders {
				items {
					id
					total
					status
					createdAt
					updatedAt
					userOrdersId
					orderUserId
					orderStoreId
					__typename
				}
				nextToken
				__typename
			}
			defaultStore {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			role {
				id
				name
				createdAt
				updatedAt
				__typename
			}
			createdAt
			updatedAt
			userDefaultStoreId
			userRoleId
			__typename
		}
	}
`;
export const listUsers = /* GraphQL */ `
	query ListUsers(
		$filter: ModelUserFilterInput
		$limit: Int
		$nextToken: String
	) {
		listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				email
				orders {
					nextToken
					__typename
				}
				defaultStore {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				role {
					id
					name
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				userDefaultStoreId
				userRoleId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const listCategories2 = /* GraphQL */ `
	query ListCategories(
		$filter: ModelCategoryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				drinks {
					items {
						id
						name
						price
						description
						categoryDrinksId
						sizes {
							items {
								id
								value
								extraCost
							}
						}
						milks {
							items {
								id
								name
							}
						}
						flavorShots {
							items {
								id
								name
								extraCost
							}
						}
					}
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getRole = /* GraphQL */ `
	query GetRole($id: ID!) {
		getRole(id: $id) {
			id
			name
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listRoles = /* GraphQL */ `
	query ListRoles(
		$filter: ModelRoleFilterInput
		$limit: Int
		$nextToken: String
	) {
		listRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getStore = /* GraphQL */ `
	query GetStore($id: ID!) {
		getStore(id: $id) {
			id
			address
			latitude
			longtitude
			openingHour
			closingHour
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listStores = /* GraphQL */ `
	query ListStores(
		$filter: ModelStoreFilterInput
		$limit: Int
		$nextToken: String
	) {
		listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getCategory = /* GraphQL */ `
	query GetCategory($id: ID!) {
		getCategory(id: $id) {
			id
			name
			drinks {
				items {
					id
					name
					description
					price
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			__typename
		}
	}
`;
export const listCategories = /* GraphQL */ `
	query ListCategories(
		$filter: ModelCategoryFilterInput
		$limit: Int
		$nextToken: String
	) {
		listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				drinks {
					nextToken
					__typename
				}
				createdAt
				updatedAt
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getOrderItem = /* GraphQL */ `
	query GetOrderItem($id: ID!) {
		getOrderItem(id: $id) {
			id
			drink {
				id
				name
				description
				price
				sizes {
					nextToken
					__typename
				}
				flavorShots {
					nextToken
					__typename
				}
				milks {
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			milk {
				id
				name
				createdAt
				updatedAt
				drinkMilksId
				__typename
			}
			size {
				id
				value
				extraCost
				createdAt
				updatedAt
				drinkSizesId
				__typename
			}
			flavorShots {
				items {
					id
					name
					extraCost
					createdAt
					updatedAt
					orderItemFlavorShotsId
					drinkFlavorShotsId
					__typename
				}
				nextToken
				__typename
			}
			price
			createdAt
			updatedAt
			orderItemsId
			orderItemMilkId
			orderItemSizeId
			__typename
		}
	}
`;
export const listOrderItems = /* GraphQL */ `
	query ListOrderItems(
		$filter: ModelOrderItemFilterInput
		$limit: Int
		$nextToken: String
	) {
		listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				drink {
					id
					name
					description
					price
					createdAt
					updatedAt
					categoryDrinksId
					__typename
				}
				milk {
					id
					name
					createdAt
					updatedAt
					drinkMilksId
					__typename
				}
				size {
					id
					value
					extraCost
					createdAt
					updatedAt
					drinkSizesId
					__typename
				}
				flavorShots {
					nextToken
					__typename
				}
				price
				createdAt
				updatedAt
				orderItemsId
				orderItemMilkId
				orderItemSizeId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getOrder = /* GraphQL */ `
	query GetOrder($id: ID!) {
		getOrder(id: $id) {
			id
			user {
				id
				name
				email
				orders {
					nextToken
					__typename
				}
				defaultStore {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				role {
					id
					name
					createdAt
					updatedAt
					__typename
				}
				createdAt
				updatedAt
				userDefaultStoreId
				userRoleId
				__typename
			}
			items {
				items {
					id
					price
					createdAt
					updatedAt
					orderItemsId
					orderItemMilkId
					orderItemSizeId
					__typename
				}
				nextToken
				__typename
			}
			store {
				id
				address
				latitude
				longtitude
				openingHour
				closingHour
				createdAt
				updatedAt
				__typename
			}
			total
			status
			createdAt
			updatedAt
			userOrdersId
			orderUserId
			orderStoreId
			__typename
		}
	}
`;
export const listOrders = /* GraphQL */ `
	query ListOrders(
		$filter: ModelOrderFilterInput
		$limit: Int
		$nextToken: String
	) {
		listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				user {
					id
					name
					email
					createdAt
					updatedAt
					userDefaultStoreId
					userRoleId
					__typename
				}
				items {
					nextToken
					__typename
				}
				store {
					id
					address
					latitude
					longtitude
					openingHour
					closingHour
					createdAt
					updatedAt
					__typename
				}
				total
				status
				createdAt
				updatedAt
				userOrdersId
				orderUserId
				orderStoreId
				__typename
			}
			nextToken
			__typename
		}
	}
`;

export const getDrink = /* GraphQL */ `
	query GetDrink($id: ID!) {
		getDrink(id: $id) {
			id
			name
			description
			price
			sizes {
				items {
					id
					value
					extraCost
					createdAt
					updatedAt
					drinkSizesId
					__typename
				}
				nextToken
				__typename
			}
			flavorShots {
				items {
					id
					name
					extraCost
					createdAt
					updatedAt
					orderItemFlavorShotsId
					drinkFlavorShotsId
					__typename
				}
				nextToken
				__typename
			}
			milks {
				items {
					id
					name
					createdAt
					updatedAt
					drinkMilksId
					__typename
				}
				nextToken
				__typename
			}
			createdAt
			updatedAt
			categoryDrinksId
			__typename
		}
	}
`;
export const listDrinks = /* GraphQL */ `
	query ListDrinks(
		$filter: ModelDrinkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				price
				sizes {
					nextToken
					__typename
				}
				flavorShots {
					nextToken
					__typename
				}
				milks {
					nextToken
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getSize = /* GraphQL */ `
	query GetSize($id: ID!) {
		getSize(id: $id) {
			id
			value
			extraCost
			createdAt
			updatedAt
			drinkSizesId
			__typename
		}
	}
`;
export const listSizes = /* GraphQL */ `
	query ListSizes(
		$filter: ModelSizeFilterInput
		$limit: Int
		$nextToken: String
	) {
		listSizes(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				value
				extraCost
				createdAt
				updatedAt
				drinkSizesId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getFlavorShot = /* GraphQL */ `
	query GetFlavorShot($id: ID!) {
		getFlavorShot(id: $id) {
			id
			name
			extraCost
			createdAt
			updatedAt
			orderItemFlavorShotsId
			drinkFlavorShotsId
			__typename
		}
	}
`;
export const listFlavorShots = /* GraphQL */ `
	query ListFlavorShots(
		$filter: ModelFlavorShotFilterInput
		$limit: Int
		$nextToken: String
	) {
		listFlavorShots(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				extraCost
				createdAt
				updatedAt
				orderItemFlavorShotsId
				drinkFlavorShotsId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const getMilk = /* GraphQL */ `
	query GetMilk($id: ID!) {
		getMilk(id: $id) {
			id
			name
			createdAt
			updatedAt
			drinkMilksId
			__typename
		}
	}
`;
export const listMilks = /* GraphQL */ `
	query ListMilks(
		$filter: ModelMilkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listMilks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				createdAt
				updatedAt
				drinkMilksId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
export const listDrinks2 = /* GraphQL */ `
	query ListDrinks(
		$filter: ModelDrinkFilterInput
		$limit: Int
		$nextToken: String
	) {
		listDrinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
				price

				sizes {
					nextToken
					items {
						id
						value
						extraCost
					}
					__typename
				}
				flavorShots {
					nextToken
					items {
						id
						name
						extraCost
					}
					__typename
				}
				milks {
					nextToken
					items {
						id
						name
					}
					__typename
				}
				createdAt
				updatedAt
				categoryDrinksId
				__typename
			}
			nextToken
			__typename
		}
	}
`;
