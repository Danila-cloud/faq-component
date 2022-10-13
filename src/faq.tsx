import { FaqQuestion } from "./faq-question";

export function FAQ() {
  return (
    <section className="">
      <h2 className="pl-[72px] font-sora text-3xl leading-[44px] text-neutral-50">
        FAQ
      </h2>
      <div className="mt-20 pl-[72px]">
        <FaqQuestion
          question={"What is it React?"}
          answer={
            "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."
          }
        />
        <FaqQuestion
          question={"What is it TypeScript?"}
          answer={
            "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript."
          }
        />
        <FaqQuestion
          question={"What is it GitHub?"}
          answer={
            "GitHub, Inc., is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project."
          }
        />
        <FaqQuestion
          question={"What is it C#?"}
          answer={
            "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
          }
        />
      </div>
    </section>
  );
}
