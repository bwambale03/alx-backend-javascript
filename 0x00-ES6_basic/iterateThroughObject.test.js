// iterateThroughObject.js
import iterateThroughObject from "./101-iterateThroughObject";

// mock functions to simulate createIteratorObject
function createIteratorObject(report){
    // flattened  the employee names into a single iterable
    return (function* (){
        for (const department of Object.values(report.allEmployees)){
            for (const employee of department){
                yield employee;
            }
        }
    })();
}

// Test cases
describe('iterateThroughObject', ()=>{
    test('should return employee names seperated by "|" ', ()=>{
        const employees = {
            allEmployees: {
                engineering: ['John Doe', 'Guillaume Salva'],
                design: ['Kanye East', 'Jay Li']
            }
        };

        const report = {
            allEmployees: employees.allEmployees
        };
        const reportWithIterator = createIteratorObject(report);
        const result = iterateThroughObject(reportWithIterator);
        expect(result).toBe('John Doe | Guillaume Salva | Kanye East | Jay Li')
    });

    test('should handle empty iterator', ()=>{
        const emptyReport = {
            allEmployees:{}
        };

        const emptyIterator = createIteratorObject(emptyReport);

        const result = iterateThroughObject(emptyIterator);

        expect(result).toBe('')
    });
});