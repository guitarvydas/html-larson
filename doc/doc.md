
1then2 is a sequencing component that:

Takes inputs that may arrive in any order
Guarantees that output 1 is always sent before output 2
This sequencing is crucial for maintaining deterministic behavior


Trash is shown more accurately as:

A mevent consumer
Used to satisfy the runtime type checker
Prevents errors about unused outputs



This kind of deterministic sequencing through 1then2 is important in the Larson scanner as it ensures reliable timing and coordination between components, regardless of how input events might arrive. The Trash component provides a clean way to handle outputs that need to be acknowledged by the system but don't need further processing.
