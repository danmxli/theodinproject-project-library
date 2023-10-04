import Image from "next/image";
import CodeDisplay from "../codedisplay";
import ExampleForm from "./forms/exampleform";

const FormDemo = () => {

    const formCode = `
        <form action="/" target="_blank" method="get">
        <div class="m-4">
            <label>Email</label>
            <input type="text" placeholder="Enter your email">
        </div>
        <div class="m-4">
            <label>Name</label>
            <input type="text" placeholder="Enter your name">
        </div>
        <br>
        <div class="inline-grid">
            <div class="m-4">
                <label>Password</label>
                <input type="password" placeholder="Enter your password">
            </div>
            <div class="m-4">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm your password">
            </div>
            <div class="m-4">
                <label>Message</label> <br>
                <textarea placeholder="What are you interested in?" rows="4"></textarea>
            </div>
        </div>
        <div class="m-4">
            <button type="submit">Submit</button>
        </div>
    </form>`

    return (
        <div className="bg-neutral-100 dark:bg-slate-950 rounded-lg p-4 mb-4">
            <h1 className="dark:text-indigo-400 text-2xl mb-4">HTML Forms</h1>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                One of the most important components of any website is its forms, since they serve as the user entry point into your backend. when a user fills out a form, you process the data.
            </p>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                The action attribute, which accepts a URL value and instructs the form where to transmit the data, is supported by the form element.
            </p>
            <p className="lg:max-w-2xl mb-2 dark:text-gray-400">
                The method attribute, which indicates which HTTP method should be used to submit the form, is accepted by the form element. GET and POST are two widely used techniques.
            </p>
            <h2 className="dark:text-indigo-400 text-xl mb-2">Example Form</h2>
            <ExampleForm />
            
            <h2 className="dark:text-indigo-400 text-xl mt-2 mb-2">Source code</h2>
            <div>
                <CodeDisplay code={formCode} />
            </div>
        </div>
    );
};

export default FormDemo;