import { createSlice } from "@reduxjs/toolkit";

const amenitiesAdminSlice = createSlice({
	name: "packages",
	initialState: {
		packages: [],
	},
	reducers: {
		addPackage: (state) => {
			const newPackage = {
				id:
					state.packages.length > 0
						? state.packages[state.packages.length - 1].id + 1
						: 0,
				name: "",
				items: [],
			};
			state.packages.push(newPackage);
		},
		addItem: (state, action) => {
			const { packageId, title } = action.payload;
			const targetPackage = state.packages.find((pkg) => pkg.id === packageId);
			if (targetPackage) {
				const newItem = {
					id:
						targetPackage.items.length > 0
							? targetPackage.items[targetPackage.items.length - 1].id + 1
							: 0,
					title: title || "",
				};
				targetPackage.items.push(newItem);
			}
		},
		deletePackage: (state, action) => {
			const packageId = action.payload;
			state.packages = state.packages.filter((pkg) => pkg.id !== packageId);
		},
		deleteItem: (state, action) => {
			const { packageId, itemId } = action.payload;
			const targetPackage = state.packages.find((pkg) => pkg.id === packageId);
			if (targetPackage) {
				targetPackage.items = targetPackage.items.filter(
					(item) => item.id !== itemId
				);
			}
		},
		updatePackageName: (state, action) => {
			const { packageId, name } = action.payload;
			console.log(name);
			const targetPackage = state.packages.find((pkg) => pkg.id === packageId);
			if (targetPackage) {
				targetPackage.name = name;
			}
		},
		updateItemTitle: (state, action) => {
			const { packageId, itemId, title } = action.payload;
			const targetPackage = state.packages.find((pkg) => pkg.id === packageId);
			if (targetPackage) {
				const targetItem = targetPackage.items.find(
					(item) => item.id === itemId
				);
				if (targetItem) {
					targetItem.title = title;
				}
			}
		},
		deleteItemsWithEmptyTitle: (state) => {
			state.packages.forEach((pkg) => {
				pkg.items = pkg.items.filter((item) => item.title.trim() !== "");
			});
		},
		deletePackagesWithEmptyTitle: (state) => {
			state.packages = state.packages.filter((pkg) => pkg.name.trim() !== "");
		},
		resetPackages: (state) => {
			state.packages = [];
		  },
		  setPackages: (state,action) => {
			state.packages = action.payload;
		  },
	},
});

export const {
	resetPackages,
	setPackages,
	addPackage,
	addItem,
	deletePackage,
	deleteItem,
	updateItemTitle,
	updatePackageName,
	deleteItemsWithEmptyTitle,
	deletePackagesWithEmptyTitle
} = amenitiesAdminSlice.actions;

export default amenitiesAdminSlice.reducer;
