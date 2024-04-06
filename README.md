# SOLID Principles using Typescript

## Run the Project

1. `npm install`
2. `npm run dev`

## Understand SOLID Principles in the example

1. **Single Responsibility Principle (SRP)**: A class should have only one reason to change. This means a class should only have one job or responsibility. In this example,
   `SRP_FileBlobJsonReader.ts` has the class `FileBlobJSONReader` which has only single purpose reading json file from blob

2. **Open/Closed Principle (OCP)**: Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification. This means you should be able to add new functionality without changing existing code. In this example, we have a designed a common `readFile` method in `IJSONReader` interface, which is implemented in `FileBlobJSONReader`. Now further we extended it in`FilePathJSONReader`
   with different implementation of readFile. We didn't need to modify `FileBlobJSONReader` for the new functionality

3. **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types. This means that if a program is using a base class, it should be able to use any of its subclasses without the program knowing it. In this example, we inherited from `FilePathJSONReader` in `LocalFileJsonReader`, however we are using same purpose of file read only and hence it can substitute the parent class with same `readFile` method.

4. **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use. This means that a class should not have to implement methods it doesn't use. Instead of one big interface, many small interfaces are preferred based on groups of methods, each one serving one submodule. In this example, we create two separate interface to segregate two purpose, reading files and writing files so that all the implementing class don't need to implement both.

5. **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions. This means that you should "depend upon abstractions, [not] concretions." In this example, we have high-level `app.ts` that depends on the previously written low-level classes but not directly upon concretion or implementation, instead using the interface `IJSONReader` as common contract as dependency.
