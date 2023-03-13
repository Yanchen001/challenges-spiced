import { add } from "./index";
import { subtract} from "./index";
import { multiply } from "./index";
import { divide } from "./index";

test("1. add: return 5 when 2 + 3", () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
});

test("2. add, return negative if the bigger number is negative", ()=>{
    const result = add(-3,-2);
    expect(result).toBeLessThan(0);
})

test("3. add: return a value close to 0.3, if called with add(0.1, 0.2", ()=>{
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
})

test("4. subtract: return 10 if called with substract(15,5)", ()=>{
    const result = subtract(15, 5);
    expect(result).toBe(10);
})

test("5. subtract: return negative if the second argument is bigger",()=>{
    const result = subtract(1,2);
    expect(result).toBeLessThan(0);
})

test("6. multiply: return 8 if called wth mulitply(2,4)",()=>{
    const result = multiply(2,4);
    expect(result).toEqual(8);
})

test("7. multiply: return negative if only the first value is negative",()=>{
    const result = multiply (-2,4);
    expect(result).toBeLessThan(0);
})

test("8. multiply: return negative if only the second value is negative",()=>{
    const result = multiply (2,-4);
    expect(result).toBeLessThan(0);
})

test("9. mutliply: return positive if both argumnets are negative",()=>{
    const result = multiply (-2, -4);
    expect(result).toBeGreaterThan(0);
})

test('10. devide:return 3 if called with divide(9,3)',()=>{
    const result = divide (9, 3);
    expect(result).toEqual(3)
})

test("11. devide: return 'You should not do this!'", ()=>{
    const result = divide (2,0);
    expect(result.toString("You should not do this!"));
}
)

