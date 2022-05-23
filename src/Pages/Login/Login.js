import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section class="h-screen">
            <div class="container px-6 py-12 h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            class="w-full"
                            alt="Phone" />
                    </div>
                    <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form>

                            <div class="mb-6">
                                <input
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address" />
                            </div>


                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password" />
                            </div>

                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <Link to="/signup">Don't have an account? Singup</Link>
                                </div>
                                <a
                                    href="#!"
                                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>
                            </div>

                            <button
                                type="submit"
                                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light">
                                Sign in
                            </button>

                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p class="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                        </form>
                        <a
                            class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                class="w-3.5 h-3.5 mr-2">
                                <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>Continue with Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;