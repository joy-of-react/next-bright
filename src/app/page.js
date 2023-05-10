import React from 'react';
import { Code } from 'bright';

function Home() {
  const [
    isFirstSnippetShown,
    setIsFirstSnippetShown,
  ] = React.useState(false);
  const [
    isSecondSnippetShown,
    setIsSecondSnippetShown,
  ] = React.useState(false);
  const [
    isThirdSnippetShown,
    setIsThirdSnippetShown,
  ] = React.useState(false);

  return (
    <main>
      <h1>Introduction to Python</h1>
      <h2>Variables and Basic Data Types</h2>
      <p>
        Python is a high-level, interpreted
        programming language. In Python, you don't
        need to specify the data type of a
        variable when you declare it. Python
        automatically determines the data type
        based on the value you assign.
      </p>

      {isFirstSnippetShown ? (
        <Code
          className="code-snippet"
          theme="dracula"
          lang="py"
        >
          {FIRST_SNIPPET}
        </Code>
      ) : (
        <div className="reveal">
          <button
            onClick={() =>
              setIsFirstSnippetShown(true)
            }
          >
            Reveal Content
          </button>
        </div>
      )}

      <h2>
        Control Flow: Conditionals and Loops
      </h2>
      <p>
        Python has standard control flow
        structures like if statements, for and
        while loops.
      </p>

      {isSecondSnippetShown ? (
        <Code
          className="code-snippet"
          theme="dracula"
          lang="py"
        >
          {SECOND_SNIPPET}
        </Code>
      ) : (
        <div className="reveal">
          <button
            onClick={() =>
              setIsSecondSnippetShown(true)
            }
          >
            Reveal Content
          </button>
        </div>
      )}

      <h2>Functions and Basic Data Structures</h2>

      <p>
        In Python, you can define your own
        functions using the def keyword. Python
        also has built-in data structures like
        lists and dictionaries.
      </p>

      {isThirdSnippetShown ? (
        <Code
          className="code-snippet"
          theme="dracula"
          lang="py"
        >
          {THIRD_SNIPPET}
        </Code>
      ) : (
        <div className="reveal">
          <button
            onClick={() =>
              setIsThirdSnippetShown(true)
            }
          >
            Reveal Content
          </button>
        </div>
      )}
    </main>
  );
}

const FIRST_SNIPPET = `\
# This is a comment. Python ignores anything after the # symbol
name = "John Doe"  # This is a string
age = 30  # This is an integer
height = 5.9  # This is a floating point number

# Let's print these out
print("Name:", name)
print("Age:", age)
print("Height:", height)\
`;
const SECOND_SNIPPET = `\
# If statement
if age > 18:
    print(name, "is an adult.")
else:
    print(name, "is a minor.")

# For loop
for i in range(5):  # range(5) generates numbers from 0 to 4
    print(i)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1  # This is the same as 'count = count + 1'\
`;
const THIRD_SNIPPET = `\
# Define a function
def greet(name):
    return "Hello, " + name

# Call the function
print(greet("John Doe"))

# List
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Dictionary
person = {"name": "John Doe", "age": 30, "height": 5.9}
for key, value in person.items():
    print(key, ":", value)\
`;

export default Home;
