import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="container max-w-full  border-b border-gray-400">
          <div className="w-3/4 mx-auto flex items-center justify-between h-20 inset-0 px-6 ">
            <h2>
              <a href="#">Blog</a>
            </h2>
            <ul className="space-x-8 flex items-center text-sm font-medium h-full">
              <li className="nav_link">
                <a href="#">Profile</a>
              </li>
              <li className="nav_link">
                <a href="logout">logout</a>
              </li>
              <li className="nav_link">
                <a href="login">login</a>
              </li>
              <li className="nav_link">
                <a href="signin">signup</a>
              </li>
            </ul>
          </div>
        </header>
        <div className="bg-gray-200">
          <div className="w-3/4 pl-6 mx-auto h-20 flex">
            <div className="w-full flex items-center">
              <ul className="w-3/4 flex justify-between items-center">
                <li className="hover:text-gray-600">
                  <a href="">Latest Posts</a>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="#">
                    Technology
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="#">
                    Enviromnent
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-600" href="#">
                    Culture
                  </a>
                </li>
              </ul>
              <div className="w-1/4 pl-16 flex justify-center">
                <h3>
                  <a href="#" className="bg-gray-400 px-4 py-3 hover:bg-gray-300">
                    Add Post
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 pl-6 mx-auto mt-10 flex">
          <div className="w-full flex flex-wrap">
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/4 mb-8 px-2">
              <a href="#">
                <div className="bg-gray-200 border border-gray-200">
                  <div
                    // style="background-image: url('./logo.svg');"
                    className="h-64 w-full bg-cover"
                  ></div>
                  <div className="p-6">
                    <div className="w-full">
                      <div className="w-2/4 flex self-center">
                        <h4 className="h4 bg-gray-400 px-2 py-1">Technology</h4>
                      </div>
                      <p>title</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
