export class InternusNode {
        id: string;
            x: number;
                y: number;
                    activation: (input: number) => number;
                        state: number; // Represents the internal state of the neuron
                            connections: InternusNode[]; // Array to hold connected nodes

                                constructor(id: string, x: number, y: number, activation: (input: number) => number) {
                                        this.id = id;
                                                this.x = x;
                                                        this.y = y;
                                                                this.activation = activation;
                                                                        this.state = 0; // Initialize state to 0
                                                                                this.connections = []; // Initialize connections as an empty array
                                                                                    }

                                                                                        // Method to update the node's state based on inputs
                                                                                            update(input: number): void {
                                                                                                    this.state = this.activation(input + this.state); // Simplified recursive update
                                                                                                        }

                                                                                                            // Method to propagate the state to connected nodes
                                                                                                                propagate(): void {
                                                                                                                        this.connections.forEach(node => {
                                                                                                                                    node.update(this.state);
                                                                                                                                            });
                                                                                                                                                }
                                                                                                                                                }
