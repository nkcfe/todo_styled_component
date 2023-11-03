import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplates from "./components/TodoTemplates";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

// styled-components에서 글로벌 스타일을 추가하고 싶을 때 사용.
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplates>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplates>
    </TodoProvider>
  );
}

export default App;
