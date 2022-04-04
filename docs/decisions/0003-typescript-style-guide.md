# Typescript style guide

This adr contain TypeScript coding style.

## Decision Outcome

### Use UpperCamelCase(Pascal Case)

Use PascalCase format for- class / interface / type / enum / decorator / type parameters 

#### Examples

```
class Foo { 

} 
```

### Use LowerCamelCase

Use LowerCamelCase format for- variable / parameter / function / method / property / module alias 

#### Examples

```
function someFunction() {   

    const longThings = myValue 

  	function payMoney(amount: number) { 

    } 

} 
```

### Use CONSTANT_CASE

Use CONSTANT_CASE format for- global constant values, including enum values 

#### Examples

```
class Foo { 

  	private static readonly MY_SPECIAL_NUMBER = 5; 

    bar() { 
  		return 2 * Foo.MY_SPECIAL_NUMBER; 
 	} 

} 
```

### For Imports

Module namespace imports are lowerCamelCase while files are snake_case, which means that imports correctly will not match in casing style, such as 

#### Examples

```
import * as fooBar from './foo_bar'; 
```

## Artifacts

For more details
- https://google.github.io/styleguide/tsguide.html#variables 
- https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines 


[Back To Index](../index.md)
