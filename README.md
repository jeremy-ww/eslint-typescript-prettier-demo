# eslint-typescript-prettier-demo

> http://www.thedreaming.org/2019/03/27/eslint-with-typescript/

## Example

```tsx
import React from 'react'

/**
 * 1. Type Check Will Throw Error, But Not Eslint
 */
function example(name: string) {
  return name
}

example(123) // <- typescript throw error here

/**
 * 2. Eslint Will Throw Error
 */
export interface ExampleInterface {
  name: string
}

function example1(name: ExampleInterface) {  } // <- eslint throw error here

/**
 * 3. Eslint Will Throw Error
 */
class ExampleComponent extends React.Component<{ name: string }> {
  render() {
    return <div>{this.props.name}</div>
  }
}

React.renderToString(<ExampleComponent name="" />) // <- eslint react deprecated error

console.log(<ExampleComponent  name={123} />) // <- both typescript and eslint throw error here
```

## Usage

```bash
$ npm run type-check // For Type Checking
$ npm run lint       // For Code Style Checking
```
