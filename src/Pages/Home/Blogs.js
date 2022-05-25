import React from 'react';

const Blogs = () => {
    return (
        <div className='pt-24 px-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-7'>
            <div className='shadow-xl p-4 rounded-xl'>
                <h2 className='text-2xl font-bold mb-3'> How will you improve the performance of a React Application?</h2>
                <p><span className='text-xl font-bold'>Ans:</span> We can't begin to optimize an app without knowing exactly when and where to optimize. You might be asking, “Where do we start?”
                    1. Avoid inline style attributes: The blowser often invest a lot of time rendering, when syle are implied inline. Scripting and rendering take time beacause the browser has to plan all the React style rules to the CSS Property.
                    2. Avoid inline function in the render method. If we use the inline function. the function will a generate a new instance of the object in the render and there will be mulitple instances of these function. which will lead to consuming more time in garbage.
                    3. Avoid extra tag by using React Fragment: using react Fragments decreses the number of addtional tags and satifies the necessity of single parent.
                </p>
            </div>
            <div className='shadow-xl p-4 rounded-xl'>
                <h2 className='text-2xl font-bold mb-3'>What are the different ways to manage a state in a React application?</h2>
                <p><span className='text-xl font-bold'>Ans:</span> There are four way to manage React State
                    1. Local State: Local State is data we manege in one or another component
                    Local state is most often managed in React the use state hook.
                    2. Global State: Global State is data we manage across multiple components
                    Global state is neccessary when we want to get and update data andywhere in our app.
                    3. Server State.  Data that comes from and external server that must be integrated which our UI state.
                    SErver state is a simple concepts but can be hard to manage along side all of our local and global UI state.
                    4. URL State. Data that exists on our ULRs. including the pathname and query pareamenters.
                    URL state is often missing as a category of state, but it is an important one.

                </p>
            </div>
            <div className='shadow-xl p-4 rounded-xl'>
                <h2 className='text-2xl font-bold mb-3'>How does prototypical inheritance work?</h2>
                <p><span className='text-xl font-bold'>Ans:</span> Javascript is protype based, Object Oriented programming language. Protypical inheritance meaning that objets and methods can be shared extended and copied.
                    Sharing object makes for easy inheritance of struture.
                    Javascript is the most common of the protype capable language and ists capabilities are relatively unique. when used approtimately, Protypical inheritance is powerful toot.
                    prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>
            <div className='shadow-xl p-4 rounded-xl'>
                <h2 className='text-2xl font-bold mb-3'>What is a unit test? Why should write unit tests?</h2>
                <p><span className='text-xl font-bold'>Ans:</span> Unit testing involves testing individual components of the software program. The main purpose behind this is to check that all the individual parts are working as intended. hat can be tested. Generally, it has a few inputs and a single output.
                    Type of unit testing: There are many benefits of unit testing. These are written below.
                    1. The process become agile: This is is the benifits of unit testing When you add more eatures to any software, you might need to make changes to the old design and code, and this can be expensive as well as risky.If you use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier.
                    2. Quality of Code: Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing.
                    3. Find software Bugs Easily:  Unit testing helps identify all kinds of issues with the software at a very early stage. Software developers can then work on those issues first before progressing any further.
                </p>
            </div>
            <div className='shadow-xl p-4 rounded-xl'>
                <h2 className='text-2xl font-bold mb-3'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p><span className='text-xl font-bold'>Ans:</span>1. If we update it directly calling setState afterward may just replace the update we managed
                    2. When we directly update the state. it does not changes state immediately. instred of pending transistion and accessing it after calling this calling this method will only return the preset value.
                    3. We will lose control of the state acros all components.
                </p>
            </div>
        </div>
    );
};

export default Blogs;