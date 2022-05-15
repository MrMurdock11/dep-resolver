export class Node {
	edges: Node[] = [];

	constructor(public name: string) {}

	addEdge(node: Node) {
		this.edges.push(node);
	}
}

export class Resolver {
	resolved: Node[] = [];
	private unresolved: Map<Node, Node> = new Map();

	resolve(node: Node): void {
		this.unresolved.set(node, node);

		for (const edge of node.edges) {
			if (!this.resolved.includes(edge)) {
				if (this.unresolved.has(edge)) {
					throw new Error(
						`💥 Circular dependency detected: ${node.name} => ${edge.name}`
					);
				}
				this.resolve(edge);
			}
		}

		this.resolved.push(node);
		this.unresolved.delete(node);
	}
}
