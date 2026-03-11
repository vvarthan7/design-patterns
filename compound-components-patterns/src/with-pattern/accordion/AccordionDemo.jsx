import Accordion from "./Accordion";

export default function AccordionDemo() {
  return (
    <Accordion>
      <Accordion.Item title="What is Compound Component Pattern?">
        It's a React pattern that allows parent and child components to work
        together seamlessly while giving developers flexible composition.
      </Accordion.Item>

      <Accordion.Item title="Why use it?">
        <p>
          It makes UI libraries like modals, tabs, accordions, menus, etc.
          easier to build and use.
        </p>
        <img src="https://images.unsplash.com/photo-1649034692520-1cd409b18bdb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Accordion.Item>

      <Accordion.Item title="Pitfalls?">
        Overusing it can lead to deeply nested structures or make things harder
        to debug if not documented well.
      </Accordion.Item>
    </Accordion>
  );
}
