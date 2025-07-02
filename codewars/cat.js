// Using closures to share class state | Codewars
var Cat = (() => {
	var _count = 0;
	var _totalWeight = 0;
	const Constructor = function (name, weight) {
		if (!name || !weight) throw new Error("Both name and weight are required");
		_count++;
		this.name = name;
		Object.defineProperty(this, "weight", {
			get: function () {
				return this._weight || 0;
			},
			set: function (value) {
				_totalWeight -= this.weight;
				_totalWeight += value;
				this._weight = value;
			},
		});
		this.weight = weight;
	};
	Constructor.averageWeight = () => _totalWeight / _count;
	return Constructor;
})();
