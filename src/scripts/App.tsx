import * as React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends React.Component<
    {},
    {
        page: Page
    }
    > {
    constructor(props: App["props"]) {
        super(props);
        this.state = { page: Page.HOME };
    }

    public render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <div onClick={() => this.setState({ page: Page.HOME })}>Home</div>
                        </li>
                        <li>
                            <div onClick={() => this.setState({ page: Page.ABOUT })}>About</div>
                        </li>
                    </ul>
                </nav>

                {this.state.page === Page.HOME ? <Home /> : null}
                {this.state.page === Page.ABOUT ? <About /> : null}
            </div>
        );
    }
}

enum Page {
    HOME = "HOME",
    ABOUT = "ABOUT",
}
