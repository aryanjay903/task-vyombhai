let count = 0;
let subscribers = new Set();

const countStore = {
	getSnapShot() {
		return count;
	},
	getServerSnapshot() {
		return true;
	},
	subscribe(callback) {
		subscribers.add(callback);
		return () => subscribers.delete(callback);
	},
	increment() {
		count++;
		subscribers.forEach((callback) => callback());
	},
	decrement() {
		count--;
		subscribers.forEach((callback) => callback());
	},
};

export default countStore;
