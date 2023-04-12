import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='flex flex-col gap-6 w-[80%] m-auto'>
            <div className='border rounded-md mt-20  p-10 bg-[#cfcaca]'>
                <h2 className='text-xl font-semibold'>When should you use context API?</h2>
                <p className='text-justify'>The React Context API is used to provide a way to share data between components without having to pass props down manually at every level of the component tree. It can be used when you have data or functionality that needs to be shared by many components in your application.</p>
            </div>
            <div className='border rounded-md  p-10 bg-[#cfcaca]'>
                <h2 className='text-xl font-semibold'> What is a custom hook?</h2>
                <p className='text-justify'>In React, a custom hook is a JavaScript function that allows you to reuse stateful logic between multiple components. Custom hooks are a way to abstract away complex logic from your components and make it reusable across your application.

                Custom hooks follow a specific naming convention of starting with the word "use" (e.g. useFetch, useForm, useAuth, etc.) and can be created by combining built-in React hooks or other custom hooks.</p>
            </div>
            <div className='border rounded-md  p-10 bg-[#cfcaca]'>
                <h2 className='text-xl font-semibold'>What is useRef?</h2>
                <p className='text-justify'>In React, useRef is a hook that allows you to create a mutable reference that persists across renders. You can use the useRef hook to access DOM nodes or to store any mutable value that needs to be accessed between renders.

                The useRef hook returns a JavaScript object with a single property current, which can be used to read or modify the current value of the reference. The current property is initialized to the value passed to the useRef hook.</p>
            </div>
            
            <div className='border rounded-md  p-10 bg-[#cfcaca]'>
                <h2 className='text-xl font-semibold'> What is useMemo?</h2>
                <p className='text-justify'>In React, useMemo is a hook that allows you to memoize expensive computations so that they are only recalculated when their dependencies change. You can use the useMemo hook to optimize the performance of your application by avoiding unnecessary re-renders caused by expensive computations.

                The useMemo hook takes a function and an array of dependencies as arguments. The function is the computation that you want to memoize, and the array of dependencies contains the values that the computation depends on. The hook returns the memoized value of the computation.</p>
            </div>
            
        </div>
    );
};

export default Blog;