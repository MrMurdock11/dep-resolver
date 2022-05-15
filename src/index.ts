import { Node, Resolver } from "./resolver";

const resolver = new Resolver();

// nodes registration
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

// edges registration
a.addEdge(b);
a.addEdge(d);
b.addEdge(c);
b.addEdge(e);
c.addEdge(d);
c.addEdge(e);

// use case which create the circular dependency between "d" and "b" nodes.
// d.addEdge(b);

resolver.resolve(a);

console.log(resolver.resolved.map(node => node.name).join(", "));
