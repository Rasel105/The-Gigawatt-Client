import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2> How will you improve the performance of a React Application?</h2>
                <p>Ans: We can't begin to optimize an app without knowing exactly when and where to optimize. You might be asking, “Where do we start?”
                    1. Avoid inline style attributes: The blowser often invest a lot of time rendering, when syle are implied inline. Scripting and rendering take time beacause the browser has to plan all the React style rules to the CSS Property.
                    2. Avoid inline function in the render method. If we use the inline function. the function will a generate a new instance of the object in the render and there will be mulitple instances of these function. which will lead to consuming more time in garbage.
                    3. Avoid extra tag by using React Fragment: using react Fragments decreses the number of addtional tags and satifies the necessity of single parent.
                </p>
            </div>
            <div>
                <h2>What are the different ways to manage a state in a React application?</h2>
                <p>Ans: There are four way to manage React State
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
        </div>
    );
};

export default Blogs;